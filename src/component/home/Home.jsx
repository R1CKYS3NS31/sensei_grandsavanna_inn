import React from "react";
import { Product } from "../product/Product";
import "./home.css";

export const Home = () => {
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
          <Product
            id={1}
            title={"The learn startup"}
            price={19.00}
            image={
              "images/beer.jpeg"
            }
            rating={4}
          />
          <Product
            id={2}
            title={"The learn startup"}
            price={100.00}
            image={
              "images/beer.jpeg"
            }
            rating={4}
          />
          {/* product */}
        </div>
        <div className="home_row">
          <Product
            id={3}
            title={"The learn startup"}
            price={178.00}
            image={
              "images/beer.jpeg"
            }
            rating={4}
          />
          <Product
            id={4}
            title={"The learn startup"}
            price={19.0}
            image={
              "images/beer.jpeg"
            }
            rating={4}
          />
          <Product
            id={5}
            title={"The learn startup"}
            price={67.00}
            image={
              "images/beer.jpeg"
            }
            rating={4}
          />
          {/* product */}
          {/* product */}
        </div>
        <div className="home_row">
          <Product
            id={6}
            title={"The learn startup"}
            price={34.00}
            image={
              "images/beer.jpeg"
            }
            rating={4}
          />

          {/* product */}
          {/* product */}
        </div>
      </div>
    </div>
  );
};
