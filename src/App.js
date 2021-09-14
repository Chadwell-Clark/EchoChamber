import React, { useState, useEffect, useCallback } from "react";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import CreatePost from "./components/CreatePost.js";
import PostList from "./components/PostList.js";

const functionsCount = new Set();

function App() {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = user ? `${user}'s Feed'` : "Please Login";
  }, [user]);

  const handleAddPost = useCallback(
    (newPost) => {
      setPosts([newPost, ...posts]);
    },
    [posts]
  );
  functionsCount.add(handleAddPost);

  console.log(functionsCount);

  if (!user) {
    return <Login setUser={setUser} />;
  } else {
    return (
      <>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} handleAddPost={handleAddPost} />
        <PostList posts={posts} />
        <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      </>
    );
  }
}

export default App;
