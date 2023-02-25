const projectForm = document.querySelector('.projectForm');
let addedProjects = [];

import addProjectToContent, { addProjectToSidebar } from './project-to-DOM.js';
import addEllipsisFunctionality, { sidebarDeleteFunctionality } from './edit-project.js';
import expandProjectCard from './expand-project.js';


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

export function initializeNewProjectBtn() {
    const submitProjectBtn = document.querySelector('#submitProject');
    submitProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        newProjectInfo();
        projectForm.classList.add('hidden');
        clearFormEntry();
        addProjectToContent(addedProjects);
        addProjectToSidebar(addedProjects);
        addEllipsisFunctionality();
        sidebarDeleteFunctionality();
        expandProjectCard();
    })
}

function newProjectInfo() {
    const title = document.querySelector('#projectTitle.main').value;
    const description = document.querySelector('#description.main').value;
    const dueDate = document.querySelector('#dueDate.main').value;
    const priority = document.querySelector('#priority.main').value;
    let newProject = new Project(title, description, dueDate, priority);
    addedProjects.push(newProject);
}

function clearFormEntry() {
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach((input) => input.value = '');
    let priorityInput = document.querySelector('#priority');
    priorityInput.value = 'low';
}

export { addedProjects, Project, clearFormEntry };