import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [followed, setFollowed] = useState({}); // track followed users

  const navigate = useNavigate(); // ✅ initialize navigate

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));

    fetch("http://localhost:3000/suggestions")
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((err) => console.log(err));
  }, []);

  const handleFollow = async (id, username) => {
    try {
      await axios.post("http://localhost:3000/followers", {
        id,
        username,
      });
      // update followed state
      setFollowed((prev) => ({ ...prev, [id]: true }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="suggestions w-75 m-4">
        {profile ? (
          <div className="d-flex">
            <img
              className="dp rounded-circle"
              src={profile.profile_pic}
              alt="profile_pic"
            />
            <h5>{profile.username}</h5>
            <small className="ms-auto text-primary">Switch</small>
          </div>
        ) : (
          <p>loading</p>
        )}

        <div className="d-flex">
          <p>Suggested for you</p>
          <b className="ms-auto">See All</b>
        </div>

        {suggestions.length > 0 ? (
          <div>
            {suggestions.map((s) => (
              <div key={s.id} className="d-flex m-4">
                <img
                  className="dp rounded-circle"
                  src={s.profile_pic}
                  alt="profile_pic"
                />
                <h5>{s.username}</h5>
                {followed[s.id] ? (
                  <span className="text-muted ms-auto">Followed</span>
                ) : (
                  <button
                    className="btn btn-link text-primary ms-auto text-decoration-none p-0"
                    onClick={() => handleFollow(s.id, s.username)}
                  >
                    Follow
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div>Loading </div>
        )}

        <div
          className="text-muted"
          style={{ textAlign: "center", fontFamily: "monospace" }}
        >
          <p>
            About. Help. Press. API. Privacy. Terms. Locations. Language. Moula
            Verified
          </p>
        </div>
        <div
          className="text-muted"
          style={{ textAlign: "center", fontFamily: "monospace" }}
        >
          <p>©2025 INSTAGRAM FROM MOULA</p>
        </div>

        {/* ✅ Fixed navigate function */}
        <div className="nav-item" onClick={() => navigate("/more")}>
          <i className="bi bi-list"></i>
          <span className="nav-label">More</span>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
