import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/singleUser";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Login = () => {
  const email = useInput();
  const password = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();



  const validEmail = (email) => {
      return /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi.test(email.value)
  }
  const validPassword = (password) =>{
      return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    if(validEmail(email) && validPassword(password)){
        dispatch(userLogin({ email: email.value, password: password.value }))
      .then((user) => {
        localStorage.setItem("user",JSON.stringify(user.payload))
        navigate("/users/products")
      }) //revisar la ruta
      .catch((err) => console.log(err));
    } else {
        if(!validEmail(email)){
            alert ("Se ha ingresado un email invalido")
        }
        if(!validPassword(password)){
            alert ("Se ha ingresado un password invalido")
        }
    }
  };
  return (
    <div className="containerSingle">
      <div className="singleCard">
        <div className="cardTitle">
          <div className="colorBar"> </div>
          <form onSubmit={handlerSubmit}>
            <fieldset>
              <legend>
                <h1>Login Usuario</h1>
              </legend>
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
