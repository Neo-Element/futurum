import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Grid = () => {
  const navigate = useNavigate();
  const courses = useSelector((state) => state.products);
  const handleClick = (e, course) => {
   // navigate("/course");    
    <Card course={course}/>
  };

  return (
    <div className="flex-container">
      {courses.map((course) => {
        return (
          <div className="flex-item">
            <h3>{course.productName}</h3>
            <p>{course.duration}</p>
            <Link to={`/users/products/${course.id}`}>
            <button onClick={() => handleClick(course)}>Ver detalles</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
