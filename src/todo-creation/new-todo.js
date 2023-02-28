import { addedProjects } from "../project-creation/new-project";
import { PROJECT_VIEW } from "../state";
import addTodoToDOM from "./add-todo-to-DOM";
import { clearFormEntry } from "../project-creation/new-project";
import addTodoEllipsisFunctionality from "./edit-todo";
import expandTodoCard from "./expand-todo";
import completedTask from "../shared-creation.js/completed-task";

let todoList = [];

function Todo(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

function submitTodoBtn() {
    const submitTodo = document.querySelector('#submitTodo');
    submitTodo.addEventListener('click', (e) => {
        e.preventDefault();
        newTodoInfo();
        const todoForm = document.querySelector('.todoForm')
        todoForm.classList.add('hidden');
        addTodoToDOM(addedProjects[PROJECT_VIEW-1].todos);
        clearFormEntry('todoPriority');
        addTodoEllipsisFunctionality();
        expandTodoCard();
        completedTask('todo');
    })
}

function newTodoInfo() {
    const title = document.querySelector(`#todoTitle.main`).value;
    const description = document.querySelector(`#todoDescription.main`).value;
    const dueDate = document.querySelector(`#todoDueDate.main`).value;
    const priority = document.querySelector(`#todoPriority.main`).value;
    let newTodo = new Todo(title, description, dueDate, priority);
    todoList.push(newTodo);
    addedProjects[PROJECT_VIEW - 1].todos.push(newTodo);
}

export { submitTodoBtn, Todo };

