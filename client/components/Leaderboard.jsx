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
      <div className="container">
        <h1>Leaderboard page</h1>
        <table className="table is-bordered is-fullwidth">
          <thead className="thead">
            <tr className="tr">
              <th className="th has-text-centered">Position</th>
              <th className="th has-text-centered">Round 1</th>
              <th className="th has-text-centered">Round 2</th>
              <th className="th has-text-centered">Round 3</th>
            </tr>
          </thead>
          <tbody className="tbody">
          </tbody>
        </table>
        <hr />
        <Link className="button is-large" to="/">Play Again</Link>
      </div>
    )
  }
}

export default Leaderboard
