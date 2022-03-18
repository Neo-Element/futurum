import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const sendReview = createAsyncThunk("SET_REVIEW", (review) => {
  return axios.post("/api/reviews/new", review).then((res) => res.data);
});


export const getReviewsfromProduct= createAsyncThunk("GET_ALLREVIEWS", (id) => {
  return axios.get(`/api/reviews/${id}`).then((res) => res.data);
});


const reviewReducer = createReducer([], {
  [sendReview.fulfilled]: (state, action) => action.payload,
  [getReviewsfromProduct.fulfilled]: (state, action) => action.payload,
});

export default reviewReducer;