import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import setProducts from "./products";
import cartReducer from "./cart";
import singleCategoryReducer from "./singleCategory";
import categoriesReducer from "./categories";
import setProduct from "./singleProduct";
import adminUserReducer from "./admin";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    admin: adminUserReducer,
    products: setProducts,
    product: setProduct,
    cart: cartReducer,
    category: singleCategoryReducer,
    categories: categoriesReducer,
  },
});

export default store;
