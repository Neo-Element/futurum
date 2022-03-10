import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const userRegister = createAsyncThunk("register", (user) => {
  return axios.post("/api/users/register", user).then((res) => res.data);
});

export const userLogin = createAsyncThunk("login", (user) => {
  return axios.post("/api/users/login", user).then((res) => res.data);
});



export const getAllCart= createAsyncThunk("SETCART", (userId)=>{
  return axios.get(`/api/shoppingCart/${userId}/all`).then((res)=>res.data)
}) 


const userReducer = createReducer([], {
  // estado inicial []/{}
  [userRegister.fulfilled]: (state, action) => action.payload,
  [userLogin.fulfilled]: (state, action) => action.payload,
  [getAllCart.fullfilled]: (state, action)=> action.payload 
});

export default userReducer;

