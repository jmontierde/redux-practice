import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store.js";
import { fetchUsers } from "./features/users/usersSlice.jsx";
import { fetchPosts } from "./features/posts/postsSlice.jsx";

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
