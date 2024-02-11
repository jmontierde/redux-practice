import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./features/counter/counterSlice";

import postsSlice from "./features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counter: counterReducers,
    posts: postsSlice,
  },
});

export default store;
