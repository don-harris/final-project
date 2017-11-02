import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { startRound, endPlayerTurn } from '../actions/rounds'
import Dictaphone from './Dictaphone'

class Round extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  componentWillMount () {
    console.log(this.props)
    const currentPlayer = this.props.players[0]
    const remainingPlayers = this.props.players.slice(1)
    this.props.dispatch(startRound(currentPlayer, remainingPlayers))
    window.localStorage.setItem('rounds', JSON.stringify(this.props.rounds))
  }

  render () {
    console.log('This is props: ', this.props)
    const {rounds} = this.props
    const currentPlayer = rounds.length > 0 ? rounds[rounds.length - 1].currentPlayer : {name: 'Loading'}
    return (
      <div>
        <h1>Round Page</h1>
        <h2>{currentPlayer.name}</h2>
        <Dictaphone />
        <Link to="/leaderboard">
          <button id="next" className="button is large" onClick={this.props.dispatch(endPlayerTurn())}>
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
