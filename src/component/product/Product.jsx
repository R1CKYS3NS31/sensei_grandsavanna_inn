import React from "react";
import { reducerAction } from "../../utils/reducer";
import { useStateValue } from "../../utils/StateProvider";
import "./product.css";

export const Product = ({ id, title, image, price, rating }) => {
  const [{basket}, dispatch] = useStateValue(); 
  

  const addToBasket = () => {
    // dispatch item into basket

    dispatch({
      type: reducerAction.ADD_TO_BASKET,
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>Ksh. </small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="p_img" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};
