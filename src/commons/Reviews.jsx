//VA A RECIBIR DIRECTAMENTE REVIEW DESDE SINGLECARD
const Reviews = ({ review }) => {
  //lo use despues
  const activesitems = review.slice(0, 2);
  const items = review.slice(2, review.length);
  return (
    <div className="row">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4 borderMark">
                <div className="single-box">
                  <div className="img-area">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3122/3122431.png"
                      width={"100"}
                      data-interval="1000"
                      alt="user"
                    />
                  </div>
                  <div className="img-text">
                    <h2>{activesitems[0].name}</h2>
                    <p>{activesitems[0].review}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {items.map((coment, i) => (
            <div class="carousel-item">
              <div className="row">
                <div className="col-md-4 borderMark">
                  <div className="single-box">
                    <div className="img-area">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3122/3122431.png"
                        width={"100"}
                        alt="user"
                      />
                    </div>
                    <div className="img-text">
                      <h2>{coment.name}</h2>
                      <p>{coment.review}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button
            className="carousel-control-prev controlColor"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon controlColor"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next "
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
  );
};

export default Reviews;
