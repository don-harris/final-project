export const GET_CURRENT_PLAYER = 'GET_CURRENT_PLAYER'

export const getCurrentPlayer = (players) => {
  return {
    type: GET_CURRENT_PLAYER,
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