import React from 'react'
import {Link} from 'react-router-dom'
import Dictaphone from './Dictaphone'

class Round extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <h1>Round Page</h1>
        <Dictaphone />
        <Link to="/leaderboard">
          <button className="button is large">Continue</button>
        </Link>
      </div>
    )
  }
}

export default Round
