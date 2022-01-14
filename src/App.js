import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from "react";
import axios from "axios";
import AppWrapper from "../src/AppWrapper";



let App = () => {

  let userCredentials = localStorage.getItem("user logged in");
  let user = JSON.parse(userCredentials);

  useEffect(() => {
    let alanBtnInstance = alanBtn({
      key: '536cbf69313e565d5b46b5bdcf234ac52e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'allItems') {
          window.scrollBy(0, window.innerHeight);

        } else if (commandData.command === "myItem") {
          let foodId = commandData.foodId.toString();
          addToCart(foodId);
        } else if (commandData.command === "removeItem") {
          let removeId = commandData.foodId.toString();
          removeFromCart(removeId);
        } else if (commandData.command === "showcart") {
          window.scrollBy(0, window.innerHeight);
        }
      }
    });
  });

  let addToCart = async (foodId) => {
    try {
      console.log("voice script run", foodId);
      await axios.post("/api/user/cart", {
        food: foodId,
        user: user[0]._id.trim(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  let removeFromCart = async (foodId) => {
    try {
      await axios.post("/api/user/cart/delete", {
        user: user[0]._id,
        food: foodId,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppWrapper />
  );
}

export default App;
