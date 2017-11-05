import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {endRound, resetGame} from '../actions/round'

class Leaderboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
    this.endGame = this.endGame.bind(this)
  }

  componentDidMount () {
    const {dispatch, round} = this.props
    dispatch(endRound(round))
  }

  handleClick () {
    const {game, history} = this.props
    game.length < 3 ? history.push('/round') : this.endGame()
  }

  endGame () {
    const {dispatch, history} = this.props
    dispatch(resetGame())
    history.push('/')
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
            {this.props.scores.map(player => {
              return <tr className="tr" key={player.id}>
                <td className="th has-text-centered">1st</td>
                <td className="th has-text-centered"><img src={player.icon} /></td>
                <td className="th has-text-centered">{player.name} </td>
                <td className="th has-text-centered" >{player.score}</td>
                <td className="th has-text-centered" >{player.score}</td>
                <td className="th has-text-centered" >{player.score}</td>
                <td className="th has-text-centered" >{player.score*3}</td>
                </tr>
            })}

          </tbody>
        </table>

        <hr />
        <button className="button is-medium" onClick={this.handleClick}>continue</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    players: state.players,
    game: state.game,
    round: state.round,
    scores: state.playerScores
  }
}

export default connect(mapStateToProps)(Leaderboard)
