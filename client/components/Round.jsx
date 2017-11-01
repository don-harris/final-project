import React from 'react'
import {Link} from 'react-router-dom'

class Round extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="column is-4 is-desktop-only company">
        <h1>Round Page</h1>
        <Link to="/leaderboard">
          <button className="button is large">Continue</button>
        </Link>
      </div>
    )
  }
}

export default Round
