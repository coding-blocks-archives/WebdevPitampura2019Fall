const express = require('express')
const app = express()

app.get('/favicon.ico', (req, res) => {
  res.sendStatus(404)
})

function m1(req, res, next) {
  console.log('middleware 1 running');
  next();
}
function m2(req, res, next) {
  console.log('middleware 2 running');
  next();
}
function m3(req, res, next) {
  console.log('middleware 3 running');
  next();
}
function m4(req, res, next) {
  console.log('middleware 4 running');
  next();
}

function m5(req, res) {
  console.log('middleware 5 running');
  res.send('End')
}

app.use('/a', m1)
app.use('/', m2)
app.use('/a/b', m3)
app.use('/a', m4)
app.use('/', m5)

app.listen(8787)
