const express = require('express')
const { db, Users } = require('./db/models')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.post('/signup', async (req, res) => {
  const user = await Users.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  if (user) {
    res.redirect('/login')
  } else {
    res.redirect('/signup')
  }
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', async (req, res) => {
  const user = await Users.findOne({
    where: {
      email: req.body.email,
    },
  })
  if (!user) return res.redirect('/login')

  if (user.password === req.body.password) {
    res.redirect('/profile')
  } else {
    res.redirect('/login')
  }
})

db.sync().then(() => {
  app.listen(7676, () => {
    console.log('Started')
  })
})
