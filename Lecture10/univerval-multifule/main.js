let lib
if (typeof window === 'undefined') {
  lib = require('./lib')
} else {
  lib = { add }
}

console.log(' 1 + 2 = ', lib.add(1, 2))
