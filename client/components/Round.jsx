import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRound, nextPlayer} from '../actions/round'
import Dictaphone from './Dictaphone'
import {getVideos} from '../actions/videos'
import Video from './Video'

class Round extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: 10,
      video: 'funny cat',
      id: 1,
      randomVid: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentWillMount () {
    const currentPlayer = this.props.players[0]
    const remainingPlayers = this.props.players.slice(1)
    this.props.dispatch(startRound(currentPlayer, remainingPlayers))
    window.localStorage.setItem('round', JSON.stringify(this.props.round))
    this.props.dispatch(getVideos())
  }
  componentWillReceiveProps (nextProps) {
    if (!this.state.randomVid) this.setState({ randomVid: nextProps.videos[Math.floor(Math.random() * nextProps.videos.length)] })
  }
  handleClick () {
    const {round} = this.props
    this.props.dispatch(nextPlayer(this.state, round.currentPlayer, round.remainingPlayers, round.roundNumber))
    round.remainingPlayers.length === 0 ? this.props.history.push('/leaderboard') : console.log('keep playing')
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
    const {randomVid} = this.state
    // console.log('quote from database = ', randomVid.quote)
    return (
      <div>
        <h1>Round Page</h1>
        {currentPlayer && <h2>{currentPlayer.name}</h2>}
        {randomVid && <Video randomVid={randomVid} />}
        <Dictaphone randomVid={randomVid}/>
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
    videos: state.videos
  }
}

export default connect(mapStateToProps)(Round)
