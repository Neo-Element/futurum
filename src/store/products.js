import axios from "axios";
import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";


export const getProducts = createAsyncThunk("getProducts", () => {
  return axios.get("/api/product").then((res) => res.data);
});

export const getOneProduct = createAsyncThunk("getOneProduct", () => {
  return axios.post("/api/findProduct").then((res) => res.data);
});

export const productCreated = createAsyncThunk("productCreated", (product) => {
  console.log("REDUX PRODUCT",product)
  return axios.post("/api/product/add", product).then((res)=> {
    
    console.log("ESTOY DENTRO AXIOS -->", res.data)
    return res.data;
  })
})

export const deleteProduct = createAsyncThunk("productDeleted", (product) => {
  console.log("PRODUCT", product);
  return axios.delete(`/api/product/remove?productId=${product.id}`).then((res)=> res.data)
})

const setProducts = createReducer([], {
  [getProducts.fulfilled]: (state, action) => action.payload,
  [getOneProduct.fulfilled]: (state, action) => action.payload,
  [productCreated.fulfilled]: (state, action) => action.payload,
  [deleteProduct.fulfilled]: (state, action) => action.payload,

});

export default setProducts;
