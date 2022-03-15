import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/users";
import { useNavigate } from "react-router";
import { useState } from "react";


const Login = () => {
  const email = useInput();
  const password = useInput();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email.value) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(email.value)) {
      errors.email = "Invalid email format";
    }
    if (!password.value) {
      errors.password = "Cannot be blank";
    } else if (password.value.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(email.value, password.value));
    setIsSubmitting(true);
    dispatch(userLogin({ email: email.value, password: password.value }))
      .then(() => navigate("/users/products")) //revisar la ruta
      .catch((err) => console.log(err));
  };

  return (
    <div className="containerSingle">
      <div className="singleCard">
        <div className="cardTitle">
          <div className="colorBar"> </div>
             <form onSubmit={handlerSubmit}>
            <fieldset disabled>
             <legend><h1>Login Usuario</h1></legend>
             <div class="mb-3">
                 <label for="disabledTextInput" class="form-label">
                  Email
                 </label>
                <input
              {...email}
              type="email"
              id="disabledTextInput"
              class="form-control"
              placeholder="email@futurum.com"
              required
            />
          </div>
          <div class="mb-3">
            <label for="inputPassword6" class="col-form-label">
              Password
            </label>
          </div>
          <div class="mb-3">
            <div class="col-auto">
              <input
                {...password}
                type="password"
                id="inputPassword6"
                class="form-control"
                aria-describedby="passwordHelpInline"
                required
              />
            </div>
            <div class="col-auto">
              <span id="passwordHelpInline" class="form-text">
                Must be 8-20 characters long.
              </span>
            </div>
          </div>
          <button className="btn btn-dark btn-lg btnAdd">
                  <i class="fa-solid fa-cart-arrow-down"></i> Sing in
          </button>
        </fieldset>
      </form>
    </div>
    </div>
    </div>
  );
};
export default Login;
