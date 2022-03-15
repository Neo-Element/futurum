import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../store/in-cartCourses";

const ShoppingCart = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const courses = useSelector(state => state.cart)

  useEffect(() => {
    return
  },[courses])

  const handleClick = (course) => {
    const deleted = courses.filter(e => e !== course)
    dispatch(setCart(deleted))
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
    </div>
  );
};
export default ShoppingCart;
