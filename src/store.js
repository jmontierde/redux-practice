import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducers,
  },
});

export default store;
