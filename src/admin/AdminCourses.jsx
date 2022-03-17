import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../store/users";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProducts } from "../store/products";
import { deleteProduct } from "../store/singleProduct";

const AdminCourses = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const courses = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleDelete = (course) => {
    dispatch(deleteProduct(course))
      .then(() => {
        dispatch(getProducts());
      })
  };

  const handleCreate = () => {
    navigate("/admin/products/add"); //ver de hacer pop-up en vez de redirigir
  };

  const handleEdit = (course) => {
    console.log("CURSO", course.id);
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Edit courses</h2>
      <br></br>

      <table class="table table-sm">
        <tbody>
          {courses.map((course, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{course.productName}</td>
                <td>
                  <Link to={`/admin/products/${course.id}`}>
                    <button>EDIT</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(course)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="botonColorNav" onClick={() => handleCreate()}>
        ADD NEW COURSE
      </button>
    </div>
  );
};

export default AdminCourses;
