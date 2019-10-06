const bigInt = require("big-integer");

var zero = bigInt();
var ninetyThree = bigInt(93);
var largeNumber = bigInt("75643564363473453456342378564387956906736546456235345");
var googol = bigInt("1e100");
var bigNumber = bigInt(largeNumber);

var maximumByte = bigInt("FF", 16);
var fiftyFiveGoogol = bigInt("<55>0", googol);

console.log(googol + fiftyFiveGoogol)