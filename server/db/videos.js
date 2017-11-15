const defaultConn = require('./connection')

const getVideos = (testConn) => {
  const db = testConn || defaultConn
  return db('videos')
    .whereNot({isMeme: 'meOhMyIHaveEnjoyedThatYesBoy'})
    .select()
}

module.exports = {
  getVideos
}
