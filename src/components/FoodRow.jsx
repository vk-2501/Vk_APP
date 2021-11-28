import React from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./css/FoodRow.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const FoodRow = () => {
  const [foodItems, setFoodItems] = useState([]);

  let history = useHistory();

  const getAllFoodItems = () => {
    axios.get("/api/food").then((res) => {
      setFoodItems(res.data.data);
    });
  };

  useEffect(() => {
    getAllFoodItems();
  }, []);

  return (
    <div className="foodRow">
      {foodItems.map((foodItem) => (
        <div className="item-card" key={foodItem._id}>
          <img
            src={foodItem.image_url}
            alt="food item"
            onClick={() => {
              history.push(`/productDetail/${foodItem._id}`);
            }}
          />
          <div className="product">
            <div className="product-info">
              <h4>{foodItem.label}</h4>
              <h4>₹{foodItem.price}</h4>
            </div>
            <div className="addToCart">
              <AddShoppingCartIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodRow;
