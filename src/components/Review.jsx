import React from "react";
import { Avatar } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const Review = ({ reviewDetails }) => {
  return (
    <div className="review">
      <div className="user_details">
        <Avatar />
        <p>user name</p>
      </div>
      <div className="food_rating">
        {/* <div className="product_rating"> */}
        {/* {Array(reviewDetails.rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))} */}
        {/* </div> */}
        <Rating value={reviewDetails.rating} precision={0.5} />
        <span className="time_stamp">{reviewDetails.createdAt}</span>
      </div>
      <p>{reviewDetails.description}</p>
    </div>
  );
};

export default Review;
