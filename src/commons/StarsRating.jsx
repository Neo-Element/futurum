import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StarRating } from "react-star-rating-element";
import { sendReview } from "../store/review";

const StarsRating = ({ productId, userId }) => {
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  return (
    <div
      className="Wrapper"
      onClick={() =>{
        console.log("RATING =>", rating, "userid", userId, "productid", productId)
        dispatch(sendReview({votes: rating, userId: userId, productId: productId}))  
      }
      }
    >
      <StarRating
        ratingValue={rating}
        changeRating={setRating}
        starEmptyColor="#999999"
        starSpacing={10}
        starDimension={30}
      />
    </div>
  );
};

export default StarsRating;
