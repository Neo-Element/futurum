//RANGE genera un rango segun el valor que contenga la propiedad vote_average de cada pelicula de TMDB,
//se fija el valor y pinta los corazones segun el rango correspondiendte 
const CardRange = ({range}) => {
    let rangeFloor= Math.floor(range);
    let loop= rangeFloor/2;

    const voidStar = <i className="fa-regular fa-star"></i>
    const halfStar = <i className="fa-solid fa-star-half-stroke rating-color"></i>
    const completeStar = <i className="fa-solid fa-star rating-color"></i>
    let rating = [voidStar,voidStar,voidStar,voidStar,voidStar]

//cambia la className de stars
if(rangeFloor!== 0){
    for(let i=0; i<=loop; i+=0.5){
       if(rangeFloor%2===0 && (Math.floor(i)===loop)){
           rating[i]= halfStar
           break
        }
            rating[i]=completeStar;
       } 
}
 
    
    return(
        <>
             {rating.map(star => (star))}
        </>
       
    )
}

export default CardRange;