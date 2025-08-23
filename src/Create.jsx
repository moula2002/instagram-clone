import React, { useState } from "react";


export default function Create() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setSelectedImage(ev.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handlePost = () => {
    if (!selectedImage) {
      alert("Please select an image!");
      return;
    }
    console.log("Post created:", { image: selectedImage, caption });
    alert("Post created successfully!");
    setSelectedImage(null);
    setCaption("");
  };

  return (
    <div className="create-container">
      <h2>Create Post</h2>

      <div className="image-upload">
        {selectedImage ? (
          <img src={selectedImage} alt="Preview" className="image-preview" />
        ) : (
          <div className="image-placeholder">Select an image</div>
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      <button className="post-btn" onClick={handlePost}>
        Post
      </button>
    </div>
  );
}
