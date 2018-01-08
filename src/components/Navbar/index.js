import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
  state = {
    message: 'Click any image to begin!',
    score: '0',
    topscore: '0'
  }
  render(){
    return(
      <ul className="nav">
      <li className="nav-item">
        Clicky Game
      </li>
      <li className="nav-item">
        {this.state.message}
      </li>
      <li className="nav-item">
        Score: {this.state.score} | Top Score: {this.state.topscore}
      </li>
    </ul>
  )
}
}

export default Navbar;
