const fs = require('fs').promises
const os = require('os')
os.EOL // instead of '\n'

Promise.all([
  fs.readFile(__dirname + '/1.txt'),
  fs.readFile(__dirname + '/2.txt'),
  fs.readFile(__dirname + '/3.txt')
]).then((arr) => {
  let nums = []
  arr.forEach((fileData) => {
    nums = nums.concat(fileData.toString().split(os.EOL))
  })
  nums = nums.sort((a, b) => a - b)
  return fs.writeFile(__dirname + '/out2.txt', nums)
}).then(() => {
  console.log('All done!')
})
