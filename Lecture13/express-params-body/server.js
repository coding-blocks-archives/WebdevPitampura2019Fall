const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  if (!req.query.name) req.query.name = 'Guest'
  console.log(req.query)
  res.send('Hello ' + req.query.name)
})

app.get('/bye/:name', (req, res) => {
  if (!req.query.greeting) {
    req.query.greeting = 'Goodbye'
  }

  res.send(req.query.greeting + ' ' + req.params.name)
})

app.listen(7676)
