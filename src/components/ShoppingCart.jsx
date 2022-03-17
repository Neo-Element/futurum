import { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../store/in-cartCourses";
import { getOneProduct } from "../store/products";

const ShoppingCart = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //const courses = useSelector(state => state.cart)
  let courses = JSON.parse(localStorage.getItem("Cart"))
  const [cart, setCart] = useState(localStorage.getItem("Cart") ?  JSON.parse(localStorage.getItem("Cart")) : [] );

  useEffect(() => {
  },[courses]);
  
  const handleClick = (course) => {
    const deleted = courses.filter(e => e !== course)
    localStorage.setItem("Cart", JSON.stringify(deleted))
    setCart(deleted);
  } 

  return (
    <div>
      <h1>Lista de deseos</h1>
      <div>
        <table class="table table-striped table-teal">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          {courses.map((course, i) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{i}</th>
                  <td>{course.productName}</td>
                  <td>{course.price}</td>
                  <td>
                    <button onClick={() => handleClick(course)}>remove</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <button>Comprar</button>
    </div>
  );
};
export default ShoppingCart;
