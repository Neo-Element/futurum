import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const categoryRegister = createAsyncThunk("INSERT", (category) => {
  return axios.post("/api/categories/new", category).then((res) => res.data);
});

export const getCategory = createAsyncThunk("SINGLE_CATEGORY", (id) => {
  return axios.get(`/api/categories/${id}`).then((res) => res.data);
});

export const deleteCategory = createAsyncThunk("DELETE", (id) => {
  return axios.delete(`/api/categories/${id}`).then((res) => res.data);
});

export const editCategory = createAsyncThunk("EDIT", (category) => {
  return axios.put(`/api/categories/${category.id}`, category).then((res) => res.data);
});

const singleCategoryReducer = createReducer(
  {},
  {
    [categoryRegister.fulfilled]: (state, action) => action.payload,
    [getCategory.fulfilled]: (state, action) => action.payload,
    [deleteCategory.fulfilled]: (state, action) => action.payload,
    [editCategory.fulfilled]: (state, action) => action.payload,
  }
);

export default singleCategoryReducer;
