import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk("CATEGORIES", () => {
  return axios.get("/api/categories").then((res) => res.data);
});

const categoriesReducer = createReducer([], {
  [getCategories.fulfilled]: (state, action) => action.payload,
});

export default categoriesReducer;
