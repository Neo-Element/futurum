import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsfromProduct } from "../store/review";


//VA A RECIBIR DIRECTAMENTE REVIEW DESDE SINGLECARD
const Reviews = ({id}) => {
  const review = useSelector(state => state.reviews)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(
      getReviewsfromProduct(id)
    )
  },[id])

  const activesitems = review.slice(0, 1);
  const items = review.slice(1, review.length);
  return review.length > 0 ? (
    <div className="row">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4 borderMark">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3122/3122431.png"
                      width={"100"}
                      data-interval="1000"
                      alt="user"
                    />
                  </div>
                  <div className="img-text">
                    <p>{activesitems[0].comment}</p> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          {items.map((coment, i) => (
            <div class="carousel-item">
              <div className="row">
                <div className="col-md-4 borderMark">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3122/3122431.png"
                        width={"100"}
                        alt="user"
                      />
                    </div>
                    <div className="img-text">
                       <p>{coment.comment}</p> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            className="carousel-control-prev controlColor"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next controlColor"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon "
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
    </div>
  ) : (<></>);
};

export default Reviews;
