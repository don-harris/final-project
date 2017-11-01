import React from 'react'
import {Link} from 'react-router-dom'

class Leaderboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="column is-4 is-desktop-only company">
        <h1>Leaderboard page</h1>
        <table className="table is-bordered">
          <thead>
            <tr><th>Position</th><th>Round 1</th><th>Round 2</th><th>Round 3</th></tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Leaderboard
