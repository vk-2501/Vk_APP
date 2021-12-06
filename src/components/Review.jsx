import React from "react";
import { Avatar } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import "./css/Review.css";

const Review = ({ reviewDetails }) => {
  return (
    <div className="review_data">
      <div className="user_details">
        <Avatar />
        <p>user name</p>
      </div>
      <div className="food_rating">
        <Rating value={reviewDetails.rating} precision={0.5} />
        <span className="time_stamp">{reviewDetails.createdAt}</span>
      </div>
      <p>{reviewDetails.description}</p>
    </div>
  );
};

export default Review;
