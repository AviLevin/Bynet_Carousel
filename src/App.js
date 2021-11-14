import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Food from "./components/Food/Food";
import Sport from "./components/Sport/Sport";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
      <div className="top"></div>
        <div className="App">
          <Router>

            <h1>OUR GALLERY </h1>
            <Link to="/sport">
              <button type="button" class="btn btn-primary">
                Sport
              </button>
            </Link>
            <Link to="/food">
              <button type="button" class="btn btn-primary">
                Food
              </button>
            </Link>

            <Routes>
              <Route exact path="/sport" element={<Sport />}></Route>

              <Route path="/Food" element={<Food />}></Route>
            </Routes>
          </Router>
        </div>
      </>
    );
  }
}

export default App;
