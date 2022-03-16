import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("USERS", () => {
  return axios.get("/api/users").then((res) => res.data);
});

const usersReducer = createReducer([], {
  [getUsers.fulfilled]: (state, action) => action.payload,
});

export default usersReducer;


