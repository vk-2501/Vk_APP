import axios from "axios";
import React from "react";
import "./css/productDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  let { foodId } = useParams();
  let [details, setDetails] = useState([]);
  let [ingredients, setIngredients] = useState([]);

  let getFoodDetails = (id) => {
    axios.get(`/api/food/${id}`).then((res) => {
      setDetails(res.data.data);
      setIngredients(res.data.data.ingredients);
    });
  };

  useEffect(() => {
    getFoodDetails(foodId);
  }, []);

  console.log(details);

  return (
    <div className="productDetail">
      <div className="my_product">
        <div className="product_detailsInfo">
          <h3>{details.label}</h3>
          <h3>{`₹${details.price}`}</h3>
        </div>
        <div className="product_img">
          <img src={details.image_url} alt="product image" />
        </div>
      </div>
      <div className="product_ingredients">
        {ingredients.map((ingredient) => (
          <div className="ingredient-detail" key={ingredient._id}>
            <img src={ingredient.ingredient_Image} alt="ingredient image" />
            <h4>{ingredient.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
