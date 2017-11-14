const defaultConn = require('./connection')

const getVideos = (testConn) => {
  const db = testConn || defaultConn
  return db('videos')
    .where({isMeme: false})
    .select()
}

module.exports = {
  getVideos
}
