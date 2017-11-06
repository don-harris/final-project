import React from 'react'
import YouTube from 'react-youtube'
import ReactCountdownClock from 'react-countdown-clock'

class Video extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      countdownIsVisible: false,
      video: null,
      vidurl: '',
      startTime: 0,
      quoteStart: 0,
      quoteEnd: 0,
      pauseTime: 0,
      timeLeft: 3
    }
    this.startClip = this.startClip.bind(this)
    this.muteClip = this.muteClip.bind(this)
    this.pauseClip = this.pauseClip.bind(this)
    this.restartClip = this.restartClip.bind(this)
    this.endVideo = this.endVideo.bind(this)
    this.hideCountdown = this.hideCountdown.bind(this)
  }

  componentWillMount () {
    const { randomVid } = this.props
    console.log('test: ', randomVid)
    this.setState({
      speakPromptIsVisible: false,
      countdownIsVisible: false,
      vidurl: randomVid.vid_url,
      startTime: randomVid.startTime,
      quoteStart: randomVid.quoteStart,
      quoteEnd: randomVid.quoteEnd,
      pauseTime: randomVid.pauseTime
    })
  }

  startClip (event) {
    console.log('randomVid: ', this.props.randomVid.vid_url)
    this.setState({
      video: event.target
    })
    event.target.seekTo(this.state.startTime)
    event.target.playVideo()
    setTimeout(() => this.muteClip(), (this.state.quoteStart - this.state.startTime) * 1000)
  }

  hideCountdown () {
    this.setState({countdownIsVisible: false})
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
    console.log(this.state.countdownIsVisible)
    this.state.video.pauseVideo()
    setTimeout(() => this.restartClip(), this.state.pauseTime * 1000)
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
        <div className="countdown title has-text-centered">
          {this.state.countdownIsVisible && <ReactCountdownClock seconds={this.state.quoteEnd - this.state.quoteStart}
            color="#DC143C"
            size={100} />}
        </div>
        <YouTube videoId={this.state.vidurl} opts={opts} onReady={this.startClip} />
        <hr/>
        {this.state.speakPromptIsVisible && <h2>Please Speak into the microphone</h2>}
      </div>
    )
  }
}

export default Video

// < CountdownTimer endDate= { moment().startOf('second').fromNow() } />
