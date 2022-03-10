import { useNavigate } from "react-router";
//import { Link } from "react-router-dom";
import axios from "axios";


const Buttons = () => {

    //NECESITO USER ACA / BAJAR DE REDUX
    const user = {}; //este user es temporal / borrar
    /* const navigate = useNavigate();
    const handleLogout = (e) => {
      axios.post("/api/logout").then((res) =>{ //setUser({})); //R setear user aca vacio / funcionalidad logout
      navigate("/home");                            //R
    }); */
  

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
       {/*agregar LINKS */}
          <button className="btn btn-lg botonColorNav">Login</button>
       
  
      
          <button className="btn btn-lg botonColorNav">Register</button>
      
      </>
    );
  };

  
  export default Buttons;
  