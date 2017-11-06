import React, {PropTypes, Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'
import {setPlayerScores} from '../actions/playerScores'

import {connect} from 'react-redux'
const propTypes = {
  transcript: PropTypes.string,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class Dictaphone extends Component {
  constructor (props) {
    super(props)
    this.state = {
      continueIsVisible: false,
      points: null
    }
    this.dispatchScore = this.dispatchScore.bind(this)
  }

  componentDidMount () {
    this.setState({continueIsVisible: false})
  }

  dispatchScore (points) {
    console.log('playerScores points: ', points)
    this.props.dispatch(setPlayerScores(points, this.props.round.currentPlayer))
  }
  submit (resetTranscript, stopListening) {
    stopListening()
    resetTranscript()
    this.props.handleClick()
  }
  render () {
    const {transcript, startListening, stopListening, resetTranscript, browserSupportsSpeechRecognition, randomVid, dispatch, round, playerScores} = this.props
    function compareText () {
      this.setState({
        continueIsVisible: true
      })
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
        dispatch(setPlayerScores(points, round.currentPlayer))
        return points
      } else {
        console.log('Not quite...')
        points = Math.round((points / actualArr.length) * 10)
        console.log('points: ' + points)
        dispatch(setPlayerScores(points, round.currentPlayer))
        return points
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
        {playerScores.length > 0 && <p>Score: {playerScores[playerScores.length - 1].score}</p>}
        <br/>
        {this.state.continueIsVisible && <button id="next" className="button is large" onClick={() => this.submit(resetTranscript, stopListening)}>Continue</button>}
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
    game: state.game,
    playerScores: state.playerScores
  }
}

export default connect(mapStateToProps)(SpeechRecognition(options)(Dictaphone))
