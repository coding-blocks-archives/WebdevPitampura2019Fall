const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('This is a list of users')
})


module.exports = router