/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const Postlist = () => {
  const posts = useSelector((state) => state.posts.posts); // Assuming posts property in state

  console.log("posts store", posts);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, [dispatch]);

  return (
    <div>
      <Link to="post/add">Create Post</Link>
      {posts && posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <pre>{JSON.stringify(post, null, 2)}</pre>
              <PostAuthor userId={post.userId} />
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
