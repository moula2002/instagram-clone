import React, { useState } from "react";
function Search() {
  const [users, setUsers] = useState([
    { id: 1, name: "devil_with_curls", image: "./src/assets/profile pic 1.jpg" },
    { id: 2, name: "Vampire_gwrl", image: "./src/assets/sowmi.JPG" },
    { id: 3, name: "Kishore_kumar", image: "./src/assets/kishore.jpg" },
    { id: 4, name: "Visnu_prasant", image: "./src/assets/visnu.jpeg" },
    { id: 5, name: "dark_parrel", image: "./src/assets/blackparrel.jpeg" },
  ]);

  const [query, setQuery] = useState("");
  const [lastResults, setLastResults] = useState([]);

  const handleSearch = (value) => {
    setQuery(value);
    if (value.trim() !== "") {
      const results = users.filter((user) =>
        user.name.toLowerCase().includes(value.toLowerCase())
      );
      setLastResults(results);
    }
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setLastResults(lastResults.filter((user) => user.id !== id));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="search-input"
      />

      <div className="search-results">
        {lastResults.length > 0 ? (
          lastResults.map((user) => (
            <div key={user.id} className="search-item">
              <img src={user.image} alt={user.name} className="user-image" />
              <span>{user.name}</span>
              <button
                onClick={() => handleDelete(user.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))
        ) : query.trim() !== "" ? (
          <p className="no-results">No results found</p>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
