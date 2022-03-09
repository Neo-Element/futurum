
import {products} from  "../utils/fakeData"
import CardRange from "../commons/CardRange";

const SingleCourse = () => {
 return (
    <div className="singleCard">
        <div className="cardTitle">
            <div className="colorBar"> </div>
            <h5>{`${products[2].duration} hours`}</h5>    
        </div>
        <div className="bodyCard">
            <div className="half">
                <div className="text">
                    <h1>{products[2].productName}</h1>
                    <p className="sub">{products[2].category}</p>
                    
                </div>
                <div class="image">
                     <img src={products[2].image} alt="logo"/>
                </div>
            </div>
            <div className="half">
                <div className="description">
                    <h3>Overview</h3>
                    <p>{products[0].overview}</p>
                </div>
                    <span className="stock"><i className="fa-solid fa-eye"></i>Calification</span>
                 <div className="reviews">
                    <CardRange range={products[0].ranking}/>
                    <span>{` ${products[0].students} students`}</span>
                    <button className="btn bnt-dark lg-dark"><i class="fa-solid fa-cart-arrow-down"></i>Add to Cart</button>
                    <p className="price">{`Price: $ ${products[2].price}`}</p>
                </div>

            </div>
        </div>
    </div>  
    
 )
}

export default SingleCourse;
