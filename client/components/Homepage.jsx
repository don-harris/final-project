import React from 'react'
import {Link} from 'react-router-dom'

class Homepage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return <div className="container">
      <div className="main-title">
        <h1 className="title is-1">Spoken,<br/> Not Stirred</h1>
        <Link to="/players">
          <button className="button is large">Get started</button>
        </Link>
      </div>
      <div className="sub-buttons is-level">
        <Link to="/aboutus" className="level-right">
          <button className="button is large">About Us</button>
        </Link>
        <Link to="/instructions" className="level-right">
          <button className="button is large">Instructions</button>
        </Link>
      </div>
    </div>
  }
}

export default Homepage
