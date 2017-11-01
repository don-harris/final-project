import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ContactUs = props => {
  return (
  <Link to="/">
      <button className="button is large">ContactUs to Home</button>
  </Link>
  )
};

export default connect()(ContactUs);