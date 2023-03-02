import { isToday, parseISO } from "date-fns";
import addProjectBtn, { addedProjects } from "../project-creation/new-project";
import { renderProjectCards, initializeProjectCardFunctionality } from "./general-view";
import sortTodoDates, { activeTodos, clearActiveTodos } from "../todo-creation/sort-todo-dates";
import { initializeTodoCardFunctionality, renderProjectTodos } from "./project-view";
import { renderNewContentProjectBtn } from "./general-view";

let todayprojects = [];
let todaytodos = [];

function todayProjectFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = parseISO(array[i].dueDate);
        if (isToday(formattedDate)) {
            todayprojects.push(array[i])
        } else {
            continue;
        }
    }
}

function todayTodoFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = parseISO(array[i].dueDate);
        if (isToday(formattedDate)) {
            todaytodos.push(array[i])
        } else {
            continue;
        }
    }
}

export default function renderTodaySection() {
    todayProjectFilter(addedProjects);
    renderProjectCards(todayprojects);
    initializeProjectCardFunctionality();
    const content = document.querySelector('.content');
    renderNewContentProjectBtn();
    addProjectBtn();
    const divider = document.createElement('div');
    divider.setAttribute('class', 'divider');
    divider.classList.add('contentDivider');
    divider.textContent = '';
    content.appendChild(divider);
    const todoSection = document.createElement('div');
    todoSection.classList.add('todos');
    const title = document.createElement('div');
    title.classList.add('todosTitle');
    title.textContent = 'TO-DOS';
    todoSection.appendChild(title);
    content.appendChild(todoSection);
    sortTodoDates(addedProjects);
    todayTodoFilter(activeTodos);
    renderProjectTodos(todaytodos);
    initializeTodoCardFunctionality();
    todaytodos = [];
    todayprojects = [];
    clearActiveTodos();
}

