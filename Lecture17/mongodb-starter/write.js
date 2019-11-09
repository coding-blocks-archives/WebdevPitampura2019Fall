const { MongoClient } = require('mongodb')

async function write () {

  const client = await MongoClient.connect('mongodb://localhost:27017')

  const myDB = client.db('myDB')
  const tasks = myDB.collection('tasks')

  const result = await tasks.insertOne(
    { name: 'Another Task', done: false, priority: 0 }
  )

  console.log(result)

  client.close()


}

write()
