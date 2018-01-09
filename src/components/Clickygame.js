import React, { Component } from "react";
import Wrapper from "./Wrapper";
import Jumbotron from "./Jumbotron"
import CharCard from "./CharCard"
import Navbar from "./Navbar"
import characters from "./characters.json"
import "../App.css";

class Clickygame extends Component {
  state = {
    characters,
    message: 'Click any image to begin!',
    score: 0,
    topscore: 0
  };

  handleClick = e => {
  console.log("you clicked")
  if (!this.state.characters.flipped) {
      this.state.characters.checkMatch(this.state.characters.id, this.state.characters.flipped);
      this.setState({flipped:true});
    }
    this.randomRender();
  }

  checkMatch = (id, flipped) => {
  const cards = this.state.characters;
    if (cards[id].flipped === false){
      cards[id].flipped = true;
      this.setState({score: this.state.score + 1 });
      this.setState({message:'You guess correctly'});
      if (this.state.score > this.state.topscore){
        this.setState({topscore: score})
      }

   } else if (cards[id].flipped === true) {
    this.setState({message:'You guessed incorrectly!'});
    this.setState({score: 0});
   }
}

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
    console.log(this)


    return (
      this.randomChar(this.state.characters).map(character => (

        <CharCard
        className="char"
        key= {character.id}
        name= {character.name}
        image= {character.image}
        flipped={character.flipped}
        onClick= {() => {this.handleClick()}}
        />

      ))

  )
  }
render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topscore={this.state.topscore}
         />

        <Jumbotron />

        <Wrapper>

             {this.randomRender()}

        </Wrapper>
      </div>
    );
  }
}

export default Clickygame;
