import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer, { getAllCart } from "./users";
import setProducts from "./products";
import cartReducer from "./in-cartCourses";
import singleCategoryReducer from "./singleCategory";
import categoriesReducer from "./categories";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //middleware para -->
  //que me loggee cada actualización//
  reducer: {
    user: userReducer,
    products: setProducts,
    cart: cartReducer,
    category: singleCategoryReducer,
    categories: categoriesReducer,
  },
});

export default store;
