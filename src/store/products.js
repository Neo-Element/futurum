import axios from "axios";
import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";


export const getProducts = createAsyncThunk("getProducts", () => {
  return axios.get("/api/product").then((res) => res.data);
});

const setProducts = createReducer([], {
  [getProducts.fulfilled]: (state, action) => action.payload,
});

export default setProducts;