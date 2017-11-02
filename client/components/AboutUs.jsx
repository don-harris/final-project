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
        <h2 className= "subtitle is-2">Meet the Team</h2>
      </div>

      <div>
        <AboutUsPeople 
          name="Joe"
          email="joe@joe.come"
          githubUserName="JosephJvB"
          imageSrc="joe.jpg" 
        />

        <br />
          <AboutUsPeople
            name="Annah"
            email="agerletti@gmail.com"
            githubUserName="AnnahGerletti"
            imageSrc="annah.jpg"
          />
        <br />
         <AboutUsPeople
            name="Don"
            email="don@gmail.com"
            githubUserName="don-harris"
            imageSrc="donh.jpg"
          />
        
        <br />
          <AboutUsPeople
            name="Richard"
            email="richard@gmail.com"
            githubUserName="richardjohns"
            imageSrc="rich.jpg"
          />
        
        <br />
          <AboutUsPeople
            name="Callan"
            email="callan@gmail.com"
            githubUserName="callan-stretton"
            imageSrc="cal.png"
          />
        </div>
        
    </div>
  )}
export default AboutUs
