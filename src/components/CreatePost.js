import React, { useState, useRef } from "react";

function CreatePost({ user, handleAddPost }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    //   Note below is equal to const post = {content: content, image:image, user, user}
    const post = { content, image, user };
    // const newPosts = [post, ...posts];
    // setPosts(newPosts);
    handleAddPost(post);
    setContent("");
    imageInputRef.current.value = "";
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={(event) => setContent(event.target.value)}
          value={content}
        />
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageInputRef}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
