const express = require('express')
const session = require('express-session')
const { db, Users } = require('./db/models')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')

app.use(session({
  secret: 'jh4btk34hbyo452by3k5jb',
  resave: false,
  saveUninitialized: false,
}))

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
    req.session.userid = user.id
    res.redirect('/profile')
  } else {
    res.redirect('/login')
  }
})

app.get('/profile', async (req, res) => {
  if (req.session.userid) {
    const user = await Users.findOne({
      where: {id: req.session.userid}
    })

    res.render('profile', { user })
  } else {
    res.redirect('/login')
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy()
  req.session = null
  res.redirect('/login')
})

db.sync().then(() => {
  app.listen(7676, () => {
    console.log('Started')
  })
})
