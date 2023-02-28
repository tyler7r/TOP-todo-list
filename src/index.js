import { isToday, toDate, parseISO } from 'date-fns';
import setView  from './state';
import sortDates from './project-creation/sort-project-dates';
import getActiveTodos, { activeTodoLists, activeTodos } from './todo-creation/sort-todo-dates';
import { addedProjects } from './project-creation/new-project';

const title = document.querySelector('#title');
title.addEventListener('click', () => {
    console.log(addedProjects);
})

setView('GENERAL');