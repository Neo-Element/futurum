import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./users"
import setProducts from "./products"

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //middleware para -->
  //que me loggee cada actualización//
  reducer: {
    user: userReducer,
    products: setProducts
  },
});

export default store;
