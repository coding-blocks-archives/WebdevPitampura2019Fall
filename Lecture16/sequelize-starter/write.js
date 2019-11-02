const { db, Users } = require('./db')

async function writeTask() {
  await db.sync()

  await Users.create({
    name: 'Jane Doe',
    age: 30,
    city: 'Mumbai'
  })

}


writeTask()
