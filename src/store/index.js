import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import singleUserReducer from "./singleUser";
import usersReducer from "./users";
import setProducts from "./products";
import singleProdReducer from "./singleProduct";
import cartReducer from "./cart";
import singleCategoryReducer from "./singleCategory";
import categoriesReducer from "./categories";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: singleUserReducer,
    users: usersReducer,
    products: setProducts,
    product: singleProdReducer,
    category: singleCategoryReducer,
    categories: categoriesReducer,
    cart: cartReducer,

  },
});

export default store;
