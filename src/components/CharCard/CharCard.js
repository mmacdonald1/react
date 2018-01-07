import React from "react";
import "./CharCard.css";

const CharCard = props => (
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>

);

export default CharCard;
