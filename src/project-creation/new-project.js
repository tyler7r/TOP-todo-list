import setView, { ACTIVE_VIEW, addProject } from '../state';

let addedProjects = [];

export function pullFromStorage() {
    console.log(addedProjects);
    addedProjects = JSON.parse(localStorage.getItem('masterList'));
    console.log(addedProjects);
}

export default function addProjectBtn() {
    let addProjectBtn = document.querySelectorAll('.addProject');
    const projectForm = document.querySelector('.projectForm');
    addProjectBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            if (projectForm.classList.contains('hidden') === true) {
                if (`${ACTIVE_VIEW}`.includes('PROJECT')) {
                    setView('GENERAL');
                    projectForm.classList.remove('hidden');
                } else {
                    projectForm.classList.remove('hidden');
                }
            } else {
                return
            }
        })
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
    })
}

function newProjectInfo() {
    const title = document.querySelector('#projectTitle.main').value.toUpperCase();
    const description = document.querySelector('#description.main').value;
    const dueDate = document.querySelector('#dueDate.main').value;
    const priority = document.querySelector('#priority.main').value;
    let newProject = new Project(title, description, dueDate, priority, []);
    addProject(addedProjects, newProject);
}

function clearFormEntry(priorityName) {
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach((input) => input.value = '');
    let priorityInput = document.querySelector(`#${priorityName}`);
    priorityInput.value = 'low';
}

export { addedProjects, Project, clearFormEntry };