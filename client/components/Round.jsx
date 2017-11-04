import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { startRound, nextPlayer } from '../actions/round'
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
  }
  componentWillMount () {
    const currentPlayer = this.props.players[0]
    const remainingPlayers = this.props.players.slice(1)
    this.props.dispatch(startRound(currentPlayer, remainingPlayers))
    window.localStorage.setItem('round', JSON.stringify(this.props.round))
  }

  handleClick () {
    const {round} = this.props
    this.props.dispatch(nextPlayer(this.state, round.currentPlayer, round.remainingPlayers, round.roundNumber))
    round.remainingPlayers.length === 0 ? this.props.history.push('/leaderboard') : console.log('round not done')
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
    return (
      <div>
        <h1>Round Page</h1>
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
