import Buttons from "../commons/Buttons";
import { Link } from "react-router-dom";

const NavBar = () => {
 
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <img className="logo"
            src="https://see.fontimg.com/api/renderfont4/vmyL4/eyJyIjoiZnMiLCJoIjo0NiwidyI6MTAwMCwiZnMiOjQ2LCJmZ2MiOiIjNzVDQTkzIiwiYmdjIjoiIzQ2NDY0NiIsInQiOjF9/RnV0dXJ1bQ/axeon-regular.png"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link to="/users/my_courses">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shopping History
              </a>
            </li>
            </Link>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              
                <li>
                  <a className="dropdown-item" href="#">
                    Front-End
                    </a>
                </li>
                
                <li>
                  <a className="dropdown-item" href="#">
                    Back-End
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Desing
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <Link to={`/users/cart`}>
            <button className="btn  btn-lg botonColorNav">
              <i className="fa-solid fa-lg fa-cart-arrow-down"></i>
            </button>
          </Link>

          <Buttons />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
