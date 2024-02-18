import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./features/counter/counterSlice";

import postsSlice from "./features/posts/postsSlice";
import usersSlice from "./features/users/usersSlice";

const store = configureStore({
  reducer: {
    counter: counterReducers,
    posts: postsSlice,
    users: usersSlice,
  },
});

export default store;
