import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendReview } from "../store/review";

const ShoppingHistory = () => {
  const courses = useSelector((state) => state.products);
  const user = useSelector((state) => state.user.id);
  const [input, setInput] = useState({
    productId: null,
    comment: null,
    userId: null,
  });

  const dispatch = useDispatch();

  const handleClick = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({ ...input, userId: user });
    dispatch(sendReview(input));
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
                  <div id="full-stars-example-two">
                    <div class="rating-group">
                      <input
                        disabled
                        checked
                        class="rating__input rating__input--none"
                        name="rating3"
                        id="rating3-none"
                        value="0"
                        type="radio"
                      />
                      <label
                        aria-label="1 star"
                        class="rating__label"
                        for="rating3-1"
                      >
                        <i class="rating__icon rating__icon--star fa fa-star"></i>
                      </label>
                      <input
                        class="rating__input"
                        name="rating3"
                        id="rating3-1"
                        value="1"
                        type="radio"
                      />
                      <label
                        aria-label="2 stars"
                        class="rating__label"
                        for="rating3-2"
                      >
                        <i class="rating__icon rating__icon--star fa fa-star"></i>
                      </label>
                      <input
                        class="rating__input"
                        name="rating3"
                        id="rating3-2"
                        value="2"
                        type="radio"
                      />
                      <label
                        aria-label="3 stars"
                        class="rating__label"
                        for="rating3-3"
                      >
                        <i class="rating__icon rating__icon--star fa fa-star"></i>
                      </label>
                      <input
                        class="rating__input"
                        name="rating3"
                        id="rating3-3"
                        value="3"
                        type="radio"
                      />
                      <label
                        aria-label="4 stars"
                        class="rating__label"
                        for="rating3-4"
                      >
                        <i class="rating__icon rating__icon--star fa fa-star"></i>
                      </label>
                      <input
                        class="rating__input"
                        name="rating3"
                        id="rating3-4"
                        value="4"
                        type="radio"
                      />
                      <label
                        aria-label="5 stars"
                        class="rating__label"
                        for="rating3-5"
                      >
                        <i class="rating__icon rating__icon--star fa fa-star"></i>
                      </label>
                      <input
                        class="rating__input"
                        name="rating3"
                        id="rating3-5"
                        value="5"
                        type="radio"
                      />
                    </div>
                  </div>
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
