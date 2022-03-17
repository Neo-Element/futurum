import axios from "axios";
import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";


export const getProducts = createAsyncThunk("getProducts", () => {
  return axios.get("/api/product").then((res) => res.data);
});

export const getCategoryProd = createAsyncThunk("CATEGORY_PRODUCTS", (id) => {
  return axios.get(`/api/product/categories/${id}`).then((res) => res.data);
});

const setProducts = createReducer([], {
  [getProducts.fulfilled]: (state, action) => action.payload,
  [getCategoryProd.fulfilled]: (state, action) => action.payload,

});

export default setProducts;