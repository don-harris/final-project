import React, {PropTypes, Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'

import {connect} from 'react-redux'
const propTypes = {
  transcript: PropTypes.string,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class Dictaphone extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    const {transcript, startListening, stopListening, browserSupportsSpeechRecognition, randomVid} = this.props
    function compareText () {
      stopListening()
      var points = 0
      var actual = randomVid.quote
      const actualArr = actual.toLowerCase().split(' ')
      console.log('quote from database = ', actual)
      console.log('transcript = ' + transcript) // look at final transcript
      transcript.toLowerCase().split(' ').forEach((char, idx, transcriptArr) => {
        if (actualArr.find(actualChar => actualChar == char)) points++
      })
      if (transcript.toLowerCase() === actual.toLowerCase()) {
        console.log('Correct, double points!')
        points = 20
        console.log('points: ' + points)
      } else {
        console.log('Not quite...')
        let pointsPercent = Math.round((points / actualArr.length) * 10)
        console.log('points: ' + pointsPercent)
      }
    }
    if (!browserSupportsSpeechRecognition) {
      return null
    }
    return (
      <div>
        <button onClick={startListening}>Speak</button>
        <button onClick={compareText.bind(null, stopListening, transcript)}>Stop/Submit</button>
        <br/>
        <input type="text" value={transcript} id="speech-field"/>
        <br/>
        {randomVid && <p>{randomVid.quote}</p>}
      </div>
    )
  }
}

Dictaphone.propTypes = propTypes

const options = {
  autoStart: false
}

export default connect()(SpeechRecognition(options)(Dictaphone))
