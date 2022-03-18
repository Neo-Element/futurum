import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const userRegister = createAsyncThunk("register", (user) => {
  return axios.post("/api/users/register", user).then((res) => res.data);
});

export const userLogin = createAsyncThunk("login", (user) => {
  return axios.post("/api/users/login", user).then((res) => res.data);
});

export const persistence = createAsyncThunk("user", () => {
  return axios.get("/api/users/me").then((res) => res.data);
});

export const userLogout = createAsyncThunk("logout", () => {
  return axios.post("/api/users/logout").then((res) => res.data);
});


const singleUserReducer = createReducer({}, {
  [userRegister.fulfilled]: (state, action) => action.payload,
  [userLogin.fulfilled]: (state, action) => action.payload,
  [persistence.fulfilled]: (state, action) => action.payload,
  [userLogout.fulfilled]: (state, action) => action.payload,
});

export default singleUserReducer;
