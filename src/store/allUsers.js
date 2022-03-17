import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk("USERS", () => {
    console.log("dentro del reducer")
  return axios.get("/api/users").then((res) => res.data);

});

const allUsersReducer = createReducer([], {
  [getAllUsers.fulfilled]: (state, action) => action.payload,
});

export default allUsersReducer;
