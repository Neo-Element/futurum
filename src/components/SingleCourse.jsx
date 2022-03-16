import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardRange from "../commons/CardRange";
import { getOneProduct } from "../store/products";

//RECIBE UN CURSO EN PARTICULAR
const SingleCourse = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  /// agregar SIngle product REdux
  const [cart, setCart] = useState(localStorage.getItem("Cart") ?  JSON.parse(localStorage.getItem("Cart")) : [] );

  const handleClick = () => {
    let noRepeat = cart.map(course => course.id === parseInt(id))
    if(!noRepeat.includes(true)){
      localStorage.setItem("Cart", JSON.stringify([...cart, products]))
      setCart([...cart, products]);
    }
  };


  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  return (
    <div className="containerSingle">
      <div className="singleCard">
        <div className="cardTitle">
          <div className="colorBar"> </div>
          <h5>{`${products.duration} hours`}</h5>
        </div>
        <div className="bodyCard">
          <div className="half">
            <div className="text">
              <h1>{products.productName}</h1>
              <p className="sub">{products.category}</p>
              <hr></hr>
            </div>
            <div class="image">
              <img src={products.image} alt="logo" />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <h3>Overview</h3>
              <p>{products.overview}</p>
            </div>
            <span className="stock">
              <i className="fa-solid fa-eye"></i>Calification
            </span>
            <div className="calification">
              <CardRange range={products.ranking} />
              <span>{` ${products.students} students`}</span>
            </div>
            <div className="priceAndAdd">
              <p className="price">{`Price: $ ${products.price}`}</p>
              <button
                onClick={handleClick}
                className="btn btn-dark btn-lg btnAdd"
              >
                <i class="fa-solid fa-cart-arrow-down"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="reviewsCard">
        <h2>Testimonials</h2>
        {/* <Reviews review={products.review} /> */}
      </div>
      <hr className="hrDown"></hr>
      <div className="bodyInfo">
        <h2>Requirements</h2>
        <p>{products.requirements}</p>
      </div>
    </div>
  );
};

export default SingleCourse;
