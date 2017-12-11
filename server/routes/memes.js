const express = require('express')
const router = express.Router()

const db = require('../db/memes')

router.get('/', (req, res) => {
  db.getMemes()
    .then(memes => {
      res.json(memes)
    })
})

module.exports = router
