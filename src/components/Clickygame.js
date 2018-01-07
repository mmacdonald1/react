import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Jumbotron from "./Jumbotron"
import CharCard from "./CharCard"
import characters from "./characters.json"
import "../App.css";

class Clickygame extends Component {
  state = {
    characters
  };

  render() {
    return (
      <div>
        <Jumbotron>
        </Jumbotron>
        <Wrapper>
          {this.state.characters.map(character =>(
            <CharCard
            name= {character.name}
            image= {character.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Clickygame;
