import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { endRound, resetGame } from '../actions/round'

class Leaderboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
    this.endGame = this.endGame.bind(this)
    this.calcTotal = this.calcTotal.bind(this)
  }

  componentDidMount () {
    const { dispatch, round } = this.props
    dispatch(endRound(round))
  }

  handleClick () {
    const { game, history } = this.props
    game.length < 3 ? history.push('/round') : this.endGame()
  }

  endGame () {
    const { dispatch, history } = this.props
    dispatch(resetGame())
    history.push('/')
  }

calcTotal (rounds) {
    console.log('This is rounds.length',rounds.length)
    const total = rounds.reduce((accumulator, ) => {
      accumulator + currentValue;
    });
    if(rounds.length === 3) {
      return rounds[0] + rounds[1] + rounds[2]
    } else if (rounds.length === 2) {
      return rounds[0] + rounds[1]
    } else {
      return rounds[0];
    }
    console.log(total);
  }

  // sumTotal (rounds) {
  //   console.log('This is rounds: ',rounds)
  //   const sum = rounds.reduce((totalScore, round) => {
  //     return totalScore + parseFloat(round.score)
  //   }, 0)
  //   console.log(sum)
  //   return sum
  // }

  render () {
    return <div className="container">
        <h1 className="leadertitle title is-1">And the Oscar goes to...</h1>
        <table className="table is-bordered is-fullwidth is-striped">
          <thead className="thead">
            <tr className="tr">
              <th className="th has-text-centered">Position</th>
              <th className="th has-text-centered">Icon</th>
              <th className="th has-text-centered">Player Name</th>
              <th className="th has-text-centered">Round 1</th>
              <th className="th has-text-centered">Round 2</th>
              <th className="th has-text-centered">Round 3</th>
              <th className="th has-text-centered">Total</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {this.props.players.map(player => {
              return <tr className="tr" key={player.id}>
                  <th className="th has-text-centered">{player.id}st</th>
                  <th className="th has-text-centered">
                    <img src={player.icon} />
                  </th>
                  <th className="th has-text-centered">{player.name} </th>
                  <th className="th has-text-centered">
                    {player.rounds[0]}
                  </th>
                  <th className="th has-text-centered">
                    {player.rounds[1]}
                  </th>
                  <th className="th has-text-centered">
                    {player.rounds[2]}
                  </th>
                  <th className="th has-text-centered">
                    {this.calcTotal(player.rounds)}
                  </th>
                </tr>;
            })}
          </tbody>
        </table>
        <hr />
        <button className="button is large" onClick={this.handleClick}>
          Play it again Sam
        </button>
      </div>;
  }
}

function mapStateToProps (state) {
  return {
    players: makeLeaderBoard(state.playerScores),
    round: state.round,
    game: state.game
  }
}

function makeLeaderBoard (scores) {
  const players = []
  scores.forEach(score => {
    const foundPlayer = players.find(player => player.id === score.id)
    if (foundPlayer) {
      foundPlayer.rounds.push(score.score)
    } else {
      const playerEdit = Object.assign({}, foundPlayer)
      playerEdit.id = score.id
      playerEdit.name = score.name
      playerEdit.icon = score.icon
      playerEdit.rounds = [score.score]
      return players.push(playerEdit)
    }
  })
  console.log('this is players: ', players)
  return players
}

export default connect(mapStateToProps)(Leaderboard)
