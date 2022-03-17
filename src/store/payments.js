import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";


export const getPayments = createAsyncThunk("PAYMENTS", () => {
  return axios.get("/api/payments").then((res) => res.data);
});

const paymentReducer = createReducer([], {
  [getPayments.fulfilled]: (state, action) => action.payload,
});

export default paymentReducer;