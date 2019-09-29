class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    // this.isAdult = function () {
    //   return this.age > 18
    // }
  }
  isAdult() {
    return this.age > 18
  }
}

let p = new Person('Ken', 30)
let p1 = new Person('Jane', 20)

