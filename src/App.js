import React, {
  useState,
  useEffect,
  useCallback,
  createContext,
  useReducer,
  useContext,
} from "react";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import CreatePost from "./components/CreatePost.js";
import PostList from "./components/PostList.js";
import postReducer from "./reducer.js";

export const UserContext = createContext();
export const PostContext = createContext({
  posts: [],
});

function App() {
  const initialPostState = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialPostState);
  const [user, setUser] = useState();

  useEffect(() => {
    document.title = user ? `${user}'s Feed'` : "Please Login";
  }, [user]);

  // const handleAddPost = useCallback(
  //   (newPost) => {
  //     setPosts([newPost, ...posts]);
  //   },
  //   [posts]
  // );

  if (!user) {
    return <Login setUser={setUser} />;
  } else {
    return (
      <PostContext.Provider value={{ state, dispatch }}>
        <UserContext.Provider value={user}>
          <Header user={user} setUser={setUser} />
          <CreatePost
            user={user}
            // handleAddPost={handleAddPost}
          />
          <PostList posts={state.posts} />
        </UserContext.Provider>
      </PostContext.Provider>
    );
  }
}

export default App;
