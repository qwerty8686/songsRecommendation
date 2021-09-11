import { useState } from "react";
import "./styles.css";

export default function App() {
  var songs = {
    Relaxing: [
      { name: "Life of Ram", rating: "4.7/5" },
      { name: "Ningi Chutte", rating: "4.5/5" },
      { name: "Hoyna Hoyna", rating: "4.1/5" }
    ],
    Motivation: [
      { name: "Chal Chalo Chalo", rating: "4.8/5" },
      { name: "Entha Varaku", rating: "4.3/5" },
      { name: "Dont Stop", rating: "4.2/5" }
    ],
    Instrumental: [
      { name: "Neeyum Naanum Anbe", rating: "4.6/5" },
      { name: "The Life of Ram", rating: "4.4/5" },
      { name: "Yaanji", rating: "4.0/5" }
    ]
  };
  var genres = Object.keys(songs);
  var [genre, setGenre] = useState("Relaxing");
  function clickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎵 Songs Recommendation</h1>
      <h2>Check out my favorite songs and select a genre to get started</h2>
      <div>
        {genres.map((genre) => (
          <button
            onClick={() => clickHandler(genre)}
            class="padding decoration"
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        <ul>
          <h2 class="center">{genre}</h2>
          {songs[genre].map((song) => (
            <>
              <div class="inline">Song : {song.name}</div>,&nbsp;
              <div class="inline">Rating: {song.rating}</div>
              <hr />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
