import { Search, ShoppingBasket } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { useStateValue } from "../../utils/StateProvider";
import "./header.css";

export const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link className="link" to={"/"}>
        <h1 className="header_logo">Grandsavanna Inn</h1>
        {/* <img
          className="header_logo"
          src="images/homepagebanneralesWEB.jpg"
          alt="logo"
        /> */}
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <Search className="header_searchIcon" />
      </div>

      <div className="header_nav">
        {/* login */}
        <Link className="link" to={!user && "/login"}>
          <div className="header_option" onClick={handleAuth}>
            <span className="header_optionLineOne">
              {user ? user.email : "Hello Guest"}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link className="link" to={"/orders"}>
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div> */}
        <Link className="link" to={"/checkout"}>
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
