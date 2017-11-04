import React from 'react'
import {Link} from 'react-router-dom'

class Homepage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {

    return <div className="columns">
      <div className="homepageimage column is-two-fifths" ></div>
      <div className="container column is-half">
        <div className="main-title">
          <h1 className="title is-1"><div className="spoken">Spoken,</div> Not Stirred</h1>
          <Link to="/players">
            <button className="button is large">Get started</button>
          </Link>
        </div>
        <div className="sub-buttons">
          <Link to="/aboutus" className="aboutus">
            <button className="button is large">About Us</button>
          </Link>
          
          <Link to="/instructions" className="instructions" >
            <button className="button is large">Instructions</button>
          </Link>
        </div>
      </div>
    </div>
  }
}

export default Homepage

  // < img src= "/images/homepageimage.jpg" className= "homepageimage column is-half" />