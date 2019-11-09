const express = require('express')
const { db } = require('./db/models')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', require('./routes/api'))

db.sync().then(() => {
  app.listen(9988, () => {
    console.log('http://localhost:9988')
  })
}).catch(console.error)
