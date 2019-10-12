const express = require('express')
const app = express()


app.get('/courses/:id', (req, res) => {
  
  res.send('You requested for ' + req.params.id)
})

app.get('/search', (req, res) => {
  const stringGoogle = `https://google.com/search?q=` + req.query.str
  res.redirect(stringGoogle)
})

app.listen(8080, function () {
  console.log("Runnning on 8080")
})