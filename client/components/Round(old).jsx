import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { addAllPlayers } from '../actions/rounds'
import { findCurrentPlayer } from '../actions/currentplayer'

class Round extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPlayer: {}
    }
    this.findNextPlayer = this.findNextPlayer.bind(this)
  }
  componentWillMount () {
    this.props.dispatch({ type: 'START_ROUND', roundNumber: 1 })
    this.props.dispatch(findCurrentPlayer(this.props.players))
  }
  componentWillReceiveProps (nextProps) {
    console.log('This is nextProps: ', nextProps)
    if (!this.state.currentPlayer) this.findNextPlayer(nextProps)
    // console.log(nextProps)
  }
  findNextPlayer (nextProps) {
    const props = nextProps || this.props
    const remainingPlayers = props.players.filter(player => !props.rounds.playerScores.find(score => score.playerid === player.id))
    console.log('This is remainingPlayers: ', remainingPlayers)
    const newPlayer = remainingPlayers[Math.round(Math.random() * remainingPlayers.length)]
    console.log('This is newPlayer: ', newPlayer)
    if (remainingPlayers.length === 0) {
      document.getElementById('next').click()
    }
    this.setState({ currentPlayer: newPlayer })
    this.props.dispatch(addAllPlayers(props.players))
  }

  render () {
    console.log('This is currentPlayer: ', this.props.rounds.currentPlayer)
    return (
      <div>
        <h1>Round Page</h1>
        <h2>{this.props.rounds.currentPlayer.name}</h2>
        <Link to="/leaderboard">
          <button id="next" className="button is large" onClick={this.findNextPlayer}>
            Continue
          </button>
        </Link>
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