let inpNewTask = document.getElementById('inpNewTask')
let btnAdd = document.getElementById('btnAdd')
let btnClearDone = document.getElementById('btnClearDone')
let taskList = document.getElementById('taskList')

// Code for managing model layer

let tasks = [{ title: 'first task', done: false }, { title: 'another task', done: true }]

function addItem(taskTitle) {
  tasks.push({ title: taskTitle, done: false })
}

function toggleItemDone(itemId) {
  tasks[itemId].done = !tasks[itemId].done
}

function clearDoneItems() {
  tasks = tasks.filter((x) => !x.done)
}

// Code for managing views

function renderList() {
  taskList.innerHTML = ''
  for (let i = 0; i < tasks.length; i++) {
    let item = document.createElement('li')
    item.innerText = tasks[i].title
    item.className = tasks[i].done ? 'list-group-item done' : 'list-group-item'
    item.onclick = () => {
      toggleItemDone(i)
      renderList()
    }
    taskList.appendChild(item)
  }
}

function addItemFromInput() {
  if (inpNewTask.value) {
    addItem(inpNewTask.value)
    inpNewTask.value = ''
  }
  renderList()
}

// Code for view <-> model interactions

btnAdd.addEventListener('click', addItemFromInput)
inpNewTask.addEventListener('keypress', (event) => {
  if (event.keyCode == 13) addItemFromInput()
})
btnClearDone.addEventListener('click', () => {
  clearDoneItems()
  renderList()
})

// When page starts

renderList()
