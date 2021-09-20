import React, { useEffect, useState } from "react";
import "./Movie.css";
import { get } from "../Api/Getmovie.js";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

//Movie details
export const Movie = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setLoading(false);
    });
  }, [movieId]);

  if (loading) {
    <Loader />;
  }

  return (
    <div>
      {movie && (
        <>
          <img
            className="col"
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt={movie.title}
          />
          <div className=" detailContainer">
            <p>
              {" "}
              <strong>Title:</strong> {movie.title}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average}
            </p>
            <p>
              <strong>Genre:</strong>
            </p>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
            <p>
              <strong> Description:</strong> {movie.overview}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
