import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Header from "../commons/Header";
import { getCategory } from "../store/singleCategory";
import { getProductsByCategory } from "../store/products";

const Category = () => {
  const category = useSelector((state) => state.category);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(()=>{
    dispatch(getCategory(name))
    dispatch(getProductsByCategory(category.id))
  }, [category])

  return (
    <div>
      <Header category={category} />
      <seccion className="flex-container">
      {products.map((course, i) => {
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
    </seccion>
    </div>
  );
};

export default Category;
