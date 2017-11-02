import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class Dictaphone extends Component {
  render() {
    const { transcript, startListening, stopListening, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <button onClick={startListening}>Speak</button>
        <button onClick={stopListening}>Stop/Submit</button>
        <h2><span>{transcript}</span></h2>
      </div>
    )
  }
}

Dictaphone.propTypes = propTypes

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(Dictaphone)
