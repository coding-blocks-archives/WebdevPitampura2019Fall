const fs = require('fs')

fs.readFile('myfile.txt', (err, data) => {

  if (err) throw err

  console.log('file read')
  console.log(data.toString())

})
