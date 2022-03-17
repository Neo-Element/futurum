import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import { productCreated } from "../store/singleProduct";


const AddProduct = (course) => {
  const productName = useInput();
  const price = useInput();
  const category = useInput(); 
  const overview = useInput();
  const image = useInput();
  const duration = useInput();
  const requirements = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productCreated({
        productName: productName.value,
        price: price.value,
        category: category.value,
        overview: overview.value,
        ranking: null,
        image: image.value,
        duration: duration.value,
        requirements: requirements.value,
        students: 0
      })
    )
      .then((product) => {
        console.log("curso creado -->", product)
        navigate("/")}) //ver ruta
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>Course</label>
        <input
          {...productName}
          type="text"
          placeholder="Nombre del curso"
          required
        />
        <label>Price</label>
        <input {...price} type="text" placeholder="$" required />
        <label>Categoria</label>
        <input
          {...category}
          type="text"
          placeholder="Diseño UX/UI, Programación.. "
          required
        />
        <label>About</label>
        <input
          {...overview}
          type="text"
          placeholder="Breve descripción del curso"
          required
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
          required
        />
        <button>Create Course</button>
      </form>
    </div>
  );
};

export default AddProduct;
