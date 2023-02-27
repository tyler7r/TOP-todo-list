import { addedProjects } from "../project-creation/new-project";
import { PROJECT_VIEW } from "../state";
import { submitTodoBtn } from "../todo-creation/new-todo";
import createTodoForm from "../todo-creation/todo-form";

export default function renderProjectView() {
    renderProjectViewTitle();
    // renderProjectTodos();
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

function renderProjectTodos() {
    
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

function initializeAddTodoButton() {
    const addTodoBtn = document.querySelector('.newTodo');
    const todoForm = document.querySelector('.todoForm');
    addTodoBtn.addEventListener('click', () => {
        todoForm.classList.remove('hidden');
    })
    submitTodoBtn();
}
