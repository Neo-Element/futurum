import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getAllCart } from "../store/users";
import { products } from "../utils/fakeData";

const ShoppingCart = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllCart(id)).then(({ payload }) => {
      console.log(payload);
    });
  }, []);

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
          {products.map((course, i) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">{i}</th>
                  <td>{course.productName}</td>
                  <td>{course.price}</td>
                  <td>
                    <button>remove</button>
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
