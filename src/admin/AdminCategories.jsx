import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/fakeDataCategories";

const AdminCategories = () => {
  return (
    <div className="flex-container">
      {categories.map((categorie, i) => {
        return (
          <div className="flex-item">
            <h3>{categorie.name}</h3>
            <p className="p">{categorie.description}</p>
            <img src={categorie.imagen} alt="logo" />
            <div className="botones">
            <Link className="link" to={`/admin/categories/${i}`}>
              <button className="btn btn-lg btn-dark">Editar</button>
            </Link>
            <Link className="link" to={`/admin/categories/${i}`}>
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