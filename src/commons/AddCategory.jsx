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

  const category = useSelector((state) => state.category);

  const isNew = useMatch("/admin/categories/add");
  const name = useInput(category.name);
  const description = useInput(category.description);
  const image = useInput(category.image);
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();


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
      <div className="containerSingle">
        <div className="AddCategory">
          <div className="cardTitle">
            <h1 className="h1" className="cardTitle">EDIT CATEGORY</h1>
            <form onSubmit={handlerSubmit} className="singleCard">
              <label className="mb-3" className="cardTitle">Name</label>
              <input {...name} type="text" placeholder={category.name} required />
              <label className="mb-3" className="cardTitle">description</label>
              <input
                {...description}
                type="text"
                placeholder={category.description}
                required
              />
              <label className="mb-3" className="cardTitle">image</label>
              <input {...image} type="text" placeholder={category.imagen} required />
              <button className="btn btn-dark btn-lg btnAdd">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (

    <div className="containerSingle">
      <div className="AddCategory">
        <div className="cardTitle">
          <h1 className="h1" className="cardTitle">ADD CATEGORY</h1>
          <form onSubmit={handlerSubmit} className="singleCard">
            <label className="mb-3" className="cardTitle">Name</label>
            <input {...name} type="text" placeholder="categorie name" required />
            <label className="mb-3" className="cardTitle">description</label>
            <input
              {...description}
              type="text"
              placeholder="description"
              required
            />
            <label className="mb-3" className="cardTitle">image</label>
            <input {...image} type="text" placeholder="url-image " required />
            <button className="btn btn-dark btn-lg btnAdd">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
