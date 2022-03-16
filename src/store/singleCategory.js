import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const categoryRegister = createAsyncThunk("INSERT", (category) => {
  return axios.post("/api/categories", category).then((res) => res.data);
});

export const getCategory = createAsyncThunk("SINGLE_CATEGORY", (id) => {
  return axios.get(`/api/categories/${id}`).then((res) => res.data);
});

export const getCategoryProd = createAsyncThunk("CATEGORY_PRODUCTS", (name) => {
  return axios.get(`/api/categories/prod/${name}`).then((res) => res.data);
});

const singleCategoryReducer = createReducer(
  {},
  {
    [categoryRegister.fulfilled]: (state, action) => action.payload,
    [getCategory.fulfilled]: (state, action) => action.payload,
    [getCategoryProd.fulfilled]: (state, action) => action.payload,
  }
);

export default singleCategoryReducer;
