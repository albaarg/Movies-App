import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer container row no-gutters mt-3"></div>
      <div className="movies-footer col-3">
        <ul>
          <p>Enjoy the latest movies!</p>
        </ul>
      </div>
      <div className="shop-footer col-5">
        <div className="copyright col-12 text-center">
          <p> &copy; 2021.MOVIES APP. This web app is using TMDB API</p>
        </div>
      </div>
    </footer>
  );
};
