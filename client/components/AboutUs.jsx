import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'
import AboutUsPeople from './AboutUsPeople'
const data = require ('../data/profile')

const AboutUs = props => {
  return <div>

    <Header />
    <br />
    <Link to="/">
      <button className="button is-large is-danger">Back to Home</button>
    </Link>
    <br />
    <div className="something">
      <p className="subtitle">
          We are five excited devs coming together to create the ultimate
          party game!
      </p>
      <br />
      <h2 className="title subtitle is-2"><strong>Meet the Team</strong></h2>
    </div>
      <div>
        {data.profile.map((profile) => {
          return <AboutUsPeople name={profile.name} email={profile.email} githubUserName={profile.githubUserName} imageSrc={profile.imageSrc} aboutMe={profile.aboutMe} />
        })}
      </div>
    </div>
  }
export default AboutUs
