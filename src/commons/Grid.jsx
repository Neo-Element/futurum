import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleCourse from "../components/SingleCourse";
import { products } from "../utils/fakeData";

const Grid = () => {
  //const courses = useSelector((state) => state.products);

  return (
    <div className="flex-container">
      {products.map((course, i) => {
        return (
          <div className="flex-item ">
            <div className="rectangulo">
              <h3>{course.productName}</h3>
              <p className="p">{course.duration}</p>
              <Link to={`/users/products/${i}`}>
                <button className="btn btn-lg btn-dark borderMark">
                  Ver detalles
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
