import React from "react";
import { Avatar } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import "./css/Review.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Review = ({ reviewDetails }) => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  console.log(reviewDetails.user);

  const getUserData = async () => {
    try {
      console.log("before fetch req");
      let userData = await axios.get(`/api/user/${reviewDetails.user}`);
      console.log(userData);
      console.log(userData.data.user.name);
      setUserName(userData.data.user.name);
      setUserImage(userData.data.user.userImage);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("before useEffect");
    getUserData();
    console.log("after useEffect");
  }, []);

  return (
    <div className="review_data">
      <div className="user_details">
        <Avatar src={userImage} />
        <p>{userName}</p>
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
