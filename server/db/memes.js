const defaultConn = require('./connection')

const getMemes = (testConn) => {
  const db = testConn || defaultConn
  return db('videos')
    .where({isMeme: 'meOhMyIHaveEnjoyedThatYesBoy'})
    .select()
}

module.exports = {
  getMemes
}
