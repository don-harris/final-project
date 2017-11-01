// import { showError } from './error-message'

export const ADD_PLAYERS = 'ADD_PLAYERS'

export const addAllPlayers = (players) => {
  console.log(players)
  return {
    type: ADD_PLAYERS,
    players: players
  }
}

// export function addAllPlayersAsync (players) {
//   return dispatch => {
//     addAllPlayers(players)

//     // .catch(err => {
//     //   dispatch(showError(err.message))
//     // })
//   }
// }
