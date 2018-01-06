import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pupster from "./components/Pupster";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";

const App = () =>
  <Router>
    <div>
      <Pupster />
      <Route exact path="/about" component={About} />
      <Route exact path="/discover" component={Discover} />
      <Route path="/search" component={Search} />
    </div>
  </Router>;

export default App;
