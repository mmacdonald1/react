import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Jumbotron from "./Jumbotron"
import CharCard from "./CharCard"
import Navbar from "./Navbar"
import characters from "./characters.json"
import "../App.css";

class Clickygame extends Component {
  state = {
    characters
  };
//needs to be tested and bring .map in here then call ftn in render
  randomChar = (array) => {
    let i = array.length - 1;
     for (; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       const temp = array[i];
       array[i] = array[j];
       array[j] = temp;
     }
     return array;
  }

  randomRender = () => {
    console.log(this.randomChar(this.state.characters))
    return(
    this.randomChar(this.state.characters).map(character => {

      <CharCard
      key= {character.id}
      name= {character.name}
      image= {character.image}
      />

    })
    )


    {/*
const randomChars = this.randomChar(characters)
       return(
        {randomChars.map(character =>(
          <CharCard
          key= {character.id}
          name= {character.name}
          image= {character.image}
          />
          */}
      }

  render() {
    return (
      <div>
        <Navbar />

        <Jumbotron />

        <Wrapper>

             {this.randomRender()}

        </Wrapper>
      </div>
    );
  }
}

export default Clickygame;
