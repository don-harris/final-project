import {START_ROUND, END_PLAYER_TURN} from '../actions/rounds.js'

const getRoundsFromLocalStorage = () => {
  const rounds = window.localStorage.getItem('rounds')
  return rounds ? JSON.parse(rounds) : []
}

export default function rounds (state = getRoundsFromLocalStorage(), action) {
  // console.log('This is action: ', action.remainingPlayers)
  switch (action.type) {
    case START_ROUND:
      return [...state,
        {
          roundNumber: action.roundNumber,
          playerScores: [],
          videosPlayed: [],
          currentPlayer: action.currentPlayer,
          remainingPlayers: action.remainingPlayers
        }
      ]
    case END_PLAYER_TURN:
      return [...state,
        {
          roundNumber: state.roundNumber,
          playerScores: [...state.playerScore, action.playerScore],
          videosPlayed: [...state.videosPlayed, action.videosPlayed],
          currentPlayer: state.remainingPlayers[0],
          remainingPlayers: state.remainingPlayers.slice(1)
        }
      ]
    default:
      return state
  }
}

//       const remainingPlayers = action.players.filter(player => player.name !== currentPlayer.name)
