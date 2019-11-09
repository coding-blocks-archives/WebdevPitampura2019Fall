const Sequelize = require('sequelize')

// const db = new Sequelize({
//   dialect: 'sqlite',
//   storage: __dirname + '/test.db',
// })

const db = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'sampleuser11',
  password: 'samplepass1',
  database: 'sampledb1',
})

const Users = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 18
  },
  city: {
    type: Sequelize.STRING
  }
})

module.exports = {
  db, Users
}
