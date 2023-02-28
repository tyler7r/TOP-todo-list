const projectForm = document.querySelector('.projectForm');

import addProjectToContent, { addProjectToSidebar } from './newProject-to-DOM.js';
import addEllipsisFunctionality, { sidebarDeleteFunctionality } from './edit-project.js';
import expandProjectCard, { titleClick } from './expand-project.js';
import setView, { ACTIVE_VIEW } from '../state';
import completedTask from '../shared-creation.js/completed-task.js';

let addedProjects = [];

export default function addProjectBtn() {
    let addProjectBtn = document.querySelector('.addProject');
    const projectForm = document.querySelector('.projectForm');
    addProjectBtn.addEventListener('click', () => {
        if (`${ACTIVE_VIEW}`.includes('PROJECT')) {
            setView('GENERAL');
            projectForm.classList.remove('hidden');
        } else {
        projectForm.classList.remove('hidden');
        }
    })
}

function Project(title, description, dueDate, priority, todos) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.todos = todos;
}

export function initializeNewProjectBtn() {
    const projectForm = document.querySelector('.projectForm');
    const submitProjectBtn = document.querySelector('#submitProject');
    submitProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        newProjectInfo();
        projectForm.classList.add('hidden');
        clearFormEntry('priority');
        addProjectToContent(addedProjects);
        addProjectToSidebar(addedProjects);
        addEllipsisFunctionality();
        sidebarDeleteFunctionality();
        expandProjectCard();
        titleClick();
        completedTask('project');
    })
}

function newProjectInfo() {
    const title = document.querySelector('#projectTitle.main').value;
    const description = document.querySelector('#description.main').value;
    const dueDate = document.querySelector('#dueDate.main').value;
    const priority = document.querySelector('#priority.main').value;
    let newProject = new Project(title, description, dueDate, priority, []);
    addedProjects.push(newProject);
}

function clearFormEntry(priorityName) {
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach((input) => input.value = '');
    let priorityInput = document.querySelector(`#${priorityName}`);
    priorityInput.value = 'low';
}

export { addedProjects, Project, clearFormEntry };