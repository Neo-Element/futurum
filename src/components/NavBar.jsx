import { useEffect } from "react";
import Buttons from "../commons/Buttons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { persistence } from "../store/users";
const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

/*   useEffect(()=>{
    if(user){
      dispatch(
        persistence()
      )
    }
   },[]) */
  
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link to="/">
          <img
            src="https://see.fontimg.com/api/renderfont4/OVZDd/eyJyIjoiZnMiLCJoIjo0NCwidyI6MTAwMCwiZnMiOjQ0LCJmZ2MiOiIjNzVDQTkzIiwiYmdjIjoiIzQ2NDY0NiIsInQiOjF9/RnV0dXJ1bQ/destruido.png"
            alt="logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <Link to={`/users/${user.id}/cart/`}>
            <button className="btn  btn-lg botonColorNav">
              <i class="fa-solid fa-lg fa-cart-arrow-down"></i>
            </button>
          </Link>

          <Buttons />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
