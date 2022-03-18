import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/singleUser";

const Buttons = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    dispatch(userLogout()).then(() => navigate("/"));
  };

  return user.id ? (
    <div className="dropdown userIcon">
      <i className="fa-solid fa-child fa-lg"></i>
      <div>
        <h6 className="text-white userS">{user.userName}</h6>
      </div>
      <div className="dropdown-content">
        <a href="#" onClick={handleLogout}>
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
