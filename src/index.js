import { isToday, toDate, parseISO } from 'date-fns';
import { addedProjects } from './new-project';
import setView  from './state';
import sortDates from './sort-project-dates';

const title = document.querySelector('#title');
title.addEventListener('click', () => {
    sortDates();
})

setView('GENERAL');