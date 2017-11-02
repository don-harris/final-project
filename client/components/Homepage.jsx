import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Homepage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return <div className="container">
      <h1>Home Page</h1>
      <Link to="/players">
        <button className="button is large">Get started</button>
      </Link>
      <Link to="/contactus">
        <button className="button is large">Contact Us</button>
      </Link>
      <Link to="/instructions">
        <button className="button is large">Instructions</button>
      </Link>
    </div>
  }
}

export default Homepage
