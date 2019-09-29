function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.isAdult = function() {
  return this.age > 18
}

let p = new Person('Jane', 40)
console.log(p)
