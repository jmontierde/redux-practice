/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

const Postlist = () => {
  const posts = useSelector((state) => state.posts.posts); // Assuming posts property in state

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(posts));
  }, dispatch);

  return (
    <div>
      {posts && posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <pre>{JSON.stringify(post, null, 2)}</pre>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default Postlist;
