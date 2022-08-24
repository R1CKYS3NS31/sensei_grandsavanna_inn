import React from "react";
import { useStateValue } from "../../utils/StateProvider";
import "./checkout.css";
import { CheckoutProduct } from "./checkoutProduct/CheckoutProduct";
import { Subtotal } from "./subtotal/Subtotal";

export const Checkout = () => {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
        // src="images/homepagebanneralesWEB.jpg"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="chekout_Ad"
          className="chekout_ad"
        />
        <div className="">
          <h4>Hello, {user?.email}</h4>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {/* checkout product */}
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
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};
