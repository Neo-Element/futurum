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
    navigate("/admin/products/add"); 
  };


  return (
    <div>

      <h1>Admin Panel</h1>
      <h2>Edit courses</h2>
      <br></br>
      <button className="botonColorNav" onClick={() => handleCreate()}>
        ADD NEW COURSE
      </button>
      <br></br>

      <table class="table table">
      <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">COURSE</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{course.productName}</td>
                <td>
                  <Link to={`/admin/products/edit/${course.id}`}>
                    <button className="btn-white btn">✏️</button>
                  </Link>
                </td>
                <td>
                  <button className="btn-white btn" onClick={() => {if(window.confirm("Are you sure you want to delete this course?")) {handleDelete(course)}}}>🗑️</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCourses;
