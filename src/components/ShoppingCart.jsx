import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";

const ShoppingCart = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  let courses = localStorage.getItem("Cart")
    ? JSON.parse(localStorage.getItem("Cart"))
    : [];
  const [cart, setCart] = useState(
    localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []
  );

  useEffect(() => {}, [courses]);

  const handleClick = (course) => {
    const deleted = courses.filter((e) => e !== course);
    localStorage.setItem("Cart", JSON.stringify(deleted));
    setCart(deleted);
  };

  const handlerCheckout = () => {
    if (!user.id) {
      navigate("/users/login");
    } else {
      navigate(`/users/cart/${user.id}`);
    }
  };

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
      {courses.length ? (
        <button onClick={handlerCheckout}>Comprar</button>
      ) : null}
    </div>
  );
};
export default ShoppingCart;
