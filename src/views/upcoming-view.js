import { parseISO, isThisWeek, differenceInCalendarDays } from "date-fns";
import { addedProjects } from "../project-creation/new-project";
import sortTodoDates, { clearActiveTodos, activeTodos } from "../todo-creation/sort-todo-dates";
import { renderProjectCards, initializeProjectCardFunctionality } from "./general-view";
import { initializeTodoCardFunctionality, renderProjectTodos } from "./project-view";
import { renderNewContentProjectBtn } from "./general-view";
import addProjectBtn from "../project-creation/new-project";

let upcomingProjects = [];
let upcomingTodos = [];

function upcomingProjectsFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = parseISO(array[i].dueDate);
        let todayDate = new Date();
        if (differenceInCalendarDays(todayDate, formattedDate) <= 14) {
            upcomingProjects.push(array[i])
        } else {
            continue;
        }
    }
}

function upcomingTodosFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = parseISO(array[i].dueDate);
        let todayDate = new Date();
        if (differenceInCalendarDays(todayDate, formattedDate) <= 14) {
            upcomingTodos.push(array[i])
        } else {
            continue;
        }
    }
}

export default function renderUpcomingSection() {
    upcomingProjectsFilter(addedProjects);
    renderProjectCards(upcomingProjects);
    initializeProjectCardFunctionality();
    const content = document.querySelector('.content');
    renderNewContentProjectBtn();
    addProjectBtn();
    const divider = document.createElement('div');
    divider.setAttribute('class', 'divider');
    divider.textContent = '';
    divider.classList.add('contentDivider');
    content.appendChild(divider);
    const todoSection = document.createElement('div');
    todoSection.classList.add('todos');
    const title = document.createElement('div');
    title.classList.add('todosTitle');
    title.textContent = 'TO-DOS';
    todoSection.appendChild(title);
    content.appendChild(todoSection);
    sortTodoDates(addedProjects);
    upcomingTodosFilter(activeTodos);
    renderProjectTodos(upcomingTodos);
    initializeTodoCardFunctionality();
    upcomingProjects = [];
    upcomingTodos = [];
    clearActiveTodos();
}