const { db, Users } = require('./db')

async function writeTask() {
  await db.sync()

  const users = await Users.findAll()
  for (let u of users) {
    console.log(
      `${u.name} \t ${u.age} \t ${u.city}`
    )
  }

}


writeTask()
