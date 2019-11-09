const Sequelize = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/test.db',
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
