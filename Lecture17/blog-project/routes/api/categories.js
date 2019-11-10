const { Router } = require('express')
const { getAllCategories, addCategory } = require('../../controllers/categories')

const route = Router()

route.get('/', async (req, res) => {
  const categories = await getAllCategories()
  return res.status(200).send(categories)
})

route.post('/', async (req, res) => {
  try {
    const category = await addCategory(req.body.name)

    return res.status(201).send(category)
  } catch (e) {
    return res.status(500).send({
      error: e,
    })
  }
})

module.exports = route
