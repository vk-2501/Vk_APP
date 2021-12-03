import axios from "axios";
import React from "react";
import "./css/productDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Review from "./Review";
let i = 0;
const ProductDetail = () => {
  let { foodId } = useParams();
  let [details, setDetails] = useState([]);
  let [ingredients, setIngredients] = useState([]);
  let [reviewData, setReviewData] = useState([]);
  let reviewsList = [];

  let getFoodDetails = () => {
    axios
      .get(`/api/food/${foodId}`)
      .then((res) => {
        setDetails(res.data.data);
        setIngredients(res.data.data.ingredients);
        reviewsList = res.data.data.reviews;
      })
      .then(async () => {
        let arr = await getReview();
        setReviewData(arr);
      });
  };

  let getReview = async () => {
    try {
      let arr = [];
      arr = await Promise.all(
        reviewsList.map(async (id) => {
          let res = await axios.get(`/api/review/${id}`);
          return res.data.data;
        })
      );
      return arr;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getFoodDetails();
  }, []);

  return (
    <>
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
          <div className="ingredient-heading">
            <h1>Ingredients</h1>
          </div>
          <div className="ingredients">
            {ingredients.map((ingredient) => (
              <div className="ingredient-detail" key={ingredient._id}>
                <img src={ingredient.ingredient_Image} alt="ingredient image" />
                <h4>{ingredient.description}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="reviews">
        {reviewData.map((review) => {
          return <Review reviewDetails={review} key={review._id} />;
        })}
      </div>
    </>
  );
};

export default ProductDetail;
