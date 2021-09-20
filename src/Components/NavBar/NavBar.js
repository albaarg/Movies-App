import React from "react";
import "./NavBar.css";
import { Nav } from "react-bootstrap";
import { useHistory, NavLink } from "react-router-dom";
import { useQuery } from "../Hook/useQuery";

const NavBar = () => {
  const query = useQuery();
  const search = query.get("search");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <nav className="topnav">
          <h1>MOVIES APP</h1>
        </nav>
      </div>
      <Nav className="mr-auto">
        <NavLink exact to={"/"} className="navbar-item">
          Home
        </NavLink>
        ))
      </Nav>
      <form className="searchContainer" onSubmit={handleSubmit}>
        <div className="searchbox">
          <input
            className="searchForm"
            type="search"
            placeholder="Search..."
            aria-label="Search"
            value={search}
            onChange={(e) => {
              const value = e.target.value;
              history.push("/?search=" + value);
            }}
          />
        </div>
      </form>
    </>
  );
};

export default NavBar;
