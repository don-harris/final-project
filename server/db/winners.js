const defaultConn = require('./connection')

const getAllWinners = (testConn) => {
  const db = testConn || defaultConn
  return db('winners')
    .select()
}

const addWinner = (winner, testConn) => {
  const db = testConn || defaultConn
  return db ('winners')
    .insert({
      name: winner.name,
      icon: winner.icon,
      score: winner.score
    })
}

module.exports = {
  getAllWinners,
  addWinner
}