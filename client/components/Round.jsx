import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startRound, nextPlayer} from '../actions/round'
import Video from './Video'
import Header from './Header'
import {getVideos} from '../actions/videos'
import {getMemes} from '../actions/memes'
import {nextVideo} from '../actions/videoChanger'

class Round extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      score: null,
      video: 'funny cat',
      id: 1,
      randomVid: null,
      disableButton: true
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount () {
    const currentPlayer = this.props.players[0]
    const remainingPlayers = this.props.players.slice(1)
    this.props.dispatch(startRound(currentPlayer, remainingPlayers))
    window.localStorage.setItem('round', JSON.stringify(this.props.round))
    this.props.memes === true ? this.props.dispatch(getMemes()) : this.props.dispatch(getVideos())
  }
  componentWillReceiveProps (nextProps) {
    if (!this.state.randomVid) this.randomiseVideo(nextProps)
  }
  randomiseVideo (nextProps) {
    const props = nextProps || this.props
    if (this.state.randomVid) props.round.videosPlayed.push(this.state.randomVid)
    const videosRemaining = props.videos.filter(video => !props.round.videosPlayed.find(played => played.id === video.id))
    this.setState({ randomVid: videosRemaining[Math.floor(Math.random() * videosRemaining.length)], disableButton: true })
    setTimeout(() => this.setState({disableButton: false}), 1000)
  }
  handleClick () {
    const {round, dispatch, history, videos} = this.props
    const currentVideo = this.state.randomVid
    const remainingVideos = videos
    dispatch(nextVideo(currentVideo, remainingVideos))
    dispatch(nextPlayer(this.state, round.currentPlayer, round.remainingPlayers, round.roundNumber))
    round.remainingPlayers.length === 0 ? history.push('/leaderboard') : this.randomiseVideo()
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
    return (
      <div className="curtains">
        <img src="/images/curtains-left.png" className="curtain-left"/>
        <img src="/images/curtains-right.png" className="curtain-right"/>
        <div>
          <Header/>
          <br/>
          <br/>
          {currentPlayer && <img src={currentPlayer.icon}/>}
          <br/>
          Starring: {currentPlayer && <h2 className="title">{currentPlayer.name}</h2>}
          {
            !disableButton && <div>
              {randomVid && <Video randomVid={randomVid} handleClick={this.handleClick}/>}
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    memes: state.memes,
    players: state.players,
    round: state.round,
    videos: state.videos,
    game: state.game,
    currentVideo: state.currentVideo,
    remainingVideos: state.remainingVideos
  }
}

export default connect(mapStateToProps)(Round)
