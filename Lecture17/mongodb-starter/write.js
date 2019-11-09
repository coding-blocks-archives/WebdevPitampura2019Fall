const { MongoClient } = require('mongodb')

async function write() {
  const client = await MongoClient.connect('mongodb://localhost:27017')

  const myDB = client.db('myDB')
  const tasks = myDB.collection('tasks')

  // const result = await tasks.insertOne(
  //   { name: 'Another Task', done: false, priority: 0 }
  // )

  const result = await tasks.insertMany(
    [
      { name: 'vsdsdvsdvs', done: true, priority: 0 },
      { name: 'bsfsbs', priority: 1 },
      { name: 'adfbadb', done: false,  },
      { name: 'adbadbbadbadb', done: true,  },
      { name: 'gmndgdgn',  },
      { name: 'sfbsfbfs', done: true,  },
      { name: 'jtjyj', priority: 1 }
    ]
  )

  console.log(result)

  client.close()
}

write()
