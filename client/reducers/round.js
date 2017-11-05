import {START_ROUND, NEXT_PLAYER} from '../actions/round.js'

const getRoundFromLocalStorage = () => {
  const round = window.localStorage.getItem('round')
  return round ? JSON.parse(round) : {videosPlayed: []}
}

export default function round (state = getRoundFromLocalStorage(), action) {
  switch (action.type) {
    case 'INIT':
      return {
        videosPlayed: []
      }
    case START_ROUND:
      return {
        roundNumber: action.roundNumber,
        playerScores: [],
        videosPlayed: [...state.videosPlayed] ,
        currentPlayer: action.currentPlayer,
        remainingPlayers: action.remainingPlayers
      }
    case NEXT_PLAYER:
      return {
        roundNumber: action.roundNumber,
        playerScores: [...state.playerScores, action.playerScore],
        videosPlayed: [...state.videosPlayed, action.videosPlayed],
        currentPlayer: action.currentPlayer,
        remainingPlayers: action.remainingPlayers
      }
    default:
      return state
  }
}
