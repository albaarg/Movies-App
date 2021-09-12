import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard.js";
import { get } from "../Api/Getmovie.js";
import "./Home.css";
import { useQuery } from "../Hook/useQuery";
//All movies
export const Home = () => {
  const [movies, setMovies] = useState([]);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl)
      .then((data) => {
        console.log("movie final:", data.results);
        setMovies(data.results);
      })
      .catch((e) => {
        console.log("error e", e);
      });
  }, [search]);

  return (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
