import React, {PropTypes, Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'
import {setPlayerScores} from '../actions/playerScores'

import {connect} from 'react-redux'
const propTypes = {
  transcript: PropTypes.string,
  stopListening: PropTypes.func,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class Dictaphone extends Component {
  constructor (props) {
    super(props)
    this.state = {
      playerHasSubmitted: false,
      points: null
    }
    this.compareText = this.compareText.bind(this)
  }

  componentDidMount () {
    this.setState({
      playerHasSubmitted: false
    })
  }

  submit (resetTranscript, stopListening) {
    stopListening()
    resetTranscript()
    this.props.handleClick()
  }
  compareText () {
    const {transcript, stopListening, randomVid, dispatch, round} = this.props
    this.setState({
      playerHasSubmitted: true
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
  render () {
    const {transcript, stopListening, resetTranscript, browserSupportsSpeechRecognition, playerScores} = this.props
    if (!browserSupportsSpeechRecognition) {
      return null
    }
    return <div>
      {/* <button className="button" onClick={startListening}>
          Speak
      </button> */}
      <button className="button" onClick={this.compareText.bind(null, stopListening, transcript)}>
          Stop/Submit
      </button>
      <br />
      <input type="text" value={transcript} id="speech-field" />
      {this.state.playerHasSubmitted && playerScores.length > 0 && <p>
            Score: {playerScores[playerScores.length - 1].score}
      </p>}
      <br />
      {this.state.playerHasSubmitted && <button id="next" className="button is-large is-danger" onClick={() => this.submit(resetTranscript, stopListening)}>
            Continue
      </button>}
    </div>
    
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
