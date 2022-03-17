import axios from "axios";
import {
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const deleteUser = createAsyncThunk("delete", (user) => {
    return axios.delete(`/api/users/${user.id}`).then((res)=> res.data)
})

export const adminRole = createAsyncThunk("userRole", (user) => {

  return axios.patch(`/api/users/admin/${user.id}`, user).then((res)=> res.data)
})

const adminUserReducer = createReducer([], {
    [deleteUser.fulfilled]: (state, action) => action.payload,
    [adminRole.fulfilled]: (state, action) => action.payload,
});

export default adminUserReducer;
