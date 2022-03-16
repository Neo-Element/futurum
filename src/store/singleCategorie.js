import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const categoryRegister = createAsyncThunk("INSERT", (category) => {
  return axios.post("/api/categories", category).then((res) => res.data);
});

export const getCategory = createAsyncThunk("SINGLE_CATEGORY", (name) => {
  return axios.get(`/api/categories/${name}`).then((res) => res.data);
});

const singleCategoryReducer = createReducer(
  {},
  {
    [categoryRegister.fulfilled]: (state, action) => action.payload,
    [getCategory.fulfilled]: (state, action) => action.payload,
  }
);

export default singleCategoryReducer;
