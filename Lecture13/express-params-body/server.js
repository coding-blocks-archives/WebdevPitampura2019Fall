const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
  fs.appendFile(
    'server.log',
    `
    ==============
    URL    = ${req.url}
    QUERY  = ${JSON.stringify(req.query)}
    PARAMS = ${JSON.stringify(req.params)}
    ===============

  `,
    () => {},
  )
  next()
})

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

app.post('/xyz', (req, res) => {
  console.log(req.body)
  res.send('Done')
})

app.listen(7676)
