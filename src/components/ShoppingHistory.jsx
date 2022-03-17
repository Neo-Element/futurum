import { useSelector } from "react-redux";

const ShoppingHistory = () => {
  const courses = useSelector((state) => state.products);

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
            <tbody>
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
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ShoppingHistory;
