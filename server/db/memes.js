const defaultConn = require('./connection')

const getMemes = (testConn) => {
  const db = testConn || defaultConn
  return db('videos')
    .where({isMeme: true})
    .select()
}

module.exports = {
  getMemes
}
