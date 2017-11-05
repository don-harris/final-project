import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRound, nextPlayer} from '../actions/round'
import {playerScores} from '../actions/playerScores'
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
    this.handleChange = this.handleChange.bind(this)
    this.roundNumber = this.roundNumber.bind(this)
  }
  componentWillMount () {
    const currentPlayer = this.props.players[0]
    const remainingPlayers = this.props.players.slice(1)
    this.props.dispatch(startRound(currentPlayer, remainingPlayers, ))
    window.localStorage.setItem('round', JSON.stringify(this.props.round))
  }

  handleClick () {
    const {round, dispatch, history, players} = this.props
    dispatch(nextPlayer(this.state, round.currentPlayer, round.remainingPlayers, round.roundNumber))
    round.remainingPlayers.length === 0 ? history.push('/leaderboard') : console.log('keep playing')
    dispatch(playerScores(this.state.score, round.currentPlayer))
  }

roundNumber () {
  const {round} = this.props
  return round.remainingPlayers.length === 0 ? round.roundNumber++ : round.roundNumber
}

  // form field 
  handleChange (evt) {
    this.setState({
      score: Number(evt.target.value),
      id: this.props.round.currentPlayer.id
    })
  }

  render () {
    const {currentPlayer} = this.props.round
    const {game} = this.props
    return (
      <div>
        <h1>Round {game.length +1}</h1>
        {currentPlayer && <h2>{currentPlayer.name}</h2>}
        <Dictaphone />
        <input onChange={this.handleChange} type="text" />
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
    round: state.round,
    game: state.game
  }
}

export default connect(mapStateToProps)(Round)
