import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card bg-success  col-3">
    <img alt={props.name} src={props.image} id={props.id}
      onClick={() => props.shuffleScoreCard(props.id)}  />
  </div>
);

export default Card;