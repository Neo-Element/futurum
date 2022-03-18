import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardRange from "../commons/CardRange";
import { getOneProduct } from "../store/singleProduct";
import Reviews from "../commons/Reviews";
//RECIBE UN CURSO EN PARTICULAR
const SingleCourse = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  /// agregar SIngle product REdux
  const [cart, setCart] = useState(
    localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []
  );

  const handleClick = () => {
    let noRepeat = cart.map((course) => course.id === parseInt(id));
    if (!noRepeat.includes(true)) {
      localStorage.setItem("Cart", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
    }
  };

  console.log(product);
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  return (
    <div className="containerSingleProducts">
      <div className="singleCardProduct">
        <div className="cardTitle">
          <div className="colorBar"> </div>
          <h5>{`${product.duration} hours`}</h5>
        </div>
        <div className="bodyCard">
          <div className="half">
            <div className="text">
              <h1>{product.productName}</h1>
              <p className="sub">{product.category}</p>
              <hr></hr>
            </div>
            <div class="image">
              <img src={product.image} alt="logo" />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <h3>Overview</h3>
              <p>{product.overview}</p>
            </div>
            <div className="nameCal">
            <span className="stock">
              <i className="fa-solid fa-eye"></i>Calification
            </span>
            </div>
            <div className="calification">
              <CardRange range={product.ranking} />
              <span>{` ${product.students} students`}</span>
            </div>
            <div className="priceAndAdd">
              <p className="price">{`Price: $ ${product.price}`}</p>
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

      <div className="reviewsCardProduct">
        <Reviews id={id}/>
      </div>

      <hr className="hrDown"></hr>
      <div className="bodyInfo">
        <h2>Requirements</h2>
        <p>{product.requirements}</p>
      </div>
    </div>
  );
};

export default SingleCourse;
