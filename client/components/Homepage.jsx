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
          <br />
          <Link to="/players">
            <button className="button is-large is-danger"><strong>Let's play!</strong></button>
          </Link>
        </div>
        <div className="sub-buttons">
          <Link to="/aboutus" className="aboutus">
            <button className="button is large"><strong>About Us</strong></button>
          </Link>
          
          <Link to="/instructions" className="instructions" >
            <button className="button"><strong>Instructions</strong></button>
          </Link>
        </div>
      </div>
    </div>
  }
}

export default Homepage

  // < img src= "/images/homepageimage.jpg" className= "homepageimage column is-half" />