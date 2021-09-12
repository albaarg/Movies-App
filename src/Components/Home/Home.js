import React, { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard.js";
import { get } from "../Api/Getmovie.js";
import "./Home.css";
import { useQuery } from "../Hook/useQuery";
import Spinner from "react-bootstrap/Spinner";

//All movies
export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl)
      .then((data) => {
        console.log("movie final:", data.results);
        setMovies(data.results);
        setLoading(false);
      })
      .catch((e) => {
        console.log("error e", e);
      });
  }, [search]);

  return loading ? (
    <Spinner animation="border" variant="white" />
  ) : (
    <div className="grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
