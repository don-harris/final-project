const defaultConn = require('./connection')

const getVideos = (testConn) => {
  const db = testConn || defaultConn
  return db('videos')
    .select()
}

module.exports = {
  getVideos
}