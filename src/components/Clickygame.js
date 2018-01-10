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

  handleClick = index => {
  console.log("you clicked")
  console.log(index)
  console.log(this.state.characters[index].flipped)
  let chars = this.state.characters
  if (!this.state.characters[index].flipped) {
    this.checkMatch(chars[index], chars[index].flipped);
    console.log(this)
    chars[index].flipped= true;
      this.setState({characters});
    }
    this.randomRender();

}

checkMatch = (index, flipped) => {
  let chars = this.state.characters;
  console.log(index.flipped)
    if (index.flipped === false){
      index.flipped = true;
      this.setState({score: this.state.score + 1 });
      this.setState({message:'You guess correctly'});
      if (this.state.score > this.state.topscore){
        this.setState({topscore: this.state.score + 1})
      }

   } else if (index.flipped === true) {
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
      this.randomChar(this.state.characters).map((character, i) => (

        <CharCard
        className="char"
        key={character.id}
        index={i}
        name={character.name}
        image={character.image}
        flipped={character.flipped}
        onClick={this.handleClick}
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
