import { createReducer, createAction } from "@reduxjs/toolkit";

export const setCart = createAction("SET_CART");
export const removeCourseFromCart = createAction("REMOVE_COURSE")

const cartReducer = createReducer([], {
  [setCart]: (state, action) => action.payload,
  [removeCourseFromCart]: (state, action) => action.payload
});

export default cartReducer;
