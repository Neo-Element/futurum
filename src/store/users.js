import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

//HACER USERS STORE

export const userRegister = createAsyncThunk("register", (user) => {
  return axios.post("/api/users/register", user).then((res) => res.data);
});

const userReducer = createReducer([], {
  [userRegister.fulfilled]: (state, action) => action.payload,
});

export default userReducer;

