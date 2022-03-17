import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../store/products";

const Grid = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="flex-container">
      {products.map((course) => {
        return (
          <div className="flex-item ">
            <div className="rectangulo">
              <h3>{course.productName}</h3>
              <p className="p">{course.duration}</p>
              <Link to={`/users/products/${course.id}`}>
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
