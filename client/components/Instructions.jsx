import React from "react";
import {Link} from "react-router-dom";

const Instructions = props => {
  return <div>
      <section className="instruction-section">
        <div className="instruction-container">
          <h1 className="title is-1"><div className="spoken">Spoken,</div></h1>
          <h1 className="title is-1">Not Stirred</h1>
        </div>
      </section>

      <section className="instruction-section">
        <div className="instruction-container">
          <hr />
          <h1 className="title">Actors Guide</h1>
          <br />
          <h2 className="subtitle">
            It's time to see if you've got what it takes to foot it with your <strong> favourite movie stars</strong>, as they deliver some of the best one-liners of all time...
          </h2>
          <br />
          <h2 className="subtitle">
            Just in case we wrote this handy guide to help you <strong>walk the red carpet</strong>...
          </h2>
        </div>
      </section>

      <hr />

      <section className="instruction-section">
        <div className="instruction-container">
          <h1 className="title">Pick your players</h1>
          <br />
          <h2 className="subtitle">
            First enter your <strong>name</strong>...
          </h2>
          <h2 className="subtitle">
            Then pick the <strong>picture</strong> of a film character who you've always wanted to be for just one day...
          </h2>
          <h2 className="subtitle">
            It don't matter whether you're <strong> buddies with Batman</strong> or <strong> cheering for Catwoman</strong>... we've got the player icon for you.
          </h2>
        </div>
      </section>

      <hr />

      <section className="instruction-section">
        <div className="instruction-container">
          <h1 className="title">Time to play!</h1>
          <br />
          <h2 className="subtitle">
            Hit that <strong> play button</strong> for some magic
          </h2>
          <h2 className="subtitle">
            Watch a <strong>classic scene</strong>
          </h2>
          <h2 className="subtitle">
            <strong>Wait</strong> for the sound to mute & <strong>watch</strong> the scene for clues about your line...
          </h2>
          <h2 className="subtitle">
            <strong>Press</strong> the 'Speak' button and <strong>deliver some world-class acting!</strong>
          </h2>
          <h2 className="subtitle">
            <strong>Press</strong> the 'Submit' button to <strong>stop recording</strong> and check your score.
          </h2>
          <h2 className="subtitle">
            <strong>Press</strong> 'Continue' to let <strong>your friends</strong> have a turn!
          </h2>
        </div>
      </section>

      <hr />

      <section>
        <Link to="/" className="button is-large">
          Let's get started!
        </Link>
      </section>
    </div>;
}

export default Instructions


