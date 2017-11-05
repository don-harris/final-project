import React from 'react'
import YouTube from 'react-youtube'
import {startRound} from '../actions/round'
import { connect } from 'react-redux'

class Video extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      video: null,
      vidurl: '',
      startTime: 0,
      quoteStart: 0,
      quoteEnd: 0,
      pauseTime: 0
    }
    this.startClip = this.startClip.bind(this)
    this.muteClip = this.muteClip.bind(this)
    this.pauseClip = this.pauseClip.bind(this)
    this.restartClip = this.restartClip.bind(this)
    this.endVideo = this.endVideo.bind(this)
  }

  componentWillMount () {
    const { randomVid } = this.props
    const currentPlayer = this.props.players[0]
    const remainingPlayers = this.props.players.slice(1)
    const currentVideo = this.props.videos[0].vid_url
    const remainingVideos = this.props.videos.slice(1)
    
    this.props.dispatch(startRound(currentPlayer, remainingPlayers, currentVideo, remainingVideos))
    window.localStorage.setItem('round', JSON.stringify(this.props.round))
    console.log('this should be all vids: ', this.props.videos)
    this.setState({
      vidurl: randomVid.vid_url,
      startTime: randomVid.startTime,
      quoteStart: randomVid.quoteStart,
      quoteEnd: randomVid.quoteEnd,
      pauseTime: randomVid.pauseTime
    })
  }

  startClip (event) {
    console.log('randomVid: ', this.props.randomVid.vid_url)
    console.log('this is currentVid: ', this.props.round)
    this.setState({
      video: event.target
    })
    event.target.seekTo(this.state.startTime)
    event.target.playVideo()
    setTimeout(() => this.muteClip(), (this.state.quoteStart - this.state.startTime) * 1000)
  }

  muteClip () {
    this.state.video.mute()
    setTimeout(() => this.pauseClip(), (this.state.quoteEnd - this.state.quoteStart) * 1000)
  }
  pauseClip () {
    this.state.video.pauseVideo()
    setTimeout(() => this.restartClip(), this.state.pauseTime * 1000)
  }
  restartClip () {
    this.state.video.seekTo(this.state.quoteStart)
    this.state.video.unMute()
    setTimeout(() => this.endVideo(), 500)
  }
  endVideo () {
    this.state.video.playVideo()
    setTimeout(() => this.state.video.pauseVideo(), (this.state.quoteEnd - this.state.quoteStart) * 1000)
  }

  render () {
    const opts = {
      height: '390',
      width: '640'
    }
    return (
      <div>

        <YouTube videoId={this.state.vidurl} opts={opts} onReady={this.startClip} />

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.players,
    round: state.round,
    videos: state.videos,
    game: state.game
  }
}

export default connect(mapStateToProps)(Video)
