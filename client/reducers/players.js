import { ADD_PLAYERS } from '../actions/players.js'

const getPlayersFromLocalStorage = () => {
  const players = window.localStorage.getItem('players')
  return players ? JSON.parse(players) : []
}

export default function players (state = getPlayersFromLocalStorage(), action) {
  switch (action.type) {
    case ADD_PLAYERS:
      return action.players
    default:
      return state
  }
}

// case ADD_PLAYER_SCORE:
//   console.log('This is action for ADD_PLAYER_SCORE: ', action)
//   return {
//     id: action.id,
//     icon: action.icon,
//     name: action.name,
//     totalScore: getTotalScore(state.totalScore, action.score)
//   }
