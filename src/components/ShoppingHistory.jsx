import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarsRating from "../commons/StarsRating";
import { sendReview } from "../store/review";

const ShoppingHistory = () => {
  const courses = useSelector((state) => state.products);
  const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : { none: "none" };
  
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    productId: null,
    comment: null,
    userId: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({ ...input, userId: user.id });
    console.log("INPUT", input)
    dispatch(sendReview(input));
    alert("Thanks for leaving a review!");
  };

  return (
    <div>
      <h1> HISTORIAL DE COMPRAS </h1>
      <table className="table table-striped table-teal">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course</th>
            <th scope="col">Price</th>
            <th scope="col">Ranking</th>
          </tr>
        </thead>
        {courses.map((course, i) => {
          return (
            <tbody id={i}>
              <tr>
                <th scope="row">{i}</th>
                <td>{course.productName}</td>
                <td>{course.price}</td>
                <td>
                  <StarsRating  className="star" productId={course.id} userId={user}/>
                </td>
                <td>
                  <div class="box">
                    <a
                      onClick={() =>
                        setInput({ ...input, productId: course.id })
                      }
                      class="button"
                      href="#popup1"
                    >
                      Leave a review..
                    </a>
                  </div>
                  <div id="popup1" class="overlay">
                    <div class="popup">
                      <h2>Please, tell us something about this course..</h2>
                      <a class="close" href="#">
                        &times;
                      </a>
                      <div class="content">
                        <textarea
                          onChange={(e) =>
                            setInput({ ...input, comment: e.target.value })
                          }
                          cols="40"
                          rows="10"
                          type="text"
                          placeholder="My review.."
                        />
                        <br />
                        <button onClick={handleSubmit}>Submit</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ShoppingHistory;
