import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../../utils/reducer";
import { useStateValue } from "../../../utils/StateProvider";
import { CheckoutProduct } from "../../checkout/checkoutProduct/CheckoutProduct";
import "./order.css";

export const Order = ({ order }) => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          quantity={item.quantity}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Ksh. "}
      />
    </div>
  );
};
