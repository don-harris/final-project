import React from "react";
import {Link} from "react-router-dom";


const Instructions = props => {

function back() {
  document.location="/"
}
  return (
    <section className="instruction-section">
      <div className="instruction-container">
            <button className="button is large" onClick={back}>Back to Home</button>
            <h2 className="subtitle">Its pretty easy to get, but if you get stuck here are some tips.</h2>
            <br />
            <h1 className="title">How to play the game</h1>
      </div>
       
         
        
         <div className="level getting-started">
           <div className="level-left">
             <h3>Getting Started</h3>
              <ol>
                <li className="level"> pick your players </li>
                <li className="level"> Hit the play button </li>
                <li className="level">   </li>
                <li className="level"> Hit the play button </li>
              </ol>
           </div>
         </div>
        

    </section>
  )
};

export default Instructions

