import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("getProducts", () => {
  return axios.get("/api/product").then((res) => res.data);
});

export const getOneProduct = createAsyncThunk("getOneProduct", () => {
  return axios.post("/api/findProduct").then((res) => res.data);
});

export const productCreated = createAsyncThunk("productCreated", (product) => {
  return axios.post("/api/addProduct", product).then((res)=> res.data)
})

const setProducts = createReducer([], {
  [getProducts.fulfilled]: (state, action) => action.payload,
  [getOneProduct.fulfilled]: (state, action) => action.payload,
  [productCreated.fulfilled]: (state, action) => action.payload,
});

export default setProducts;
