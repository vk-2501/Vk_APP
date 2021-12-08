import React from "react";
import "./css/Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="checkout_img">
          <img
            src="https://image.shutterstock.com/z/stock-vector-set-with-people-who-cook-and-utensils-cooking-background-line-art-poster-vector-illustration-1924592120.jpg"
            alt=""
          />
        </div>
        <div className="subtotal-container">
          <Subtotal />
        </div>
      </div>
      <div className="checkout_items"></div>
    </div>
  );
};

export default Checkout;
