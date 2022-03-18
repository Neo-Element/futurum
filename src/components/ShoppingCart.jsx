import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ShoppingCart = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  let courses = localStorage.getItem("Cart")
    ? JSON.parse(localStorage.getItem("Cart"))
    : [];
  const [cart, setCart] = useState(
    localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []
  );

  useEffect(() => { }, [courses]);

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
      <div className="tables">
        <table class="table table- table">
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
                    <button className="btn-dark btn" onClick={() => handleClick(course)}>remove</button>
                  </td>
                </tr>
              </tbody>
            );
          })}

        </table>
        {courses.length ? (
          <button className="btn-dark btn" onClick={handlerCheckout}>Comprar</button>
        ) : null}
      </div>

    </div>
  );
};
export default ShoppingCart;
