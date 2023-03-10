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
    renderProjectViewDescription();
    renderProjectTodosTitle();
    renderProjectTodos(addedProjects[PROJECT_VIEW-1].todos);
    initializeTodoCardFunctionality();
    renderNewTodoBtn();
}

function renderProjectViewTitle() {
    const content = document.querySelector('.content');
    const projectView = document.createElement('div');
    projectView.classList.add('projectView');
    content.appendChild(projectView);
    const title = document.createElement('h1');
    title.classList.add('projectViewTitle');
    const titleName = addedProjects[PROJECT_VIEW - 1].title;
    title.textContent = titleName;
    projectView.appendChild(title);
}

function renderProjectViewDescription() {
    const projectView = document.querySelector('.projectView');
    const description = document.createElement('h3');
    description.classList.add('projectViewDescription');
    const descriptionDetails = addedProjects[PROJECT_VIEW - 1].description;
    description.textContent = `${descriptionDetails}`;
    projectView.appendChild(description);
    const divider = document.createElement('div');
    divider.classList.add('contentDivider');
    divider.classList.add('divider');
    divider.textContent = '';
    projectView.appendChild(divider);
}   

function renderProjectTodosTitle() {
    const projectView = document.querySelector('.projectView');
    const todos = document.createElement('div');
    todos.classList.add('todos');
    const title = document.createElement('div');
    title.textContent = 'TO-DO LIST';
    title.classList.add('todosTitle');
    todos.appendChild(title);
    projectView.appendChild(todos);
}

function renderProjectTodos(array) {
    addAllTodosToDOM(array);
}

function renderNewTodoBtn() {
    createTodoForm();
    const projectView = document.querySelector('.projectView');
    let button = document.createElement('div');
    button.classList.add('newTodo');
    button.textContent = '+ ADD TODO'
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

export { renderProjectTodos, initializeTodoCardFunctionality};
