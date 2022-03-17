import React, { useEffect } from "react";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useMatch } from "react-router-dom";
import {
  categoryRegister,
  getCategory,
  editCategory,
} from "../store/singleCategory";

const AddCategory = () => {
  const isNew = useMatch("/admin/categories/add");
  const name = useInput();
  const description = useInput();
  const image = useInput();
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const category = useSelector((state) => state.category);

  useEffect(() => {
    if (!isNew) {
      dispatch(getCategory(id));
    }
  }, [id]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!isNew) {
      dispatch(
        editCategory({
          id: id,
          name: name.value,
          description: description.value,
          imagen: image.value,
        })
      )
        .then(() => navigate("/admin/categories"))
        .catch((err) => console.log(err));
    } else {
      dispatch(
        categoryRegister({
          name: name.value,
          description: description.value,
          imagen: image.value,
        })
      )
        .then(() => navigate("/admin/categories"))
        .catch((err) => console.log(err));
    }
  };

  if (!isNew) {
    return (
      <div>
        <h1 className="h1">EDIT CATEGORIE</h1>
        <form onSubmit={handlerSubmit} className="singleCard">
          <label className="cardTitle">Name</label>
          <input {...name} type="text" placeholder={category.name} required />
          <label className="cardTitle">description</label>
          <input
            {...description}
            type="text"
            placeholder={category.description}
            required
          />
          <label className="cardTitle">image</label>
          <input {...image} type="text" placeholder={category.imagen} required />
          <button className="btn btn-dark btn-lg btnAdd">Save</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1 className="h1">ADD CATEGORIE</h1>
      <form onSubmit={handlerSubmit} className="singleCard">
        <label className="cardTitle">Name</label>
        <input {...name} type="text" placeholder="categorie name" required />
        <label className="cardTitle">description</label>
        <input
          {...description}
          type="text"
          placeholder="description"
          required
        />
        <label className="cardTitle">image</label>
        <input {...image} type="text" placeholder="url-image " required />
        <button className="btn btn-dark btn-lg btnAdd">Save</button>
      </form>
    </div>
  );
};

export default AddCategory;
