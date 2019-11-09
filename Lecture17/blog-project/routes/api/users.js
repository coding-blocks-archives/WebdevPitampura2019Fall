const { Router } = require('express')
const {
  getUserById,
  getAllUsers,
  createUser
} = require('../../controllers/users')

const route = Router()

route.get('/', async (req, res) => {
  try {
    const users = await getAllUsers()
    return res.status(200).send(users)
  } catch (e) {
    return res.status(500).send({
      error: e,
    })
  }
})

route.get('/:id', async (req, res) => {
  try {
    const user = await getUserById(req.params.id)

    if (!user) {
      return res.status(404).send({
        error: 'No such user id'
      })
    }

    return res.status(200).send(user)
  } catch (e) {
    return res.status(500).send({
      error: e,
    })
  }
})

route.post('/', async (req, res) => {
  try {
    const user = await createUser(req.body.name, req.body.email)
    return res.status(201).send(user)
  } catch (e) {
    return res.status(500).send({
      error: e,
    })
  }
})

module.exports = route
