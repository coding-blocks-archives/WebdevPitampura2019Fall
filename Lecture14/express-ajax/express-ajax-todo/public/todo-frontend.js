let newtask = document.getElementById('newtask')
let add = document.getElementById('add')
let tasklist = document.getElementById('tasklist')

async function getTasks() {
  const resp = await fetch('/todos')
  const todos = await resp.json()
  return todos
}

async function addTask(taskName) {
  const resp = await fetch('/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: taskName,
    }),
  })
  const data = await resp.json()

  if (resp.status == 201) {
    window.alert('Todo ' + data.todoId + ' added')
  } else {
    window.alert(data.message)
  }
}

async function renderList() {
  tasklist.innerHTML = ''
  const todos = await getTasks()
  for (let t of todos) {
    let item = document.createElement('li')
    item.innerText = t.name
    tasklist.appendChild(item)
  }
}

add.onclick = async function() {
  await addTask(newtask.value)
  renderList()
}


renderList()
