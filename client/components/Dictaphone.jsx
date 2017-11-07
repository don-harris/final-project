import React, {PropTypes, Component} from 'react'
import SpeechRecognition from 'react-speech-recognition'
import {setPlayerScores} from '../actions/playerScores'
import Sound from 'react-sound'

import {connect} from 'react-redux'
const propTypes = {
  transcript: PropTypes.string,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

const perfectScore = {url: '/sounds/applausesound.mp3', start: 0}
const above50 = {url: '/sounds/Applause.mp3', start: 0}
const below50 = {url: '/sounds/WrongBuzzer.mp3', start: 0}
const flunked = {url: '/sounds/FailHorn.mp3', start: 0}

class Dictaphone extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scoreVisible: false,
      playerHasSubmitted: false,
      points: null,
      response: {}
    }
    this.compareText = this.compareText.bind(this)
    this.playerSubmit = this.playerSubmit.bind(this)
    this.checkScore = this.checkScore.bind(this)
  }

  componentDidMount () {
    this.setState({playerHasSubmitted: false})
  }

  submit (resetTranscript, stopListening) {
    stopListening()
    resetTranscript()
    this.props.handleClick()
  }

  reworking (points) { // used for minusing points, but not reaching below 0
    if (points < 0) {
      let reworkedPoints = 1 // 1 point (because they still go something right)
      return reworkedPoints
    } else {
      let reworkedPoints = points
      return reworkedPoints
    }
  }

  playerSubmit () {
    this.setState({playerHasSubmitted: true})
  }

  checkScore (points) {
    if (points === 20) {
      this.setState({response: perfectScore})
    } else if (points === 0) {
      this.setState({response: flunked})
    } else if (points > 5) {
      this.setState({response: above50})
    } else {
      this.setState({response: below50})
    }
  }

  compareText () {
    const {transcript, stopListening, randomVid, dispatch, round} = this.props
    setTimeout(() => this.playerSubmit(), 3000)
    this.setState({scoreVisible: true})
    stopListening()
    var points = 0
    var actual = randomVid.quote
    const actualArr = actual.toLowerCase().split(' ')
    let transArr = transcript.toLowerCase().split(' ')
    transArr.forEach((char, idx, transcriptArr) => {
      if (actualArr.find(actualChar => actualChar === char)) points++
    })
    if (transcript.toLowerCase() === actual.toLowerCase()) {
      points = 20 // maybe just keep as 10, without double points
      dispatch(setPlayerScores(points, round.currentPlayer))
      return points
    } else if (transArr.length > actualArr.length) {
      let adjustedPoints = (points - (transArr.length - actualArr.length))
      let percentagePoints = Math.round((adjustedPoints / actualArr.length) * 10)
      points = this.reworking(percentagePoints)
      dispatch(setPlayerScores(points, round.currentPlayer))
      return points
    } else {
      points = Math.round((points / actualArr.length) * 10)
      dispatch(setPlayerScores(points, round.currentPlayer))
      this.checkScore(points)
      return points
    }
  }
  render () {
    const {transcript, startListening, stopListening, resetTranscript, browserSupportsSpeechRecognition, playerScores} = this.props
    if (!browserSupportsSpeechRecognition) {
      return null
    }
    return <div>
      <button className="button" onClick={startListening}>
          Speak
      </button>
      <button className="button" onClick={this.compareText.bind(null, stopListening, transcript)}>
          Stop/Submit
      </button>
      <br />
      <input type="text" value={transcript} id="speech-field" />
      {this.state.scoreVisible && playerScores.length > 0 && <p>
            Score: {playerScores[playerScores.length - 1].score}
      </p>}
      <br />
      {this.state.playerHasSubmitted && <button id="next" className="button is-large is-danger" onClick={() => this.submit(resetTranscript, stopListening)}>
            Continue
      </button>}
      {this.state.playerHasSubmitted && <Sound url={this.state.response.url} playStatus={Sound.status.PLAYING} playFromPosition={this.state.response.start}/>}
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
