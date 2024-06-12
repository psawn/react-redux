import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";
import { authSlice } from "./auth";

// const counterReducer = (state = initialState, action: { type: string; amount: number }) => {
//   if (action.type === "increment") {
//     // need always set all the states: counter and showCounter in this example
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
