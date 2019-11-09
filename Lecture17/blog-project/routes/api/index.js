const { Router } = require('express')

const route = Router()

route.use('/articles', require('./articles'))
route.use('/comments', require('./comments'))
route.use('/users', require('./users'))

module.exports = route
