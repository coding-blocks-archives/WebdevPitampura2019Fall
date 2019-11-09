const { Article, User } = require('../db/models')

async function getArticleById(id) {
  return await Article.findOne({
    include: [{ model: User, as: 'author' }],
    where: { id }
  })
}

async function getArticleByAuthorEmail(email) {
  const article = await Article.findOne({
    include: [{ model: User, as: 'author' }],
    where: { '$author.email$': email },
  })

  return article
}
async function createArticle(authorId, title, subtitle, body) {
  const article = await Article.create({
    authorId,
    title,
    subtitle,
    body,
  })

  return article
}

module.exports = {
  getArticleById,
  getArticleByAuthorEmail,
  createArticle,
}
