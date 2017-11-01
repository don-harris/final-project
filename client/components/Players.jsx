import React from 'react'
import {Link} from 'react-router-dom'

class Players extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="container">
        <h1>Players Page</h1>
        <Link to="/round">
          <button className="button is large">PLAY</button>
        </Link>
      </div>
    )
  }
}

export default Players
