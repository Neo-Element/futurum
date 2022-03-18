import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { userRegister } from "../store/singleUser";
import { useNavigate } from "react-router";

const Register = () => {
  const userName = useInput();
  const nameAndLastname = useInput();
  const email = useInput();
  const city = useInput();
  const country = useInput();
  const password = useInput();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validEmail = (email) => {
    return /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi.test(
      email.value
    );
  };
  const validPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (validEmail(email) && validPassword(password)) {
      dispatch(
        userRegister({
          userName: userName.value,
          nameAndLastname: nameAndLastname.value,
          email: email.value,
          city: city.value,
          country: country.value,
          password: password.value,
        })
      )
        .then((data) => {
          alert("User created succesfuly!");
          navigate("/users/login");
        })
        .catch((err) => console.log(err));
    } else {
      if (!validEmail(email)) {
        alert("Se ha ingresado un email invalido");
      }
      if (!validPassword(password)) {
        alert("Se ha ingresado un password invalido");
      }
    }
  };
  //Revisar estilos de requiered
  return (
    <div className="containerSingle">
      <div className="singleCardRegister">
        <div className="cardTitle">
          <form onSubmit={handlerSubmit}>
            <legend>
              <h1>Register</h1>
            </legend>
            <div className="mb-3">
              <label>User Name</label>
              <input
                {...userName}
                type="text"
                placeholder="User Name"
                required
                minlength="3"
                maxlength="20"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label>Name and lastname</label>
              <input
                {...nameAndLastname}
                type="text"
                placeholder="Name and lastname"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label>Email</label>
              <input
                {...email}
                type="email"
                placeholder="email@futurum.com"
                className="form-control"
                required
              />
            </div>
            <label>City</label>
            <input
              {...city}
              type="text"
              placeholder="City"
              required
              className="form-control"
            />
            <label>Country</label>
            <input
              {...country}
              type="text"
              placeholder="Country"
              required
              className="form-control"
            />
            <label>Password</label>
            <div className="mb-3">
              <div className="col-auto">
                <input
                  {...password}
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-auto">
                <span id="passwordHelpInline" className="form-text text-white">
                  Minimum 8 characters, at least one letter and one number.
                </span>
              </div>
            </div>
            <div className="btnAddR">
              <button type="submit" className="btn btn-dark btn-lg btnAdd">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
