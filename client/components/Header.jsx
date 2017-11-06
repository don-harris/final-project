import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <section className="header-section">
        <div className="header-container">
          <h1 className="title is-1">
            <div className="spoken">Spoken,</div>
          </h1>
          <h1 className="title is-1">Not Stirred</h1>
        </div>
      </section>
      <br />
      <hr />
    </div>
  );
};

export default Header;
