import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../store/categories";
import { deleteCategory } from "../store/singleCategory";

const AdminCategories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleDelete = (categoryId) => {
    dispatch(deleteCategory(categoryId))
      .then(() => {
        alert("Element deleted!");
        dispatch(getCategories());
      })
  };

  return (
    <div>
      <h1>Categories</h1>
      <h2>Config categories</h2>

      <br></br>
      <div className="tables">
        <table className="table table-sm" id="categorieTable">
          <tbody>
            {categories.map((category, i) => {
              return (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{category.name}</td>
                  <td>
                    <Link to={`/admin/categories/edit/${category.id}`} className="link">
                      <button className="btn-dark btn">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button className="btn-dark btn" onClick={() => { if (window.confirm("Are you sure you want to delete?")) { handleDelete(category.id) } }}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Link to="/admin/categories/add" className="link">
        <button className="botonColorNav" className="btn-dark btn">ADD NEW CATEGORY</button>
      </Link>
      </div>
    </div>
  );
};

export default AdminCategories;
