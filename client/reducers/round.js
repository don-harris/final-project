import {START_ROUND, NEXT_PLAYER, NEXT_ROUND} from '../actions/round.js'

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
        videosPlayed: [],
        currentPlayer: action.currentPlayer,
        remainingPlayers: action.remainingPlayers
      }

    case NEXT_PLAYER:
      return {
        roundNumber: state.roundNumber,
        playerScores: [...state.playerScores, action.playerScore],
        videosPlayed: [...state.videosPlayed, action.videosPlayed],
        currentPlayer: action.currentPlayer,
        remainingPlayers: action.remainingPlayers
      }

      case NEXT_ROUND:
      return {
        roundNumber: action.roundNumber,
        playerScores: [state.playerScores],
        videosPlayed: [state.videosPlayed],
        currentPlayer: state.currentPlayer,
        remainingPlayers: state.remainingPlayers
      }
    default:
      return state
  }
}
