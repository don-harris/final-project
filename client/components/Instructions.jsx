import React from "react";
import {Link} from "react-router-dom";

const Instructions = props => {
  return (
    <div className="instruction-container">
      <div className="instruction header">
          <Link to="/">
              <button className="button is large">Back to Home</button>
          </Link>
            <h2 className="title subtitle is-2">How to play the game</h2>
        </div>
       
         
         <div className="level getting-started">
           <div className="level-left">
           <li> pick your players </li>
           <li> Hit the play button </li>
           <li> THere will be three  </li>
           <li> Hit the play button </li>
           </div>
         </div>
         
        

    </div>
  )
};

export default Instructions

