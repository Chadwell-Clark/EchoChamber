import React from "react";
import Post from "./Post.js";

function PostList({ posts }) {
  return posts.map((post, i) => <Post key={post.id} {...post} />);
}

export default PostList;
