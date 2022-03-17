import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const sendReview = createAsyncThunk("SET_REVIEW", (review) => {
  return axios.post("/api/reviews/new", review).then((res) => {
    console.log(res.data);
    return res.data;
  });
});

const reviewReducer = createReducer([], {
  [sendReview.fulfilled]: (state, action) => action.payload,
});

export default reviewReducer;

