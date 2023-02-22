const projectForm = document.querySelector('.projectForm');
let addedProjects = [];

import addProjectToContent, { addProjectToSidebar } from './project-to-DOM.js';
import addEllipsisFunctionality from './edit-project.js';


export default function addProjectBtn() {
    let addProjectBtn = document.querySelector('.addProject');
    addProjectBtn.addEventListener('click', () => {
        projectForm.classList.remove('hidden');
    })
}

function Project(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

const submitProjectBtn = document.querySelector('#submitProject');
submitProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newProjectInfo();
    projectForm.classList.add('hidden');
    clearFormEntry();
    console.log(addedProjects);
    addProjectToContent(addedProjects);
    addProjectToSidebar(addedProjects);
    addEllipsisFunctionality();
})

function newProjectInfo() {
    const title = document.querySelector('#projectTitle').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    let newProject = new Project(title, description, dueDate, priority);
    addedProjects.push(newProject);
}

function clearFormEntry() {
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach((input) => input.value = '');
    let priorityInput = document.querySelector('#priority');
    priorityInput.value = 'low';
}

export { addedProjects };