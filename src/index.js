import newProjectBtn from './new-project.js';
import { addedProjects } from './new-project.js';

newProjectBtn();

document.querySelector('#title').addEventListener('click', () => {
    console.log(addedProjects);
})