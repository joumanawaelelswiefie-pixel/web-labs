import React, { useState } from "react";
import "./styles.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  function addMovie() {
    if (!title) return;
    const newMovie = {
      id: Date.now(),
      title: title,
      comment: comment,
      rating: rating,
    };
    setMovies([...movies, newMovie]);
    setTitle("");
    setComment("");
    setRating(0);
  }

  return (
    <div className="app-container">
      <h1>🎬 Movies Watch List</h1>

      <div className="input-section">
        <input
          placeholder="Movie name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <p>Rating:</p>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={num <= rating ? "star selected" : "star"}
              onClick={() => setRating(num)}
            >
              ⭐
            </span>
          ))}
        </div>

        <button onClick={addMovie}>Add Movie</button>
      </div>

      <div className="movie-list">
        {movies.length === 0 ? (
          <p className="empty-text">No movies added yet 🎥</p>
        ) : (
          movies.map((m) => (
            <div key={m.id} className="movie-card">
              <h3>{m.title}</h3>
              <p>{m.comment}</p>
              <p className="rating-display">{"⭐".repeat(m.rating)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
