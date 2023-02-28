import { addedProjects } from "../project-creation/new-project";
import { PROJECT_VIEW } from "../state";
import { addAllTodosToDOM } from "../todo-creation/add-todo-to-DOM";
import { submitTodoBtn } from "../todo-creation/new-todo";
import createTodoForm from "../todo-creation/todo-form";
import addTodoEllipsisFunctionality from "../todo-creation/edit-todo";
import expandTodoCard from "../todo-creation/expand-todo";
import completedTask from "../shared-creation.js/completed-task";

export default function renderProjectView() {
    renderProjectViewTitle();
    renderProjectTodosTitle();
    renderProjectTodos();
    initializeTodoCardFunctionality();
    renderNewTodoBtn();
}

function renderProjectViewTitle() {
    const content = document.querySelector('.content');
    const projectView = document.createElement('div');
    projectView.classList.add('projectView');
    content.appendChild(projectView);
    const title = document.createElement('h1');
    const titleName = addedProjects[PROJECT_VIEW - 1].title;
    title.textContent = titleName;
    projectView.appendChild(title);
}

function renderProjectTodosTitle() {
    const projectView = document.querySelector('.projectView');
    const todos = document.createElement('div');
    todos.classList.add('todos');
    todos.textContent = 'Project Todos';
    projectView.appendChild(todos);
}

function renderProjectTodos() {
    addAllTodosToDOM(addedProjects[PROJECT_VIEW-1].todos);
}

function renderNewTodoBtn() {
    createTodoForm();
    const projectView = document.querySelector('.projectView');
    let button = document.createElement('div');
    button.classList.add('newTodo');
    button.textContent = '+ Add Todo'
    projectView.appendChild(button);
    initializeAddTodoButton()
}

function initializeTodoCardFunctionality() {
    let todos = document.querySelectorAll('.todoCard');
    todos.forEach((todo) => {
        todo.addEventListener('click', () => {
            todoCardFunctionality();
        })
    })
}

function todoCardFunctionality() {
    addTodoEllipsisFunctionality();
    expandTodoCard();
    completedTask('todo');
}

function initializeAddTodoButton() {
    const addTodoBtn = document.querySelector('.newTodo');
    const todoForm = document.querySelector('.todoForm');
    addTodoBtn.addEventListener('click', () => {
        todoForm.classList.remove('hidden');
    })
    submitTodoBtn();
}
