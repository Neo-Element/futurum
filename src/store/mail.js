import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const sendMail = createAsyncThunk("sendMail", (shop) => {
  return axios.post("/api/mail", shop).then((res) => res.data);
});

const mailReducer = createReducer([], {
  [sendMail.fulfilled]: (state, action) => action.payload,
});

export default mailReducer;
