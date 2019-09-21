let arr = [45, 312, 524, 7648, 324, 523, 535, 76, 45, 3, 2356]
let arr0 = [45, -312, 524, 7648, -324, 523, 535, -76, 45, 3, -2356]

let x = function(v, i, a) {
  return v / i
}

let arr2 = arr.map(x)

let y = function(v, i, a) {
  return v % 2 == 0
}

let arr3 = arr.filter(y)

let sum = arr.reduce(function(accum, value, index, array) {
  console.log(accum, value, index)
  return accum + value
})

let negSum = arr0.reduce(
  function(ac, val, i, a) {
    console.log(ac, val, i)
    if (val < 0) {
      ac += val
    }

    return ac

  },
  0,
)
