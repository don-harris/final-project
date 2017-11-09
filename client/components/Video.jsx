import React from 'react'
import YouTube from 'react-youtube'
import ReactCountdownClock from 'react-countdown-clock'

import Dictaphone from './Dictaphone'

class Video extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playerCanSpeak: false,
      countdownIsVisible: false,
      video: null,
      vidurl: '',
      startTime: 0,
      quoteStart: 0,
      quoteEnd: 0,
      pauseTime: 0,
      timeLeft: 3
    }
    this.saveVideo = this.saveVideo.bind(this)
    this.startClip = this.startClip.bind(this)
    this.muteClip = this.muteClip.bind(this)
    this.pauseClip = this.pauseClip.bind(this)
    this.restartClip = this.restartClip.bind(this)
    this.endVideo = this.endVideo.bind(this)
    this.hideCountdown = this.hideCountdown.bind(this)
    this.hideStart = this.hideStart.bind(this)
  }

  componentWillMount () {
    const { randomVid } = this.props
    console.log('test: ', randomVid)
    this.setState({
      playerCanSpeak: false,
      startVisible: true,
      speakPromptIsVisible: false,
      countdownIsVisible: false,
      vidurl: randomVid.vid_url,
      startTime: randomVid.startTime,
      quoteStart: randomVid.quoteStart,
      quoteEnd: randomVid.quoteEnd,
      pauseTime: randomVid.pauseTime
    })
  }

  saveVideo (e) {
    this.setState({
      video: e.target
    })
  }

  startClip () {
    this.hideStart()
    const {video, quoteStart, startTime} = this.state
    video.seekTo(startTime)
    video.playVideo()
    setTimeout(() => this.muteClip(), (quoteStart - startTime) * 1000)
  }
  hideStart () {
    this.setState({startVisible: false})
  }

  hideCountdown () {
    this.setState({countdownIsVisible: false, playerCanSpeak: true})
  }
  hideSpeakPrompt () {
    this.setState({speakPromptIsVisible: false})
  }
  muteClip () {
    this.state.video.mute()
    setTimeout(() => this.pauseClip(), (this.state.quoteEnd - this.state.quoteStart) * 1000)
    this.setState({ countdownIsVisible: true })
  }
  pauseClip () {
    this.hideCountdown()
    this.setState({ speakPromptIsVisible: true })
    this.state.video.pauseVideo()
  }
  restartClip () {
    this.state.video.seekTo(this.state.quoteStart)
    this.state.video.unMute()
    setTimeout(() => this.endVideo(), 500)
    this.hideSpeakPrompt()
  }
  endVideo () {
    this.state.video.playVideo()
    setTimeout(() => this.state.video.pauseVideo(), (this.state.quoteEnd - this.state.quoteStart) * 1000)
  }

  render () {
    const opts = {
      height: '720',
      width: '1280',
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
        <div className="countdown title has-text-centered">
          {this.state.countdownIsVisible && <ReactCountdownClock seconds={this.state.quoteEnd - this.state.quoteStart}
            color="#DC143C"
            size={100} />}
        </div>
        <div className="disableClick">
          <YouTube videoId={this.state.vidurl} opts={opts} onReady={this.saveVideo} />
        </div>
        <br/>
        {this.state.startVisible && <button className="button is-large is-danger" onClick={this.startClip}>Start</button>}
        {this.state.speakPromptIsVisible && <h2 className="subtitle is-4">Please speak clearly into the microphone</h2>}
        <Dictaphone restartClip={this.restartClip} randomVid={this.props.randomVid} handleClick={this.props.handleClick} startVisible={this.state.startVisible} playerCanSpeak={this.state.playerCanSpeak}/>
      </div>
    )
  }
}

export default Video

// < CountdownTimer endDate= { moment().startOf('second').fromNow() } />
