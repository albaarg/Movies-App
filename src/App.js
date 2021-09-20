import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Movie } from "./Components/Movie/Movie";
import { Home } from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <header className="App-header" style={{ background: "#1211" }}>
        <NavBar />
        <Switch>
          <Route exact path="/Movie ">
            <Movie />
          </Route>

          <Route exact path="/movies/:movieId">
            <Movie />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </header>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
