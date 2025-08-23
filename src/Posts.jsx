import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);


  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === id) {
          if (post.isLiked) {
            return { ...post, likes: post.likes - 1, isLiked: false };
          } else {
            return { ...post, likes: post.likes + 1, isLiked: true };
          }
        }
        return post;
      })
    );
  };

  return (
    <div className="d-flex justify-content-center">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div className="my-5" key={post.id}>
              <div className="d-flex align-items-center mb-2">
                <img
                  className="dp rounded-circle"
                  src={post.user.profile_pic}
                  alt="profile_pic"
                />
                <h5 className="ms-2">{post.user.username}</h5>
              </div>

              <img className="image" src={post.image} alt="" />

              <div className="my-2">
                <i
                  className={`bi ${post.isLiked ? "bi-heart-fill text-danger" : "bi-heart"
                    } me-3`}
                  style={{ cursor: "pointer", fontSize: "1.5rem" }}
                  onClick={() => handleLike(post.id)}
                ></i>
                <i className="bi bi-chat me-3" style={{ fontSize: "1.5rem" }}></i>
                <i className="bi bi-send" style={{ fontSize: "1.5rem" }}></i>
              </div>

              <div>
                <b>{post.likes} Likes</b>
              </div>
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>Loading posts...</div>
      )}
    </div>
  );
}

export default Posts;
