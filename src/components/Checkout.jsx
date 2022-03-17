import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartRegister, sendMail } from "../store/cart";
import { getPayments } from "../store/payments";

const CheckOut = () => {
  //const user = useSelector((state) => state.user);
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { none: "none" };
  const payments = useSelector((state) => state.payments);
  let courses = localStorage.getItem("Cart")
    ? JSON.parse(localStorage.getItem("Cart"))
    : [];
  const dispatch = useDispatch();
  const date = new Date();

  //REVISAR SI ESTO VA ACA
  let total = 0;
  for (let i = 0; i < courses.length; i++) {
    total += courses[i].price;
  }

  useEffect(() => {
    dispatch(getPayments());
  }, []);

  const handleBuy = () => {
    const orders = courses.map((course) => {
      let order = {
        date: date.toISOString(),
        paymentId: document.getElementById("payment").value,
        userId: user.id,
        productId: course.id,
      };
      return order;
    });
    console.log("ARREGLO DE ORDENES->", orders);
    dispatch(cartRegister(orders));
  };

  return (
    <div className="containerSingle">
      <div className="singleCardLogin">
        <div className="cardTitle">
          <p className="text-black text-lg">{user.nameAndLastname}</p>
          <div className="colorBar"> </div>
        </div>
        <div className="bodyCard">
          <p className="date">{date.toLocaleDateString()}</p>
          <table className="table table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, i) => (
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td className="text-black text-lg" key={i}>
                    {course.productName}
                  </td>
                  <td className="text-black text-lg" key={i}>
                    {course.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="priceAndAdd">
            <p className="price">{`Total:${total}`}</p>
            <p className="price">{`Tipo de Pago:`}</p>
            <select id="payment">
              {payments.map((payment) => {
                return (
                  <option value={payment.id}>{payment.payment_type}</option>
                );
              })}
            </select>
          </div>
          <button onClick={handleBuy} className="btn btn-dark btn-lg btnAdd">
            <i class="fa-solid fa-cart-arrow-down"></i> Buy
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
