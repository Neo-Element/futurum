import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../store/users";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { getUsers } from "../store/users";
import { deleteUser } from "../store/admin";

const AdminUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  console.log("USERS", users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);


  const handleDelete = (user) => {
    dispatch(deleteUser(user))
      .then(() => {
        dispatch(getUsers());
      })
  };
  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Edit users</h2>
      <br></br>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NAME</th>
            <th scope="col">ROLE</th>
            <th scope="col">EDIT</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr class="table">
                <th scope="row">{i + 1}</th>
                <td>{user.userName}</td>
                {user.isAdmin ? <td>Admin</td> : <td>User</td>}
                {user.isAdmin ? (<td><button>Revoque admin</button></td>) : 
                (<td><button>Make admin</button></td>)}
                <td>
                  <button onClick={() => {handleDelete(user)}}>DELETE</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUser;
