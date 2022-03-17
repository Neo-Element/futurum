import { useDispatch, useSelector } from "react-redux";
import { cartRegister, sendMail } from "../store/cart";


const CheckOut = () => {
    const user = useSelector(state => state.user)
    let courses = localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : [];
    const dispatch = useDispatch();
    

    const handleBuy = () => {
        dispatch(
            cartRegister(courses)
        ) 
        dispatch(
          sendMail(courses, user)
        )
    }


    return( 
        <div className="containerSingle">
        <div className="singleCardLogin">
          <div className="cardTitle">
            <div className="colorBar"> </div>
          </div>
          <div className="bodyCard">
            <div className="half">
                {courses.map((course,i)=> (
                    <ul>
                        <li  className="text-black text-lg"key={i}>{course.productName}</li>
                    </ul>
                 ))}
              
            </div>
            <div className="half">
              <div className="description">
                <h3>Overview</h3>
              </div>
              <div className="priceAndAdd">
                <p className="price">{`Total: $500`}</p>
                <button onClick={handleBuy} className="btn btn-dark btn-lg btnAdd">
                  <i class="fa-solid fa-cart-arrow-down"></i> Buy 
                </button>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
  
    )
            
  

}
export default CheckOut;