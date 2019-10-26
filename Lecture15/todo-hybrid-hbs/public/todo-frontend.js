$('#btnadd').click((event) => {
  event.preventDefault()

  $.post('/api/todos',

  { newtask: $('#newtask').val() },

  (data) => {
    $('#todolist').empty()

    for (t of data) {
      let item = $('<li>').text(t)
      $('#todolist').append(item)
    }

  })


})
