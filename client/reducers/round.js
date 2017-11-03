import {START_ROUND, NEXT_PLAYER} from '../actions/round.js'

const getRoundsFromLocalStorage = () => {
  const round = window.localStorage.getItem('round')
  return round ? JSON.parse(round) : {}
}

export default function rounds (state = getRoundsFromLocalStorage(), action) {
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

//       const remainingPlayers = action.players.filter(player => player.name !== currentPlayer.name)

//  roundNumber: state[state.length - 1].roundNumber,
//       playerScores: [...state[state.length - 1].playerScore, action.playerScore],
//       videosPlayed: [...state[state.length - 1].videosPlayed, action.videosPlayed],
//       currentPlayer: state[state.length - 1].remainingPlayers[0],
//       remainingPlayers: state[state.length - 1].remainingPlayers.slice(1)
