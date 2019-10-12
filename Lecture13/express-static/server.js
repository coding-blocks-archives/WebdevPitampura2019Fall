const express = require('express')
const app = express()

app.get('/a', (req, res) => {
  res.send('Hello')
})

app.use('/c', express.static(__dirname + '/public'))
app.listen(80)
