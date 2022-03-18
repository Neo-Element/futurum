//RANGE genera un rango segun el valor que contenga la propiedad vote_average de cada pelicula de TMDB,
//se fija el valor y pinta los corazones segun el rango correspondiendte
const CardRange = ({ range }) => {
  let rating = Math.round(range); // range va de 0 a 10

  const voidStar = <i className="fa-regular fa-star"></i>;
  const halfStar = (<i className="fa-solid fa-star-half-stroke rating-color"></i>);
  const completeStar = <i className="fa-solid fa-star rating-color"></i>;
  let arr = [];

  while (rating >0) {
    if (rating >= 2) {
      arr.push(completeStar);
    } else {
        arr.push(halfStar);
    }
    rating -= 2;
  }

  while (arr.length < 5) {
    arr.push(voidStar);
  }


  return (
    <>
      {arr.map((star) => star)}
    </>
  );
};

export default CardRange;
