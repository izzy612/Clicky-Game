import React from "react";


const Score = props => (
  <div className="header">
    <div className="title">
      {props.children}
    </div>
    <div className="scores">
      Score:{props.score}
    </div>
  </div>
);
export default Score;