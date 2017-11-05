import React, {PropTypes, Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'
import { playerScores } from '../actions/playerScores'

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
      points: null
    }
    this.dispatchScore = this.dispatchScore.bind(this)
  }

  dispatchScore (points) {
    console.log('playerScores points: ', points)
    this.props.dispatch(playerScores(points, this.props.round.currentPlayer))
  }

  render () {
    const {transcript, startListening, stopListening, browserSupportsSpeechRecognition, randomVid, dispatch, round} = this.props
    // console.log('this.props',this.props)
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
        points = 20 // maybe just keep as 10, without double points
        console.log('points: ' + points)
        dispatch(playerScores(points, round.currentPlayer))
      } else {
        console.log('Not quite...')
        points = Math.round((points / actualArr.length) * 10)
        console.log('points: ' + points)
        dispatch(playerScores(points, round.currentPlayer))
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

const mapStateToProps = state => {
  return {
    players: state.players,
    round: state.round,
    videos: state.videos,
    game: state.game
  }
}

export default connect(mapStateToProps)(SpeechRecognition(options)(Dictaphone))
