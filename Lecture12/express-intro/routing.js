const express = require("express");

const app = express();

const { users } = require('./routes') // same as require('./routes/index.js') 

app.use('/users', users)

app.listen(8080, function() {
  console.log("Running on PORT: 8080");
});
