import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import {userLogin} from "../store/users";
import { useNavigate } from "react-router";

const Login = () => {
    const email = useInput();
    const password = useInput();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerSubmit= (e) =>{
        e.preventDefault();
        dispatch(userLogin({email: email.value, password: password.value}))
        .then(()=> navigate("/users/products")) //revisar la ruta
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <form onSubmit={handlerSubmit} >
                <label>Email</label><input {...email} type = "email" placeholder="email@futurum.com" required/>
                <label>Password</label><input {...password} type = "password" placeholder="password" required/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login