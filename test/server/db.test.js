const request = require('supertest')

const env = require('./test-environment')
const videosDb = require('../../server/db/videos')

// Manage the test database

let testDb = null
beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})
afterEach(() => env.cleanup(testDb))

// Tests

test('read videos db', () => {
  return videosDb.getVideos(testDb)
    .then(videos => {
      expect(videos.length).toBe(6)
      expect(videos[0].hasOwnProperty('vid_url')).toBeTruthy()
    })
})
