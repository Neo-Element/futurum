import  React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCategoryProd} from "../store/products";
import { getCategories } from "../store/categories";
import { Link } from "react-router-dom";

const SideBar = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const categories = useSelector(state=> state.categories)
    const user = localStorage.getItem("user") ?  JSON.parse(localStorage.getItem("user")) : {none: "none"} ;

    useEffect(() => {
        dispatch(
           getCategories());
      }, []);


      const handleOver = (id) => {
          dispatch(
            getCategoryProd(id)
          )
      }
    return user.isAdmin ? (
        <ul id="menu">
            <li className="itemn">Courses</li>
            <li className="itemn">Categories</li>
            <li className="itemn">Users</li>
        </ul>
    ) : (
<>
    <ul id="menu">
        {categories.map((category,i)=> (
            <Link to={`/users/categories/${category.id}`}>
            <li className="item" key={i} onMouseOver={()=> handleOver(category.id)}>{category.name}
            <ul className="submenu">
                {products.map((product,i)=> (
                    <Link to={`/users/products/${product.id}`}>
                      <li className="subitem">{product.productName}</li>
                    </Link>
                ))}
            </ul> 
            </li>
            </Link>
        ))}
    </ul>
    </>
    )
}

export default SideBar;