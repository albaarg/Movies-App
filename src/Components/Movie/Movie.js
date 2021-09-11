import React, { useEffect, useState } from "react";
import "./Movie.css";
import movie from "../Page/movie.json";
import { get } from "../Api/Getmovie.js";
import { useParams } from "react-router-dom";

//Movie details
export const Movie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      console.log("data:", data);
      setMovie(data);
    });
  }, [movieId]);

  return (
    <div>
      <img src={imageUrl} alt={movie.title} />
      <div>
        <p> Tittle:{movie.title}</p>
        {movie.genres.map((genre) => genre.name)}
        <p>Description: {movie.overview}</p>
      </div>
    </div>
  );
};
