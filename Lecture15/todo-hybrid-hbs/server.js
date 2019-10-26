const express = require('express')

const app = express()
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

app.use(express.urlencoded({extended: true}))

const todos = ['First task', 'Another task']

app.get('/', (req, res) => {
  res.render('home', { todos })
})

app.post('/', (req, res) => {
  todos.push(req.body.newtask)
  res.redirect('/')
})

app.listen(8787, () => {
  console.log('Running on http://localhost:8787')
})
