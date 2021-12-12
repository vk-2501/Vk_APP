import React from "react";
import "./css/Review.css";
import { Rating } from "@material-ui/lab";
import { useState } from "react";
import { Box } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import axios from "axios";
import { useSelector } from "react-redux";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const AddReview = ({ itemDetails }) => {
  let [value, setValue] = useState("");
  let [hover, setHover] = useState("");
  let [reviewDescription, setReviewDescription] = useState("");
  const user = useSelector((state) => state);
  console.log(user);

  const handleReviewRequest = async () => {
    try {
      await axios.post("/api/review", {
        description: reviewDescription,
        rating: value,
        food: itemDetails._id,
        user: user._id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addReview">
      <h2>Add Review Here</h2>
      <div className="item_info">
        <div className="image">
          <img src={itemDetails.image_url} alt="item image" />
        </div>
        <div className="info">
          <h5>{itemDetails.label}</h5>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
        </div>
      </div>
      <form>
        <h3>Add a written review </h3>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => {
            setReviewDescription(e.target.value);
          }}
        />
        <button
          className="addReviewBtn"
          onClick={() => {
            handleReviewRequest();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
