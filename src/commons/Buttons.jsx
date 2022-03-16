import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
//import axios from "axios";



const Buttons = () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    /* const handleLogout = (e) => {navigate("/home");    
      axios.post("/api/users/logout").then((res) =>{
        console.log("RES", res)
        localStorage.setItem("user",JSON.stringify(res.payload))
      navigate("/");                            
    })
  }; */
  

    //REVISAR RUTAS LOGIN / REGISTER
    return user.id ? (
      <div className="dropdown userIcon">
       <i className="fa-solid fa-child fa-lg"></i>
        <div>
          <h6 className="text-white userS">{user.userName}</h6>
        </div>
        <div className="dropdown-content">
          <a href="#">Favorites</a>
          <a href="#"  /* onClick={handleLogout }*/> 
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
  