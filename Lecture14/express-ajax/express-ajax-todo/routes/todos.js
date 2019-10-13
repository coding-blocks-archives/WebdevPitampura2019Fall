const express = require('express')
const route = express.Router()

const todos = [{ name: 'First task', done: true }, { name: 'Next task', done: false }]

route.get('/', (req, res) => {
  res.status(200).send(todos)
})

route.post('/', (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      status: 'error',
      message: 'Task name not provided'
    })
  }
  todos.push({
    name: req.body.name,
    done: req.body.done || false,
  })

  res.status(201).send({
    status: 'success',
    todoId: todos.length - 1,
  })
})

route.get('/:id', (req, res) => {
  if (todos[req.params.id]) {
    res.status(200).send(todos[req.params.id])
  } else {
    res.status(404).send({
      status: 'error',
      message: 'No such todo found'
    })
  }
})

module.exports = route
