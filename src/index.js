import { isToday, toDate, parseISO } from 'date-fns';
import setView  from './state';
import sortDates from './project-creation/sort-project-dates';

const title = document.querySelector('#title');
title.addEventListener('click', () => {
    sortDates();
})

setView('GENERAL');