
const socket = io()

const btnCount = document.getElementById('count')
const spanCounter = document.getElementById('counter')

btnCount.onclick = function () {
  socket.emit('count')
}
