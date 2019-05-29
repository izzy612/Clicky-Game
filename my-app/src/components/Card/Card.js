import React from "react";

const Card = props => (
  <div className="card img-responsive col-3">
    <img alt={props.name} src={props.image} id={props.id}
      onClick={() => props.shuffleScoreCard(props.id)} className="shuffleScore" />
  </div>
);

export default Card;