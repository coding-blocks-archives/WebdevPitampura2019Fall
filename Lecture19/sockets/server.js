const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)
let count = 0

io.on('connection', (socket) => {
  console.log('new socket created ' + socket.id)

  socket.on('count', () => {
    console.log(`Button clicked ${++count} times`)
  })

})

app.use('/', express.static(__dirname + '/public'))

app.get('/hello', (req, res) => {
  res.send('Hello World')
})

server.listen(5333, () => {
  console.log('http://localhost:5333')
})
