import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { cartRegister } from "../store/cart";
import { getPayments } from "../store/payments";
import { sendMail } from "../store/mail";

const CheckOut = () => {
  const user = useSelector((state) => state.user);

  const payments = useSelector((state) => state.payments);
  let courses = localStorage.getItem("Cart")
    ? JSON.parse(localStorage.getItem("Cart"))
    : [];
  const dispatch = useDispatch();
  const date = new Date();
  const mail = useSelector((state) => state.mail);
  console.log(mail);

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

    dispatch(cartRegister(orders)).then(() => {
      dispatch(sendMail(user));
    });
  };

  return (
    <div className="checkOut">
      <div className="">
        <div className="">
          <h2 className="text-black text-lg">{user.nameAndLastname}</h2>
          <div className="colorBar"> </div>
        </div>
        <div className="tables">
          <h3 className="date">{date.toLocaleDateString()}</h3>
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
            <h5 className="price">{`Total:${total}`}</h5>
            <h5 className="price">{`Tipo de Pago:`}</h5>
            <select id="payment">
              {payments.map((payment) => {
                return (
                  <option value={payment.id}>{payment.payment_type}</option>
                );
              })}
            </select>
          </div>
          <br></br>
          <button onClick={handleBuy} className="btn btn-dark btn-lg btnAdd">
            <i class="fa-solid fa-cart-arrow-down"></i> Buy
          </button>
        </div>
      </div>
    </div>
  );
};
export default CheckOut;
