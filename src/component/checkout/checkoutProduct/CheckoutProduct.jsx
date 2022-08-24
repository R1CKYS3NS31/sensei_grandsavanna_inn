import React from "react";
import { reducerAction } from "../../../utils/reducer";
import { useStateValue } from "../../../utils/StateProvider";
import "./checkoutProduct.css";

export const CheckoutProduct = ({
  id,
  image,
  title,
  price,
  rating,
  hideButton,
}) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: reducerAction.REMOVE_FROM_BASKET,
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct_image" />
      <div className="checkoutProduct_info">
        <p className="chekoutProduct_title">{title}</p>
        <p className="checkoutProdcut_price">
          <small>Ksh. </small>
          <strong>{price}</strong>
        </p>
        <div className="chekoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
};
