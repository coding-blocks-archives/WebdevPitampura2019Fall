const { Router } = require('express')
const { getAllArticles, getArticleById, getArticleByAuthorEmail, createArticle } = require('../../controllers/articles')

const route = Router()

route.get('/:id', async (req, res) => {
  try {
    const article = await getArticleById(req.params.id)
    if (!article) {
      return res.status(404).send({ error: 'No such article' })
    } else {
      return res.status(200).send(article)
    }
  } catch (e) {
    return res.status(500).send({
      error: e,
    })
  }
})

route.get('/', async (req, res) => {
  console.log(req.query)

  if (req.query.author_email) {
    const article = await getArticleByAuthorEmail(req.query.author_email)
    if (article) {
      return res.status(200).send(article)
    } else {
      return res.status(404).send({
        error: 'No article by such email id found',
      })
    }
  } else {
    const articles = await getAllArticles()
    return res.status(200).send(articles)
  }
})

route.post('/', async (req, res) => {
  try {
    const article = await createArticle(req.body.author_id, req.body.title, req.body.subtitle, req.body.body)
    return res.status(201).send(article)
  } catch (e) {
    return res.status(500).send({
      error: e,
    })
  }
})

module.exports = route
