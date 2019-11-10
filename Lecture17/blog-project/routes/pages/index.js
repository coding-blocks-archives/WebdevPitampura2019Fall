const { Router } = require('express')
const { getAllArticles } = require('../../controllers/articles')

const route = Router()

route.get('/', async (req, res) => {

  const articles = await getAllArticles()
  res.render('home', {
    title: 'Home',
    articles,
  })
})

route.get('/article', (req, res) => {
  res.render('article', { title: 'Article' })
})

module.exports = route
