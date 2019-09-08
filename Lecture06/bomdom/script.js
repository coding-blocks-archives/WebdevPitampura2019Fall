window.onload = function() {

  let x = document.getElementById('name')
  let y = document.getElementById('greet')

  y.onclick = function() {
    window.alert('Hello ' + x.value)
  }
}
