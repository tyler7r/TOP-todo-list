import { parseISO, isThisWeek } from "date-fns";
import { addedProjects } from "../project-creation/new-project";
import sortTodoDates, { clearActiveTodos, activeTodos } from "../todo-creation/sort-todo-dates";
import { renderProjectCards, initializeProjectCardFunctionality } from "./general-view";
import { initializeTodoCardFunctionality, renderProjectTodos } from "./project-view";

let upcomingProjects = [];
let upcomingTodos = [];

function upcomingProjectsFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = parseISO(array[i].dueDate);
        if (isThisWeek(formattedDate)) {
            upcomingProjects.push(array[i])
        } else {
            continue;
        }
    }
}

function upcomingTodosFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = parseISO(array[i].dueDate);
        if (isThisWeek(formattedDate)) {
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
    const todoSection = document.createElement('div');
    todoSection.classList.add('todos');
    todoSection.textContent = 'TODOS';
    content.appendChild(todoSection);
    sortTodoDates(addedProjects);
    upcomingTodosFilter(activeTodos);
    renderProjectTodos(upcomingTodos);
    initializeTodoCardFunctionality();
    upcomingProjects = [];
    upcomingTodos = [];
    clearActiveTodos();
}