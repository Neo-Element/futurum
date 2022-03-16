import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../store/categories";


const AdminCategories = () => {
  const categories = useSelector((state) => state.categories)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories())
  }, [])

  return (
    <div className="flex-container">
      {categories.map((category) => {
        return (
          <div className="flex-item">
            <h3>{category.name}</h3>
            <p className="p">{category.description}</p>
            <img src={category.imagen} alt="logo" />
            <div className="botones">
            <Link className="link" to={`/admin/categories/${category.id}`}>
              <button className="btn btn-lg btn-dark">Editar</button>
            </Link>
            <Link className="link" to={`/admin/categories/${category.id}`}>
              <button className="btn btn-lg btn-dark">Eliminar</button>
            </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminCategories;