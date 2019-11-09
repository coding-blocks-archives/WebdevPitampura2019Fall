const { db, Users } = require('./db')

async function writeTask() {
  await db.sync()

  // await Users.create({
  //   name: 'Jane Doe',
  //   age: 30,
  //   city: 'Mumbai'
  // })
  await Users.bulkCreate([
    {
      name: 'Harry', age: 20
    },
    {
      name: 'Ron', age: 21
    }
  ])

}


writeTask()
