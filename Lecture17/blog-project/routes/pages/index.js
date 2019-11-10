const { Router } = require('express')
const { getAllArticles, createArticle } = require('../../controllers/articles')
const { getAllUsers } = require('../../controllers/users')

const route = Router()

route.get('/', async (req, res) => {

  const articles = await getAllArticles()
  const users = await getAllUsers()

  res.render('home', {
    title: 'Home',
    articles, users
  })
})

route.post('/articles', async (req, res) => {
  try {
    const article = await createArticle(req.body.author_id, req.body.title, req.body.subtitle, req.body.body)
    return res.redirect('/')
  } catch (e) {
    return res.status(500).send({
      error: e,
    })
  }
})

route.get('/article', (req, res) => {
  res.render('article', { title: 'Article' })
})

route.use('/users', require('./users'))

module.exports = route
