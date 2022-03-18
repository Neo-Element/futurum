import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { getOneProduct, modifyProduct } from "../store/singleProduct";
import { getCategories } from "../store/categories";


const EditCourse = () => {

  const course = useSelector(state => state.product)

  const dispatch = useDispatch();
  const { id } = useParams();
  const productName = useInput(course.productName);
  const price = useInput(course.price);
  const category = useInput(course.category);
  const overview = useInput(course.overview);
  const image = useInput(course.image);
  const duration = useInput(course.duration);
  const requirements = useInput(course.requirements);
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories)


  useEffect(() => {
    dispatch(getOneProduct(id));
    dispatch(getCategories())
  }, [])


  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      modifyProduct({
        id: id,
        productName: productName.value,
        price: price.value,
        category: document.getElementById("category").value,
        overview: overview.value,
        image: image.value,
        duration: duration.value,
        requirements: requirements.value,
      })
    )
      .then((course) => {
        navigate("/admin/products")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="containerSingle">
        <div><h1></h1></div>
      

        <div className="EditCourseCard">
          <div className="cardTitle">
            <h1 id="title">Edit course</h1>
            <form onSubmit={handlerSubmit}>

              <label className="mb-2">Course</label>
              <input
                {...productName}
                type="text"
                required
                className="form-control"
                required
              />
              <label className="mb-2">Price</label>
              <input value={price.value} onChange={price.onChange} type="text" placeholder={course.price} className="form-control" required />
              <label className="mb-2">Category</label>
              <br></br>

              <select id="category" className="btn-dark btn">
              {categories.map((category) => {
                return (
                  <option value={category.id}>{category.name}</option>
                );
              })}
            </select>

            <br></br>
              <label className="mb-2">About</label>
              <input
                {...overview}
                type="text"
                className="form-control"
                required
              />
              <label className="mb-2">Image</label>
              <input {...image} type="text" className="form-control" required />
              <label className="mb-2">Duration</label>
              <input {...duration} type="text" className="form-control" required />
              <label className="mb-2">Requirements</label>
              <input
                {...requirements}
                type="text"
                placeholder={course.requirements}
                className="form-control"
                required
              />
              <div className="btnAddR">
                <button type="submit" className="btn btn-dark btn-lg btnAdd">UPDATE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div >
  );


};

export default EditCourse;

{/* // export default EditCourse;
// <select class="custom-select custom-select-lg mb-3">
//   <option selected>Open this select menu</option>
//   <option value="1">One</option>
//   <option value="2">Two</option>
//   <option value="3">Three</option>
// </select>
// } */}