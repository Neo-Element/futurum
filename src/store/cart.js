import { createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const cartRegister = createAsyncThunk("Cart", (cart) => {
    return axios.post("/api/orders", cart).then((res) => res.data);
  });
  

const cartReducer = createReducer([], {
  [cartRegister.fulfilled]: (state, action) => action.payload
});

export default cartReducer;