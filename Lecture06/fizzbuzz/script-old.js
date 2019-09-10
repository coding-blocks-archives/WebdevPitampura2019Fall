let list = document.getElementById('list')
let n = document.getElementById('n')
let print = document.getElementById('print')

print.onclick = function() {
  let start = new Date().getTime()

  for (let i = 1; i <= n.value; i++) {
    let x = ''
    if (i % 3 == 0) x += 'fizz'
    if (i % 5 == 0) x += 'buzz'
    if (x == '') x = i

    list.innerHTML += `<li> ${x} </li>`
  }

  let end = new Date().getTime()
  console.log(end - start)
}
