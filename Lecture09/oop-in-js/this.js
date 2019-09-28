let f = () => this.age > 18

let person = {
  name: 'John',
  age: 33
}

function example () {
  let age = 20

  let isAdult = () => console.log(this)

  console.log('isAdult', isAdult())
}
