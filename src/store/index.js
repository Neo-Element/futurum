import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import setProducts from "./products";
import cartReducer from "./cart";
import singleCategoryReducer from "./singleCategory";
import categoriesReducer from "./categories";
import setProduct from "./singleProduct";
import adminUserReducer from "./admin";
import usersReducer from "./users";
import singleUserReducer from "./singleUser";
import paymentReducer from "./payments";
import reviewReducer from "./review";
import mailReducer from "./mail";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: singleUserReducer,
    users: usersReducer,
    admin: adminUserReducer,
    products: setProducts,
    product: setProduct,
    cart: cartReducer,
    category: singleCategoryReducer,
    categories: categoriesReducer,
    payments: paymentReducer,
    reviews: reviewReducer,
    mail: mailReducer,
  },
});

export default store;
