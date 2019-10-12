const express = require("express");

const app = express();

const middlewareGenerator = (num, pass = true) => (req, res, next) => {
  console.log("Middleware " + num)
  if (pass)
    next()
}

const m1 = middlewareGenerator(1)
const m2 = middlewareGenerator(2)
const m3 = middlewareGenerator(3)
const m4 = middlewareGenerator(4)
const m5 = middlewareGenerator(5)

app.use(m1)

app.get('/a/b', (req, res, next) => {
  console.log("Exact Handler")
  next()
})

app.use('/a', m2)
app.use('/a/b', m3)
app.use('/b', m4)
app.use(m5)




app.listen(8080, function() {
  console.log("Running on PORT: 8080");
});
