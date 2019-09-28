class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  isAdult() {
    return this.age > 18
  }
}

let p = new Person('Jane', 30)


class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }
}
