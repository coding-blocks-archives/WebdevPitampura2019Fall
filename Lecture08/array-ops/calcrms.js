let calc = document.getElementById('calc')
let vals = document.getElementById('vals')
let nRMS = document.getElementById('nRMS')
let pRMS = document.getElementById('pRMS')
let RMS = document.getElementById('RMS')

calc.onclick = function() {
  let numArr = vals.value.split(',').map((i) => +i.trim())
  let meanSqr = (ac, val, i, a) => ac + (Math.pow(val, 2) / a.length)

  RMS.innerText = Math.sqrt(
    numArr
    .reduce(meanSqr, 0)
  )
  pRMS.innerText = Math.sqrt(
    numArr
    .filter((i) => i > 0)
    .reduce(meanSqr, 0)
  )
  nRMS.innerText = Math.sqrt(
    numArr
    .filter((i) => i < 0)
    .reduce(meanSqr, 0)
  )
}
