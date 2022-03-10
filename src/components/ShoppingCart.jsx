import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getAllCart } from "../store/users";

const ShoppingCart = () => {
   const user= useSelector(state=> state.user) 
  const dispatch= useDispatch();
  const { id } = useParams();
 
  useEffect(() => {
    dispatch(getAllCart(id)).then(({ payload }) => {
        console.log(payload)
    });
  }, []);

  return (
    <div>
      <h1>Lista de deseos</h1>
      {user.cart.map((course) => {
        return (
          <div>
            <h3>{course.productName}</h3>
            <p>{course.price}</p>
          </div>
        );
      })}
    </div>
  );
};
export default ShoppingCart;