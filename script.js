
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


function addTask() {
  const taskValue = taskInput.value;

  if (taskValue.trim() !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskValue;

    // Agregar evento de clic para marcar como completado o eliminar la tarea
    newTask.addEventListener('click', function() {
      this.classList.toggle('completed');
    });

    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}


addButton.addEventListener('click', addTask);
