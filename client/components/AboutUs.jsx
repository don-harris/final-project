import React from "react";
import { Link } from "react-router-dom";

import AboutUsPeople from './AboutUsPeople'

const AboutUs = props => {
  return (
    <div>
      <Link to="/">
          <button className="button is large">Back to Home</button>
      </Link>
      <div className='something'>
        <p>We are five excited devs coming together to create the ultimate party game!</p>
        <br />
        <h2 className= "title subtitle is-2">Meet the Team</h2>
      </div>

      <div>
        <AboutUsPeople 
          name="Joe"
          email="joe@joe.com"
          githubUserName="JosephJvB"
          imageSrc="joe.jpg" 
        />
          <AboutUsPeople
            name="Annah"
            email="agerletti@gmail.com"
            githubUserName="AnnahGerletti"
            imageSrc="annah.jpg"
          />
         <AboutUsPeople
            name="Don"
            email="donald.walter.harris@gmail.com"
            githubUserName="don-harris"
            imageSrc="donh.jpg"
          />
          <AboutUsPeople
            name="Richard"
            email="richard@gmail.com"
            githubUserName="richardjohns"
            imageSrc="rich.jpg"
          />
          <AboutUsPeople
            name="Callan"
            email="strettcall@yahoo.com"
            githubUserName="callan-stretton"
            imageSrc="cal.png"
          />
        </div>
        
    </div>
  )}
export default AboutUs
