import { useState } from "react";
import "./styles.css";

export default function App() {
  var songs = {
    Relaxing: [
      {
        name: "Life of Ram",
        rating: "4.7/5",
        desc:
          "This is a song from movie Jaanu which is a remake of Malayalam movie 96"
      },
      {
        name: "Ningi Chutte",
        rating: "4.5/5",
        desc:
          "This is also a song from movie Uma Maheshwara Ugra Roopasya which is a remake of Malayalam movie Maheshinte Prathikaram"
      },
      {
        name: "Hoyna Hoyna",
        rating: "4.1/5",
        desc: "This is a song from movie Gang Leader released in 2020"
      }
    ],
    Motivation: [
      {
        name: "Chal Chalo Chalo",
        rating: "4.8/5",
        desc: "This is a song from the movie S/O Satyamurthy "
      },
      {
        name: "Entha Varaku",
        rating: "4.3/5",
        desc: "This is a song from the movie Gamyam released in 2008"
      },
      {
        name: "Dont Stop",
        rating: "4.2/5",
        desc: "This is a song from the movie Nannaku Prematho"
      }
    ],
    Instrumental: [
      {
        name: "Neeyum Naanum Anbe",
        rating: "4.6/5",
        desc:
          "This is a instrumental version of song from the movie Imaikka Nodigal "
      },
      {
        name: "The Life of Ram",
        rating: "4.4/5",
        desc: "This is a instrumental version of song from the movie 96"
      },
      {
        name: "Yaanji",
        rating: "4.0/5",
        desc:
          "This is a instrumental version of song from the movie Vikram Veda "
      }
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
          <h1 class="center background">{genre}</h1>
          {songs[genre].map((song) => (
            <>
              <div class="">
                <strong>Song : </strong>
                <h2 class="inline">{song.name}</h2>
              </div>
              <br />
              <div class="">
                <strong>Rating: </strong>
                {song.rating}
              </div>
              <br />
              <div class="">
                <strong>Description : </strong>
                {song.desc}
              </div>
              <br />
              <hr />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
