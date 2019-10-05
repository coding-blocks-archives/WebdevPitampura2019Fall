function readFile1(path, done) {
  if (typeof path !== 'string' || path.length < 3) {
    done(new Error('Path invalid'))
  }
  setTimeout(() => {
    done(null, 'Sample data 1')
  }, 1000)
}

function readFile2(path, done) {
  if (typeof path !== 'string' || path.length < 3) {
    done(new Error('Path invalid'))
  }
  setTimeout(() => {
    done(null, 'Sample data 2')
  }, 2000)
}

function readFile3(path, done) {
  if (typeof path !== 'string' || path.length < 3) {
    done(new Error('Path invalid'))
  }
  setTimeout(() => {
    done(null, 'Sample data 3')
  }, 3000)
}

function writeFile(data1, data2, data3, done) {
  setTimeout(() => {
    console.log('data written', [data1, data2, data3])
    done(null)
  }, 2000)
}

readFile1('asdsad', (err, data1) => {
  readFile2('dnbdfgn', (err, data2) => {
    readFile3('dgngdn', (err, data3) => {
      writeFile(data1, data2, data3, () => {

      })
    })
  })
})
