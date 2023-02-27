import { isToday, toDate, parseISO } from 'date-fns';
import { addedProjects } from './new-project';
import setView  from './state';

const title = document.querySelector('#title');
title.addEventListener('click', () => {
    let formattedDate = (parseISO(addedProjects[0].dueDate));
    console.log(isToday(formattedDate));
})

setView('GENERAL');