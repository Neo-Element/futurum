import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { getOneProduct, modifyProduct } from "../store/singleProduct";

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

  console.log("category", category)

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [])


  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      modifyProduct({
        id: id,
        productName: productName.value,
        price: price.value,
        category: category.value,
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
      <h1>editar curso: {course.productName}</h1>

      <form onSubmit={handlerSubmit}>
        <select class="custom-select custom-select-lg mb-3">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <ul>
          <li> <label>Course</label>
            <input
              {...productName}
              type="text"

              required
            />
            <label>Price</label>
            <input value={price.value} onChange={price.onChange} type="text" placeholder={course.price} required></input></li>
          <label>Categoria</label>
          <input
            {...category}
            type="text"
            placeholder={course.category}
            required
          />
          <label>About</label>
          <input
            {...overview}
            type="text"
            placeholder={course.overview}
            required
          />
          <label>Image</label>
          <input {...image} type="text" placeholder={course.image} required />
          <label>Duration</label>
          <input {...duration} type="text" placeholder={course.duration} required />
          <label>Requirements</label>
          <input
            {...requirements}
            type="text"
            placeholder={course.requirements}
            required
          />
          <button>UPDATE</button>
        </ul>
      </form>
    </div>
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