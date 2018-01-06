import React from "react";
import { Link } from "react-router-dom";

const Pupster = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/about" ? "active" : ""}>
      <Link to="/about">About</Link>
    </li>
    <li className={window.location.pathname === "/discover" ? "active" : ""}>
      <Link to="/discover">Discover</Link>
    </li>
    <li
      className={window.location.pathname === "/search" ? "active" : ""}
    >
      <Link to="/search">Learn</Link>
    </li>
  </ul>;

export default Pupster;