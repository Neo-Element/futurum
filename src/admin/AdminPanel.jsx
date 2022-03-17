import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../store/users";
import { useNavigate } from "react-router";
import Login from "../commons/Login";
import { products } from "../utils/fakeData";
import { deleteProduct, productCreated, setProductPrueba } from "../store/singleProduct";

const AdminPanel = () => {

  const dispatch = useDispatch();


  const handleDelete = (course) => {
     dispatch(deleteProduct(course))
     console.log("Cursos DELETE ACÁ -->",course)
  }

  const handleCreate = (course) => {
   dispatch(productCreated(course))
   console.log("curso creado ACÁ --> ", course)
}



  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Edit courses</h2>
      <br></br>
      {/* <div className="flex-container">
        <button>Add Course</button>
      </div> */}

      <table class="table table-white">
        <tbody>
          {products.map((course, i) => {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{course.productName}</td>
                <td>
                  <button className="botonColorNav" onClick={() => handleCreate(course)}>ADD</button>
                </td>
                <td>
                  <button  onClick={() => handleDelete(course)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
