import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import singleUserReducer from "./singleUser";
import setProducts from "./products";
import singleProdReducer from "./singleProduct";
import cartReducer from "./in-cartCourses";
import singleCategoryReducer from "./singleCategory";
import categoriesReducer from "./categories";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: singleUserReducer,
    products: setProducts,
    product: singleProdReducer,
    cart: cartReducer,
    category: singleCategoryReducer,
    categories: categoriesReducer,
  },
});

export default store;
