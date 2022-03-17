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
      .then((res) => {
        console.log("USER",res)
        if(res.payload){
          localStorage.setItem("user",JSON.stringify(res.payload))
        }else {
          alert("Error! ")
        }
        navigate("/")
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
      <div className="singleCardLogin">
        <div className="cardTitle">
          <form onSubmit={handlerSubmit}>
            <fieldset>
              <legend>
                <h1>Login Usuario</h1>
              </legend>
              <div className="mb-3">
                <label for="disabledTextInput" className="form-label">
                  Email
                </label>
                <input
                  {...email}
                  type="email"
                  id="disabledTextInput"
                  className="form-control"
                  placeholder="email@futurum.com"
                  
                  required
                />
              </div>
              <div className="mb-3">
                <label for="inputPassword6" v="col-form-label">
                  Password
                </label>
              </div>
              <div className="mb-3">
                <div className="col-auto">
                  <input
                    {...password}
                    type="password"
                    id="inputPassword6"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    required
                  />
                </div>
                <div className="col-auto">
                  <span id="passwordHelpInline" className="form-text text-white">
                    Must be 8-20 characters long.
                  </span>
                </div>
              </div>
              <div className="btnAdd"> 
                  <button className="btn btn-dark btn-lg "> Sing in</button>   
              </div>
            
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
