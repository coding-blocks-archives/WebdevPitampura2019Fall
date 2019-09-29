const fs = require('fs')

let contents = `
Hello
World!
This is an awesome file!
`
console.log('before write', new Date().getTime())

fs.writeFile('myfile.txt', contents, (err) => {
  if (err) throw err

  console.log('file written', new Date().getTime())
})

console.log('after write', new Date().getTime())
