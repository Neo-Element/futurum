import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getCategoryProd} from "../store/products";

const SideBar = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category)
 
    console.log("Category", category)
    useEffect(() => {
        dispatch(
           getCategoryProd("Front-End"));
      }, []);
    
    return(
<>
    <ul id="menu">
        <li class="item"><a href="#">Front-End</a>
            <ul class="submenu">
                <li class="subitem"><a href="#">HTML</a></li>
                <li class="subitem"><a href="#">Sass</a></li>
                <li class="subitem"><a href="#">React</a></li>
                <li class="subitem"><a href="#">Css</a></li>
            </ul>   
        </li>

        <li class="item"><a href="#">Back-End</a>
            <ul class="submenu">
                <li class="subitem"><a href="#">Passport</a></li>
                <li class="subitem"><a href="#">Sequelize</a></li>
                <li class="subitem"><a href="#">OAuth</a></li>
                <li class="subitem"><a href="#">Psql</a></li>
            </ul>   
        </li>

        <li class="item"><a href="#">Desing</a>
            <ul class="submenu">
                <li class="subitem"><a href="#">Adobe</a></li>
                <li class="subitem"><a href="#">Photoshop</a></li>
                <li class="subitem"><a href="#">Premier</a></li>
                <li class="subitem"><a href="#">Unity</a></li>
            </ul>   
        </li>
    </ul>
        
              

    </>
    )
}

export default SideBar;