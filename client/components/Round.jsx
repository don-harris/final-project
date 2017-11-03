import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { startRound, nextPlayer } from '../actions/rounds'
import Dictaphone from './Dictaphone'

class Round extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 10,
      video: 'funny cat',
      id: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount () {
    const currentPlayer = this.props.players[0]
    const remainingPlayers = this.props.players.slice(1)
    this.props.dispatch(startRound(currentPlayer, remainingPlayers))
    window.localStorage.setItem('rounds', JSON.stringify(this.props.rounds))
  }

  handleClick () {
    const {rounds} = this.props
    this.props.dispatch(nextPlayer(this.state, rounds.currentPlayer, rounds.remainingPlayers, rounds.roundNumber))
    rounds.remainingPlayers.length === 0 ? this.props.history.push('/leaderboard') : console.log('keep playing')
  }

  render () {
    const {currentPlayer} = this.props.rounds
    return (
      <div>
        <h1>Round Page</h1>
        <h2>{currentPlayer.name}</h2>
        <Dictaphone />
        <button id="next" className="button is large" onClick={this.handleClick}>
            Continue
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    rounds: state.rounds
  }
}

export default connect(mapStateToProps)(Round)
