const { MongoClient } = require('mongodb')

async function read () {

  const client = await MongoClient.connect('mongodb://localhost:27017')

  const myDB = client.db('myDB')
  const tasks = myDB.collection('tasks')

  const cursor = tasks.find({
    $and: [
      { priority: { $lt: 2 }},
      { done: false }
    ]
  }).sort( { priority: 1 })
  // console.log(cursor)

  const data = await cursor.toArray()
  console.log(data)

  client.close()


}

read()
