import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {endRound} from '../actions/round'

class Leaderboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const {game, dispatch, round, history} = this.props
    dispatch(endRound(round))
    game.length < 2 ? history.push('/round') : console.log('game over')
  }

  render () {
    return (
      <div className="container">
        <h1 className="leadertitle title is-1">Leaderboard page</h1>
        <table className="table is-bordered is-fullwidth is-striped">
          <thead className="thead">
            <tr className="tr">
              <th className="th has-text-centered">Position</th>
              <th className="th has-text-centered">Icon</th>
              <th className="th has-text-centered">Player Name</th>
              <th className="th has-text-centered">Round 1</th>
              <th className="th has-text-centered">Round 2</th>
              <th className="th has-text-centered">Round 3</th>
              <th className="th has-text-centered">Final Score</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {this.props.players.map(player => {
              return <tr className="tr" key={player.name}>
                <th className="th has-text-centered">1st</th>
                <th className="th has-text-centered"><img src={player.icon} /></th>
                <th className="th has-text-centered">{player.name} </th>
                <th className="th has-text-centered">Tick or cross</th>
                <th className="th has-text-centered">Tick or cross</th>
                <th className="th has-text-centered">Tick or cross</th>
                <th className="th has-text-centered">Total score</th>
              </tr>
            })}
          </tbody>
        </table>
        <hr />
        <button onClick={this.handleClick}>continue</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    players: state.players,
    game: state.game,
    round: state.round
  }
}

export default connect(mapStateToProps)(Leaderboard)
