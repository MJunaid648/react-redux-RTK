import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    add: (state, action) => {
      state.count += +action.payload.num;
    },
    subtract: (state, action) => {
      state.count -= +action.payload.num;
    },
    increment: (state, action) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
