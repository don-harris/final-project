import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Instructions = props => {
  return (
  <Link to="/">
      <button className="button is large">Instructions to Home</button>
  </Link>
  )
};

export default connect()(Instructions);

