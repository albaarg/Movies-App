import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <li>
      <Link to={"/movies/" + movie.id} className="link">
        <img width={230} height={345} src={imageUrl} alt={movie.title} />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
};
