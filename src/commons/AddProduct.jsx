import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";
import { productCreated } from "../store/products";


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

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      productCreated({
        productName: productName.value,
        price: price.value,
        category: category.value,
        overview: overview.value,
        image: image.value,
        duration: duration.value,
        requirements: requirements.value,
      })
    )
      .then(() => navigate("/")) //ver ruta
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <label>Curso</label>
        <input
          {...productName}
          type="text"
          placeholder="Nombre del curso"
          required
        />
        <label>Precio</label>
        <input {...price} type="text" placeholder="$" required />
        <label>Categoria</label>
        <input
          {...category}
          type="text"
          placeholder="Diseño UX/UI, Programación.. "
          required
        />
        <label>Sobre el curso</label>
        <input
          {...overview}
          type="text"
          placeholder="Breve descripción del curso"
          required
        />
        <label>Imagen</label>
        <input {...image} type="text" placeholder="img.jpg" required />
        <label>Duración</label>
        <input {...duration} type="text" placeholder="4 semanas" required />
        <label>Requisitos</label>
        <input
          {...requirements}
          type="text"
          placeholder="Equipo, software y otros materiales requeridos"
          required
        />
        <button>Crear Curso</button>
      </form>
    </div>
  );
};

export default AddProduct;
