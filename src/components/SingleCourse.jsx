import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardRange from "../commons/CardRange";
import Reviews from "../commons/Reviews";
import { products } from "../utils/fakeData";
import { setCart } from "../store/in-cartCourses";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

//RECIBE UN CURSO EN PARTICULAR
const SingleCourse = () => {
  const { id } = useParams();
  const course = products[id];
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleClick = () => {
    dispatch(setCart([...cart, course]));
  };

  return (
    <div className="containerSingle">
      <div className="singleCard">
        <div className="cardTitle">
          <div className="colorBar"> </div>
          <h5>{`${course.duration} hours`}</h5>
        </div>
        <div className="bodyCard">
          <div className="half">
            <div className="text">
              <h1>{course.productName}</h1>
              <p className="sub">{course.category}</p>
              <hr></hr>
            </div>
            <div class="image">
              <img src={course.image} alt="logo" />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <h3>Overview</h3>
              <p>{course.overview}</p>
            </div>
            <span className="stock">
              <i className="fa-solid fa-eye"></i>Calification
            </span>
            <div className="calification">
              <CardRange range={course.ranking} />
              <span>{` ${course.students} students`}</span>
            </div>
            <div className="priceAndAdd">
              <p className="price">{`Price: $ ${course.price}`}</p>
              <button
                onClick={handleClick}
                className="btn btn-dark btn-lg btnAdd"
              >
                <i class="fa-solid fa-cart-arrow-down"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="reviewsCard">
        <h2>Testimonials</h2>
        <Reviews review={course.review} />
      </div>
      <hr className="hrDown"></hr>
      <div className="bodyInfo">
        <h2>Requirements</h2>
        <p>{course.requirements[0]}</p>
      </div>
    </div>
  );
};

export default SingleCourse;
