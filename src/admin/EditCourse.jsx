import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { getOneProduct, modifyProduct } from "../store/singleProduct";

const EditCourse = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productName = useInput();
  const price = useInput();
  const category = useInput();
  const overview = useInput();
  const image = useInput();
  const duration = useInput();
  const requirements = useInput();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [])

  const course = useSelector(state => state.product)


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
        <label>Course</label>
        <input
          {...productName}
          type="text"
          placeholder={course.productName}
    
        />
        <label>Price</label>
        <input {...price} type="text" placeholder={course.price} required />
        <label>Categoria</label>
        <input
          {...category}
          type="text"
          placeholder="category"
        />
        <label>About</label>
        <input
          {...overview}
          type="text"
          placeholder="Breve descripción del curso"
        />
        <label>Image</label>
        <input {...image} type="text" placeholder="img.jpg" required />
        <label>Duration</label>
        <input {...duration} type="text" placeholder="4 semanas" required />
        <label>Requirements</label>
        <input
          {...requirements}
          type="text"
          placeholder="Equipo, software y otros materiales requeridos"
        />
        <button>EDIT COURSE</button>
      </form>
    </div>
  );


};


export default EditCourse;
