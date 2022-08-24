import React from "react";
import { Product } from "../product/Product";
import "./home.css";

export const Home = ({ product }) => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          src="/images/banner-bar.jpg"
          // src="images/Silverlake+Social.png"
          alt="banner"
        />

        <div className="home_row">
          
          {product.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.name}
              price={parseFloat(product.sellingPrice)}
              image={product.img}
              quantity={product.quantity.quantity}
              rating={4}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
