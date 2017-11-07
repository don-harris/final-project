import React, { PropTypes, Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRound, nextPlayer} from '../actions/round'
import {playerScores} from '../actions/playerScores'
import Dictaphone from './Dictaphone'
import Video from './Video'
import Header from './Header'
import {getVideos} from '../actions/videos'
import {nextVideo} from '../actions/videoChanger'
import SpeechRecognition from 'react-speech-recognition'

class Round extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: null,
      video: 'funny cat',
      id: 1,
      randomVid: null,
      disableButton: false
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
    if (!this.state.randomVid) this.randomiseVideo(nextProps)
  }
  randomiseVideo(nextProps) {
    const props = nextProps || this.props
    console.log("randomising video", props.videos, props.round.videosPlayed)
    if (this.state.randomVid) props.round.videosPlayed.push(this.state.randomVid)
    const videosRemaining = props.videos.filter(video => !props.round.videosPlayed.find(played => played.id == video.id))
    console.log({videosRemaining})
      this.setState({ randomVid: videosRemaining[Math.floor(Math.random() * videosRemaining.length)], disableButton: true })
    setTimeout(() => this.setState({disableButton: false}), 1000)
  }
  handleClick () {
    const {round, dispatch, history, playerScores, videos} = this.props
    const currentVideo = this.state.randomVid
    const remainingVideos = videos
    dispatch(nextVideo(currentVideo, remainingVideos))
    dispatch(nextPlayer(this.state, round.currentPlayer, round.remainingPlayers, round.roundNumber))
    round.remainingPlayers.length === 0 ? history.push('/leaderboard') : this.randomiseVideo()
    // dispatch(playerScores(this.state.score, round.currentPlayer))
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
    const {randomVid, disableButton} = this.state
    console.log(this.props.startListening, this.state.randomVid)
    // console.log('quote from database = ', randomVid.quote)
    return (
      <div>
        <Header/>
        {currentPlayer && <img src={currentPlayer.icon}/>}
        {currentPlayer && <h2>{currentPlayer.name}</h2>}
        {
          !disableButton && <div>
            {randomVid && <Video randomVid={randomVid} startListening={this.props.startListening}/>}
            <Dictaphone randomVid={randomVid} handleClick={this.handleClick}/>
          </div>
        }
        {/* <input onChange={this.handleChange} type="text" /> */}
      </div>
    )
  }
}

const options = {
  autoStart: false
}

const mapStateToProps = state => {
  return {
    players: state.players,
    round: state.round,
    videos: state.videos,
    game: state.game,
    playerScores: state.playerScores,
    currentVideo: state.currentVideo,
    remainingVideos: state.remainingVideos
  }
}

export default connect(mapStateToProps)(SpeechRecognition(options)(Round))
