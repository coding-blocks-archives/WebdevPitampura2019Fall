const express = require('express')

const route = express.Router()
module.exports = route

route.get('/a', (req, res) => {
  res.send('hello to this route')
})

