import React from 'react'
import YouTube from 'react-youtube'

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
    const { randomVid, subscribe } = this.props
    subscribe(this.restartClip)
    this.setState({
      vidurl: randomVid.vid_url,
      startTime: randomVid.startTime,
      quoteStart: randomVid.quoteStart,
      quoteEnd: randomVid.quoteEnd,
      pauseTime: randomVid.pauseTime
    })
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
      width: '640',
      playerVars: {
        rel: 0,
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        iv_load_policy: 3
      }
    }
    return (
      <div>

        <YouTube videoId={this.state.vidurl} opts={opts} onReady={this.startClip} />

      </div>
    )
  }
}

export default Video
