import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper row">
  {props.children}
</div>;

export default Wrapper;