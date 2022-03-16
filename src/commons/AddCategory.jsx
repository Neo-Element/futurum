import React from "react";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { categoryRegister } from "../store/singleCategory";

const AddCategory = () => {
  const name = useInput();
  const description = useInput();
  const image = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      categoryRegister({
        name: name.value,
        description: description.value,
        imagen: image.value,
      })
    )
      .then(() => navigate("/admin/categories"))
      .catch((err) => console.log(err));
  };

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
