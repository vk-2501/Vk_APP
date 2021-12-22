import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./css/FoodRow.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const FoodRow = () => {
  let history = useHistory();
  const [foodItems, setFoodItems] = useState([]);

  let userCredentials = localStorage.getItem("user logged in");
  let user = JSON.parse(userCredentials);

  const getAllFoodItems = () => {
    axios.get("/api/food").then((res) => {
      setFoodItems(res.data.data);
      
    });
  };

  useEffect(() => {
    getAllFoodItems();
  }, []);

  return (

   <>
    <h1 className="categoryName">Fast Food </h1>
    <div className="foodRow">
      {foodItems.map((foodItem) => (
        <div className="item-card" key={foodItem._id}>
          <img
            src={foodItem.image_url}
            alt="food item"
            onClick={() => {
              return user
                ? history.push(`/productDetail/${foodItem._id}`)
                : alert("please signin to your account before doing anything");
            }}
          />
          <div className="product">
            <div className="product-info">
              <h4>{foodItem.label}</h4>
              <h4>₹{foodItem.price}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default FoodRow;
