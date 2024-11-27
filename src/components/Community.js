import React, { useState } from "react";
import "../css/Community.css";

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      text: "Excited to join this community!",
      image: null,
      likes: 10,
      comments: [
        { id: 1, text: "Welcome to the community!" },
        { id: 2, text: "Great to have you here!" },
      ],
    },
    {
      id: 2,
      text: "What are your best saving tips?",
      image: "https://via.placeholder.com/300",
      likes: 25,
      comments: [],
    },
  ]);

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="community">
      {/* <h1>Community</h1> */}
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.text}</p>
            {post.image && <img src={post.image} alt="Post Visual" />}
            <div className="post-actions">
              <button onClick={() => handleLike(post.id)}>Like ({post.likes})</button>
              <button>Save</button>
            </div>
            <div className="comments">
              <h4>Comments</h4>
              {post.comments.length > 0 ? (
                post.comments.map((comment) => (
                  <p key={comment.id}>{comment.text}</p>
                ))
              ) : (
                <p>No comments yet.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
