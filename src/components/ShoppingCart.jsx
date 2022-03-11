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
      {/* {user.cart.map((course) => {
        return (
          <div>
            <h3>{course.productName}</h3>
            <p>{course.price}</p>
          </div>
        );
      })} */}
      <h3>{products[0].productName}</h3>
      <p>{products[0].price}</p>
    </div>
  );
};
export default ShoppingCart;
