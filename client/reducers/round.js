import {START_ROUND, NEXT_PLAYER} from '../actions/round.js'

const getRoundFromLocalStorage = () => {
  const round = window.localStorage.getItem('round')
  return round ? JSON.parse(round) : {}
}

export default function round (state = getRoundFromLocalStorage(), action) {
  switch (action.type) {
    case START_ROUND:
      return {
        roundNumber: action.roundNumber,
        playerScores: [],
        currentPlayer: action.currentPlayer,
        remainingPlayers: action.remainingPlayers,
        currentVideo: action.currentVideo,
        remainingVideos: action.remainingVideos
      }

    case NEXT_PLAYER:
      return {
        roundNumber: action.roundNumber,
        playerScores: [...state.playerScores, action.playerScore],
        currentPlayer: action.currentPlayer,
        remainingPlayers: action.remainingPlayers,
        currentVideo: action.currentVideo,
        remainingVideos: action.remainingVideos
      }
    default:
      return state
  }
}
