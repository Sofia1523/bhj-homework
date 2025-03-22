// Получаем элементы DOM
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const taskForm = document.getElementById('tasks__form');

// Добавление задачи по нажатию на Enter
taskForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
  const taskText = taskInput.value.trim();

  if (taskText) {
    addTask(taskText);
    taskInput.value = ''; // Очищаем поле ввода
  }
});

// Функция для добавления новой задачи
function addTask(text) {
  // Создаем элементы задачи
  const task = document.createElement('div');
  task.classList.add('task');

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task__title');
  taskTitle.textContent = text;

  const taskRemove = document.createElement('a');
  taskRemove.classList.add('task__remove');
  taskRemove.href = '#';
  taskRemove.innerHTML = '&times;';

  // Добавляем обработчик удаления на конкретную задачу
  taskRemove.addEventListener('click', (event) => {
    event.preventDefault();
    task.remove();
  });

  // Собираем задачу
  task.appendChild(taskTitle);
  task.appendChild(taskRemove);

  // Добавляем задачу в список
  taskList.appendChild(task);
}
