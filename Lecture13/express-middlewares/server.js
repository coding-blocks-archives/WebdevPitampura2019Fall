const express = require('express')
const app = express()

const someroute = require('./someroute')

app.use('/x/y/z', someroute)

app.listen(5656, () => {
  console.log('Server running on http://localhost:5656')
})
