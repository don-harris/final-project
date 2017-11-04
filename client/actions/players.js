// import { showError } from './error-message'

export const ADD_PLAYERS = 'ADD_PLAYERS'
export const CALC_PLAYER_TOTAL = 'CALC_PLAYER_TOTAL'

export const addAllPlayers = (players) => {
  return {
    type: 'ADD_PLAYERS',
    players: players
  }
}

export const calcPlayerTotal = (game) => {
  return {
    type: 'CALC_PLAYER_TOTAL',
    game: game
  }
}


function sumTotal(game) {
  return game.reduce((totalExpense, round) => {
    return totalExpense + parseFloat(expense.amount)
  }, 0)
}

function calcPlayerTotals (game) {
  game.forEach(function(round) {
    round.playerScores.forEach(function(score) {
      console.log(score)
    })
  })
}

// export function addAllPlayersAsync (players) {
//   return dispatch => {
//     addAllPlayers(players)

//     // .catch(err => {
//     //   dispatch(showError(err.message))
//     // })
//   }
// }
