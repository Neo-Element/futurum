import useImput from "../hooks/useImput";
import { useDispatch } from "react-redux";
import {userLogin} from "../store/users";
import { useNavigate } from "react-router";

const Login = () => {
    const email = useImput();
    const password = useImput();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerSubmit= (e) =>{
        e.preventDefault();
        dispatch(userLogin({email: email.value, password: password.value}))
        .then(()=> navigate("/user")) //revisar la ruta
        .cath((err) => console.log(err))
    }

    return(
        <div>
            <form onSubmit={handlerSubmit} >
                <label>Email</label><input {...email} type = "email" placeholder="email@futurum.com" required/>
                <label>Password</label><input {...password} type = "text" placeholder="password" required/>
                <button>Login</button>
            </form>
        </div>
    )
}
export default Login