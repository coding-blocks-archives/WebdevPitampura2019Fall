const fs = require('fs')
const util = require('util')
const os = require('os')
os.EOL // instead of '\n'

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

Promise.all([
  readFile(__dirname + '/1.txt'),
  readFile(__dirname + '/2.txt'),
  readFile(__dirname + '/3.txt')
]).then((arr) => {
  let nums = []
  arr.forEach((fileData) => {
    nums = nums.concat(fileData.toString().split(os.EOL))
  })
  nums = nums.sort((a, b) => a - b)
  return writeFile(__dirname + '/out2.txt', nums)
}).then(() => {
  console.log('All done!')
}).catch()
