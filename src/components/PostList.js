import React from "react";
import Post from "./Post.js";

function PostList({ posts }) {
  return posts.map((post, i) => <Post key={i} {...post} />);
}

export default PostList;
