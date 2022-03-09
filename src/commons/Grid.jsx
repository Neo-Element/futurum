import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Grid = () => {
  const navigate = useNavigate();
  const courses = useSelector((state) => state.products);
  const handleClick = (e) => {
    navigate("/course");
  };

  return (
    <div className="flex-container">
      {courses.map((course) => {
        return (
          <div className="flex-item">
            <h3>{course.productName}</h3>
            <p>{course.duration}</p>
            <button onClick={handleClick}>Ver detalles</button>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
