import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
//import axios from "axios";
import { useSelector } from "react-redux";


const Buttons = () => {

    const user = useSelector(state => state.user)

    const navigate = useNavigate();
    /* const handleLogout = (e) => {
      axios.post("/api/logout").then((res) =>{ //setUser({})); //R setear user aca vacio / funcionalidad logout
      navigate("/home");                            //R
    });  */
  

    //REVISAR RUTAS LOGIN / REGISTER
    return user.id ? (
      <div className="dropdown userIcon">
       <i className="fa-solid fa-child fa-lg"></i>
        <div>
          <h6 className="text-white userS">{user.userName}</h6>
        </div>
        <div className="dropdown-content">
          <a href="#">Favorites</a>
          <a href="#" /* onClick={handleLogout }*/>
            LogOut
          </a>
        </div>
      </div>
    ) : (
      <>
       <Link to={"/users/login"}>
          <button className="btn btn-lg botonColorNav">Login</button>
       </Link>
          
       
      <Link to={"/users/register"}>
          <button className="btn btn-lg botonColorNav">Register</button>
      </Link>
      
         
      
      </>
    );
  };

  
  export default Buttons;
  