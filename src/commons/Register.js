import useImput from "../hooks/useImput";
import { useDispatch } from "react-redux";
import {userRegister} from "../store/users";
import { useNavigate } from "react-router";

 const Register = () => {
    const userName = useImput();
    const fullName = useImput();
    const email = useImput();
    const city = useImput();
    const country = useImput();
    const password = useImput();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerSubmit = (e) =>{
        e.preventDefault();
        dispatch(userRegister({userName: userName.value, nameAndLastname: fullName.value, email: email.value, city: city.value, country: country.value, password: password.value}))
        .then(()=>navigate("/users/login"))
        .cath((err)=> console.log(err))
    }
    //Revisar estilos de requiered
    return(
        <div>
            <form onSubmit={handlerSubmit}>
                <label>User Name</label><input {...userName} type="text" placeholder="User Name" required minlength="3" maxlength="20"/>
                <label>Name and lastname</label><input {...fullName} type="text" placeholder="Name and lastname" required/>
                <label>Email</label><input {...email} type="email" placeholder="email@futurum.com" required/>
                <label>City</label><input {...city} type="text" placeholder="City" required/>
                <label>Country</label><input {...country} type="text" placeholder="Country" required />
                <label>Password</label><input {...password} type="password" placeholder=">Password" required minlength="6" maxlength="8"/>
                <button>Submit</button>
            </form>
        </div>
    )
 }
 export default Register