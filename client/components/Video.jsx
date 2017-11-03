// this component will be rendered inside the round component :)
// will need to take video info from the database. Send a GET request on mount?

import React from 'react'
import YouTube from 'react-youtube'

class Video extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      video: null,
      startTime: 99,
      quoteStart: 129,
      quoteEnd: 132,
      pauseTime: 5
    }
    this.startClip = this.startClip.bind(this)
    this.muteClip = this.muteClip.bind(this)
    this.pauseClip = this.pauseClip.bind(this)
    this.restartClip = this.restartClip.bind(this)
    this.endVideo = this.endVideo.bind(this)
  }

  startClip (event) {
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

        <YouTube videoId={this.props.videoId} opts={opts} onReady={this.startClip} />

      </div>
    )
  }
}

export default Video
