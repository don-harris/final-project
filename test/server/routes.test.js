const request = require('supertest')

jest.mock('../../server/db/videos', () => ({
  getvideos: () => Promise.resolve([
    {id: 1, text: 'test text 1'},
    {id: 2, text: 'test text 2'}
  ])
}))

const server = require('../../server/server')

test('GET /round', () => {
  return request(server)
    .get('/api/v1/round')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(2)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})
