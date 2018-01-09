import React from "react";
import "./CharCard.css";



const CharCard = props => (
  <div className='char'>
    <div className="img-container">
      <img alt={props.name} id={props.id} src={props.image} onClick={() => props.onClick(props.index)} />
    </div>
  </div>

);

export default CharCard;
