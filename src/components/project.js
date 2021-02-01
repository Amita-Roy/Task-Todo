import Todo from './todo';

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  getName() {
    return this.name;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title, description, dueDate, priority) {
    this.todos.push(new Todo(title, description, dueDate, priority));
  }

  removeTodoAt(index) {
    this.todos.splice(index, 1);
  }

  updateTodo(todo, index) {
    this.todos[index] = todo;
  }

  setActive() {
    this.active = true;
  }

  setInactive() {
    this.active = false;
  }
}

export default Project;
