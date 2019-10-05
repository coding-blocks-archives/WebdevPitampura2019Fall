function readFile1(path) {
  return new Promise((resolve, reject) => {
    if (typeof path !== 'string' || path.length < 3) {
      reject(new Error('Path invalid'))
    }
    setTimeout(() => {
      resolve('Sample data 1')
    }, 1000)
  })
}

function readFile2(path) {
  return new Promise((resolve, reject) => {
    if (typeof path !== 'string' || path.length < 3) {
      reject(new Error('Path invalid'))
    }
    setTimeout(() => {
      resolve('Sample data 2')
    }, 2000)
  })
}

function readFile3(path) {
  return new Promise((resolve, reject) => {
    if (typeof path !== 'string' || path.length < 3) {
      reject(new Error('Path invalid'))
    }
    setTimeout(() => {
      resolve('Sample data 3')
    }, 3000)
  })
}

function writeFile(data1, data2, data3, done) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('data written', [data1, data2, data3])
      resolve()
    }, 2000)
  })
}

let errH = (err) => {
  if (err) console.error(err)
}

readFile1('asdasd')
  .then((data1) => {
    readFile2('')
      .then((data2) => {
        readFile3('dgngdn')
          .then((data3) => {
            writeFile(data1, data2, data3)
          })
          .catch(errH)
      })
      .catch(errH)
  })
  .catch(errH)
