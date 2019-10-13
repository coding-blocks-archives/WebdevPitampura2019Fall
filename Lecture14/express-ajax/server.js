const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

let counter = 0

app.get('/ping', (req, res) => {
  counter++
  res.send({ counter })
})

app.listen(8877, () => {
  console.log('Server started on http://localhost:8877')
})
