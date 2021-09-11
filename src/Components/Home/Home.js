import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard.js";
import { get } from "../Api/Getmovie.js";
import "./Home.css";

//All movies
export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie")
      .then((data) => {
        console.log("movie final:", data.results);
        setMovies(data.results);
      })
      .catch((e) => {
        console.log("error e", e);
      });
  }, []);

  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
