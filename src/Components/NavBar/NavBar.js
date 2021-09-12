import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { useQuery } from "../Hook/useQuery";

const NavBar = () => {
  const query = useQuery();
  const search = query.get("search");
  const [searchMovie, setSearchMovie] = useState("");
  const history = useHistory();
  useEffect(() => {
    setSearchMovie(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchMovie);
  };
  return (
    <>
      <div className="container">
        <nav className="topnav">
          <h1>MOVIES</h1>
        </nav>
      </div>
      <div className="searchBox">
        <Navbar>
          <Navbar.Collapse id="navbarScroll">
            <Form className="searchContainer" onSubmit={handleSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="searchForm"
                aria-label="Search"
                value={searchMovie}
                onChange={(e) => setSearchMovie(e.target.value)}
              />
              <Button className="searchButton" variant="outline-success">
                <SearchIcon size={8} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
