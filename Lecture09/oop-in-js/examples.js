function add ( a , b) {
  return a + b
}


add(1,2)
add('1', '2')

function area (a, b = a) {
  return a * b
}

area(1)
area(1,2)


let people = [/* ... some person objs */]

function getPerson(nameOrIndex) {
  if (typeof nameOrIndex == 'string') {
    let p = new Person(nameOrIndex)
    return p
  }
  if (typeof nameOrIndex == 'number') {
    return people[nameOrIndex]
  }
}
