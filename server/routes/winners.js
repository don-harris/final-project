const express = require('express')
const router = express.Router()

const winnerDb = require('../db/winners')

router.post('/', (req, res) => {
  const winner = req.body
  winnerDb.addWinner(winner)
  .then(winner => {
    res.status(201)
  })
  .catch((err) => {
    res.status(500).send(err.message)
  })
})

router.get('/', (req, res) => {
  winnerDb.getAllWinners()
    .then(winner => {
      res.json(winner)
    })
})

module.exports = router 