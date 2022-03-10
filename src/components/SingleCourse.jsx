import CardRange from "../commons/CardRange";
import Reviews from "../commons/Reviews";

//RECIBE UN CURSO EN PARTICULAR
const SingleCourse = ({ sinlgeCourse }) => {
  return (
    <div className="containerSingle">
      <div className="singleCard">
        <div className="cardTitle">
          <div className="colorBar"> </div>
          <h5>{`${sinlgeCourse.duration} hours`}</h5>
        </div>
        <div className="bodyCard">
          <div className="half">
            <div className="text">
              <h1>{sinlgeCourse.productName}</h1>
              <p className="sub">{sinlgeCourse.category}</p>
              <hr></hr>
            </div>
            <div class="image">
              <img src={sinlgeCourse.image} alt="logo" />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <h3>Overview</h3>
              <p>{sinlgeCourse.overview}</p>
            </div>
            <span className="stock">
              <i className="fa-solid fa-eye"></i>Calification
            </span>
            <div className="calification">
              <CardRange range={sinlgeCourse.ranking} />
              <span>{` ${sinlgeCourse.students} students`}</span>
            </div>
            <div className="priceAndAdd">
              <p className="price">{`Price: $ ${sinlgeCourse.price}`}</p>
              <button className="btn btn-dark btn-lg btnAdd">
                <i class="fa-solid fa-cart-arrow-down"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="reviewsCard">
        <h2>Testimonials</h2>
        <Reviews review={sinlgeCourse.review} />
      </div>
      <hr className="hrDown"></hr>
      <div className="bodyInfo">
        <h2>Requirements</h2>
        <p>{sinlgeCourse.requirements[0]}</p>
      </div>
    </div>
  );
};

export default SingleCourse;
