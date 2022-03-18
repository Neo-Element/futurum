import {  createReducer, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const cartRegister = createAsyncThunk("Cart", async(cart) => {
    let arr = []
    try{
        const resposes = await Promise.all(cart.map(element => {
            arr.push( axios
              .post("/api/orders", element))   
         }))
        
         
         return resposes
    }
  catch (err){
      console.log(err)
  }
  });

const cartReducer = createReducer([], {
  [cartRegister.fulfilled]: (state, action) => action.payload
}); 

export default cartReducer;