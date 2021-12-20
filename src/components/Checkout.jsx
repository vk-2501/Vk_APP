import axios from "axios";
import React from "react";
import "./css/Checkout.css";
import Subtotal from "./Subtotal";
import { useEffect, useState } from "react";
import CartImg from "./cartImg.jpg";

const Checkout = () => {
  let cartData = [];
  let [reviewId, setReviewId] = useState([]);
  let [foodData, setFoodData] = useState([]);
  let userCredentials = localStorage.getItem("user logged in");
  let user = JSON.parse(userCredentials);

  const getUser = async () => {
    axios
      .get(`/api/user/${user[0]._id}`)
      .then((res) => {
        cartData = res.data.user.cart;
      })
      .then(async () => {
        let arr = await getFoodData();
        setFoodData(arr);
      });
  };

  let getFoodData = async () => {
    try {
      let arr = [];
      arr = await Promise.all(
        cartData.map(async (id) => {
          let res = await axios.get(`/api/food/${id}`);
          return res.data.data;
        })
      );
      return arr;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  console.log(reviewId);

  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="checkout_img">
          <img src={CartImg} alt="" />
        </div>
        <div className="subtotal-container">
          <Subtotal />
        </div>
      </div>
      <h1>Shopping Cart</h1>
      <div className="checkout_items">
        {foodData.map((foodItem) => (
          <div className="foodItem_card">
            <div className="cartItem_image">
              <img src={foodItem.image_url} alt="" />
            </div>
            <div className="cartItem_info">
              <h3>{foodItem.label}</h3>
              <p>₹{foodItem.price}</p>
              <button className="deleteBtn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
