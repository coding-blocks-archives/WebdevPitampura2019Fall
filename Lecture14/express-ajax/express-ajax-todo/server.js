const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/todos', require('./routes/todos'))


app.listen(8665, () => {
  console.log('http://localhost:8665')
})
