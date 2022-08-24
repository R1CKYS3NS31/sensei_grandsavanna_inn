import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { addDoc, collection, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../utils/firebase";
import { getBasketTotal, reducerAction } from "../../utils/reducer";
import { useStateValue } from "../../utils/StateProvider";
import { CheckoutProduct } from "../checkout/checkoutProduct/CheckoutProduct";
import "./payment.css";

export const Payment = () => {
  const baseUrl = "http://localhost:5001/sensei-clone/us-central1/api";

  const [{ basket, user }, dispatch] = useStateValue();
  const elements = useElements();
  const stripe = useStripe();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await fetch(
        // total in a currencies subunits
        // `${baseUrl}/payments/create?total=${getBasketTotal(basket) / 100}`,
        `${baseUrl}/payments/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ total: getBasketTotal(basket) }), //data
        }
      );
      const data = await response.json();
      await setClientSecret(data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("The client secrete is: ", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async (paymentIntent) => {
        // payment confirmation

        try {
          const userRef = doc(db, "users", user.uid);
          const orderRef = collection(userRef, "orders", paymentIntent.id);
          await addDoc(orderRef, {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
          // db.collection("users")
          //   .doc(user.uid)
          //   .collection("orders")
          //   .doc(paymentIntent.id)
          //   .set({
          //     basket: basket,
          //     amount: paymentIntent.amount,
          //     created: paymentIntent.created,
          //   });

          // console.log('Doc written with iD:', userRef.id);
        } catch (e) {
          console.error(e);
        }

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: reducerAction.EMPTY_BASKET,
        });

        navigate("/orders", { replace: true });
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to={"/checkout"}>{basket?.length} items</Link>)
        </h1>
        {/* payment and delivery */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Nakuru East</p>
            <p>Bondeni</p>
          </div>
        </div>
        {/* payment section - review items */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment methon */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Ksh. "}
                />
                <button
                  type="submit"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
