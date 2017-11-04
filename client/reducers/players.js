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