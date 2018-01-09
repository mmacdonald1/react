import React from 'react';
import "./Navbar.css";

const Navbar = props =>

      <ul className="nav">
      <li className="nav-item">
        Clicky Game
      </li>
      <li className="nav-item">
        {props.message}
      </li>
      <li className="nav-item">
        Score: {props.score} | Top Score: {props.topscore}
      </li>
    </ul>;

export default Navbar;
