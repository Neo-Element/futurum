import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../store/categories";

const HomeUsers = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className="reviewsCard">
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
                        src={categories[0].imagen}
                        width={"100"}
                        data-interval="1000"
                        alt="user"
                      />
                    </div>
                    <div className="img-text">
                      <h2>{categories[0].name}</h2>
                      <p>{categories[0].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {categories.map((category) => (
              <div class="carousel-item">
                <div className="row">
                  <div className="col-md-4 borderMark">
                    <div className="single-box">
                      <div className="img-area">
                        <img src={category.imagen} width={"100"} alt="user" />
                      </div>
                      <div className="img-text">
                        <h2>{category.name}</h2>
                        <p>{category.description}</p>
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
                className="carousel-control-prev-icon controlColor"
                aria-hidden="true"
              ></span>
            </button>
            <button
              className="carousel-control-next "
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
    </div>
  );
};

export default HomeUsers;
