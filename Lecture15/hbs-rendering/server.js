const express = require('express')

const app = express()

let viewcount = 0

app.get('/', (req, res) => {
  res.send(`
  <html>
  <body>
    <h1>Hello</h1>
    <p>This is a para</p>
    <p>This has been viewed ${++viewcount} times</p>
  </body>
  </html>
  `)
})


app.listen(7654, () => {
  console.log('Running on http://localhost:7654')
})
