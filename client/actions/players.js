// import { showError } from './error-message'

export const ADD_PLAYERS = 'ADD_PLAYERS'
export const ADD_PLAYER_SCORE = 'ADD_PLAYER_SCORE'

export const addAllPlayers = (players) => {
  return {
    type: 'ADD_PLAYERS',
    players: players
  }
}