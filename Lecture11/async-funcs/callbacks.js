
function waitASec(laterJob) {
  setTimeout(laterJob, 1000)
}

console.log('started')

waitASec(function () {
  console.log('job done')
})

console.log('ended')
