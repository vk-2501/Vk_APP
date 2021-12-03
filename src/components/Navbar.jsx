import React from "react";
import "./css/Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();

  return (
    <div className="nav">
      <img
        src="https://raw.githubusercontent.com/Jassi10000/AlanEats/main/frontend/src/images/AlanEatsLogo.png?token=ANRAM26ZIN6MJYPGOYKDB53BVT6CW"
        alt="alan eat"
      />
      <div className="nav_search">
        <input type="text" placeholder="Search" />
        <SearchIcon className="nav_searchIcon" />
      </div>
      <div className="nav_header">
        <span
          className="nav_signin"
          onClick={() => {
            history.push("/signin");
          }}
        >
          Sign In
        </span>
        <div
          className="nav_cart"
          onClick={() => {
            history.push("/checkout");
          }}
        >
          <ShoppingBasketIcon className="cartIcon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
