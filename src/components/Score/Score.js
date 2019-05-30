import React from "react";
import Arrow from 'react-icons/lib/fa/caret-right';



const Score = props => (
  <div className="gameScore text-center">
  <h3 className="score text-success">Your Score <Arrow /> {props.total}</h3>
  <h3 className="status text-danger">{props.status}</h3>
</div>
);
export default Score;