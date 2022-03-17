import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer, { getAllCart } from "./users";
import setProducts from "./products";
import cartReducer from "./in-cartCourses";
import singleCategoryReducer from "./singleCategory";
import categoriesReducer from "./categories";
import allUsersReducer from "./allUsers";
import setProduct from "./singleProduct";
import deleteUserReducer from "./deleteUser";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //middleware para -->
  //que me loggee cada actualización//
  reducer: {
    user: userReducer,
    userDelete : deleteUserReducer,
    products: setProducts,
    product: setProduct,
    cart: cartReducer,
    category: singleCategoryReducer,
    categories: categoriesReducer,
    allUsers: allUsersReducer,
  },
});

export default store;
