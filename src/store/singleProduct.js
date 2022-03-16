import axios from "axios";
import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";


export const getOneProduct = createAsyncThunk("getOneProduct", (id) => {
  return axios.get(`/api/product/${id}`).then((res) => res.data);
});

export const productCreated = createAsyncThunk("productCreated", (product) => {
  return axios.post("/api/product/add", product).then((res)=> res.data)
})

export const deleteProduct = createAsyncThunk("productDeleted", (product) => {
  return axios.delete(`/api/product/remove?productId=${product.id}`).then((res)=> res.data)
})

const singleProdReducer = createReducer({}, {
  [getOneProduct.fulfilled]: (state, action) => action.payload,
  [productCreated.fulfilled]: (state, action) => action.payload,
  [deleteProduct.fulfilled]: (state, action) => action.payload,
});

export default singleProdReducer;