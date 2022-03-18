import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StarRating } from "react-star-rating-element";
import { sendReview } from "../store/review";

const StarsRating = ({ productId, userId }) => {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  const changeRating = (rating) => {
    dispatch(
      sendReview({ votes: rating, userId: userId, productId: productId })
    );
    setRating(rating);
  };

  return (
    <div className="Wrapper">
      <StarRating
        ratingValue={rating}
        changeRating={changeRating}
        starEmptyColor="#999999"
        starSpacing={10}
        starDimension={30}
      />
    </div>
  );
};

export default StarsRating;
