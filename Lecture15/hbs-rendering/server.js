const express = require('express')

const app = express()

app.set('view engine', 'hbs')

let viewcount = 0
let fruits = ['Apple', 'Mango']
let x = {a: 10, b: 20}

app.get('/', (req, res) => {
  ++viewcount
  res.render('home', {
    fruits,
    viewcount,
    x
  })
})


app.listen(7654, () => {
  console.log('Running on http://localhost:7654')
})
