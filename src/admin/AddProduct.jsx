import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import { productCreated } from "../store/singleProduct";
import { getCategories } from "../store/categories";


const AddProduct = () => {
  const productName = useInput();
  const price = useInput();
  const category = useInput();
  const overview = useInput();
  const image = useInput();
  const duration = useInput();
  const requirements = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productCreated({
        productName: productName.value,
        price: price.value,
        category: document.getElementById("category").value,
        overview: overview.value,
        ranking: null,
        image: image.value,
        duration: duration.value,
        requirements: requirements.value,
        students: 0
      })
    )
      .then((product) => {
        alert("Course successfully created 📖")
        navigate("/admin/products")
      }) //ver ruta
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1></h1>
      <div className="containerSingle" >
        <div className="EditCourseCard">
          <div className="cardTitle">
            <h1 id="title">Add new course</h1>
            <form onSubmit={handlerSubmit}>
              <label className="mb-2">Course</label>
              <input
                {...productName}
                type="text"
                placeholder="Nombre del curso"
                className="form-control"
                required
              />
              <label className="mb-4">Price</label>
              <input {...price} type="text" placeholder="$" className="form-control" required />
              <label className="mb-2">Category</label>
              <br></br>

              
                <select id="category" className="btn-dark btn">
                    {categories.map((category) => {
                      return(
                        <option href="#" value={category.id}>{category.name}</option>
                      );
                    })}
       
                </select>
  


              <br></br>
              <label className="mb-2">About</label>
              <input
                {...overview}
                type="text"
                placeholder="Breve descripción del curso"
                className="form-control"
                required
              />
              <label className="mb-2">Image</label>
              <input {...image} type="text" placeholder="img.jpg" className="form-control" required />
              <label className="mb-2">Duration</label>
              <input {...duration} type="text" placeholder="4 semanas" className="form-control" required />
              <label className="mb-2">Requirements</label>
              <input
                {...requirements}
                type="text"
                placeholder="Equipo, software y otros materiales requeridos"
                className="form-control"
                required
              />
              <div className="btnAddR">
                <button type="submit" className="btn btn-dark btn-lg btnAdd">Create Course</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
