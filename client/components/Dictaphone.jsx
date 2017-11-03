import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'

import {getVideos} from '../actions/videos'
import {connect} from 'react-redux'
import Video from './Video'
const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

// function stopSubmit () {
//   this.props.stopListening

// }
var actual = "Great job, keep it up"

function straightLace (stopListening, transcript) {
  stopListening()
  console.log(transcript, actual)
  if (transcript.toLowerCase() === actual.toLowerCase()) {
    console.log("Correct!")
  } else {
    console.log("That's not it.")
  }
}


class Dictaphone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomVid: null
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.state.randomVid) this.setState({ randomVid: nextProps.videos[Math.floor(Math.random() * nextProps.videos.length)]})
  }
  componentDidMount() {
    this.props.dispatch(getVideos())
  }
  render() {
    const { transcript, startListening, stopListening, browserSupportsSpeechRecognition } = this.props
    console.log(this.props)
    function compareText () {
      stopListening()
      var points = 0
      transcript.toLowerCase().split(' ').forEach((char, idx, transcriptArr) => {
        const actualArr = actual.toLowerCase().split(' ') 
        console.log(actualArr, transcriptArr)
        if (actualArr.find(actualChar => actualChar == char)) points++
      })
      if (transcript.toLowerCase() === actual.toLowerCase()) {
        console.log("Correct!")
        points = points*2
      } else {
        console.log("That's not it.")
      }
      console.log(points)
    }
    if (!browserSupportsSpeechRecognition) {
      return null
    }
    const {randomVid} =  this.state
    console.log(randomVid)
    return (
      <div>
        <button onClick={startListening}>Speak</button>
        <button onClick={straightLace.bind(null, stopListening, transcript)}>Stop/Submit</button>
        <br/>
        <input type="text" value={transcript} id="speech-field"/>
        <br/>
        {randomVid && <p>{randomVid.quote}</p>}
        {randomVid && <Video videoId={randomVid.vid_url} />}
      </div>
    )
  }
}

Dictaphone.propTypes = propTypes

const options = {
  autoStart: false
}

const mapStateToProps = ({videos}) => {
  return {
    videos
  }
}

export default connect(mapStateToProps)(SpeechRecognition(options)(Dictaphone))
