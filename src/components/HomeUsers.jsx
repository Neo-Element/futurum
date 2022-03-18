import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories } from "../store/categories";

const HomeUsers = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  
  const active = categories.slice(0,1)
  const items = categories.slice(1, categories.length)
  return categories.length > 0 ? (
    <div className="homeContainer">
      <div className="welcome">
      <div className="back"></div>
      <div className="homeWelcome">
            <h1>Welcome to Futurum!</h1>
            <p>The best way to learn online</p>
        </div>
        <div id="imagen">
          <div id="info">
            <p id="descripcion">Most popular course</p>
          </div>
        </div>
        
        </div>
        <hr></hr>
    <div className="row rowHome">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-4 borderMark">
              <div className="single-box">
                <div className="img-area">
                  <Link to={`/users/categories/${active[0].id}`}>
                  <img
                    src={active[0].imagen}
                    width={"100"}
                    data-interval="1000"
                    alt="user"
                  />
                  </Link>
                </div>
                <div className="img-text">
                  <h2>{active[0].name}</h2>
                  <p>{active[0].description}</p> 
                </div>
              </div>
            </div>
          </div>
        </div>
        {items.map((category, i) => (
          <div class="carousel-item">
            <div className="row">
              <div className="col-md-4 borderMark">
                <div className="single-box">
                  <div className="img-area">
                  <Link to={`/users/categories/${category.id}`}>
                    <img
                      src={category.imagen}
                      width={"100"}
                      alt="user"
                    />
                    </Link>
                  </div>
                  <div className="img-text">
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          className="carousel-control-prev controlColorHome"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next controlColorHome"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon "
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  </div>
  </div>
  ) : (<></>);
};

export default HomeUsers;
