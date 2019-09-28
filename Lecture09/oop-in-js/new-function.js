function Person(name, age) {
  this.name = name
  this.age = age
  this.isAdult = function () {
    return this.age > 18
  }
}

let p = new Person('Jane', 40)
