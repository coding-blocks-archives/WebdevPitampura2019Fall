const fs = require('fs')
const os = require('os')
os.EOL // instead of '\n'

let arr = []
fs.readFile(__dirname + '/1.txt', (err, data) => {
  arr = arr.concat(data.toString().split(os.EOL))

  fs.readFile(__dirname + '/2.txt', (err, data) => {
    arr = arr.concat(data.toString().split(os.EOL))

    fs.readFile(__dirname + '/3.txt', (err, data) => {
      arr = arr.concat(data.toString().split(os.EOL))

      arr = arr.sort((a, b) => a - b)

      fs.writeFile(__dirname + '/out.txt', arr.join(os.EOL), (err) => {

        console.log('Done')
      })
    })
  })
})
