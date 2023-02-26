import addProjectBtn, { initializeNewProjectBtn, addedProjects } from "../new-project.js";
import { addProjectToSidebar } from "../project-to-DOM.js";
import { sidebarDeleteFunctionality } from '../edit-project.js';
import createProjectForm from "../project-form.js";
import setView from "../state.js";

const sidebar = document.querySelector('.sidebar');
const views = ['GENERAL', 'TODAY', 'UPCOMING'];

export default function renderSidebar() {
    renderViewButtons(views);
    renderSidebarProjectListTitle();
    renderSidebarProjectList(addedProjects);
    sidebarDeleteFunctionality();
    createProjectForm();
    renderNewProjectBtn();
    addProjectBtn();
    initializeNewProjectBtn();
}

function renderViewButtons(views) {
    views.forEach((viewName) => {
        const button = document.createElement('div');
        button.classList.add("sidebarItem");
        button.setAttribute('id', viewName);
        button.textContent = viewName;
        sidebar.appendChild(button);
        button.addEventListener('click', () => {
            setView(viewName);
        })
    })
}

function renderSidebarProjectListTitle() {
    const title = document.createElement('div');
    title.classList.add('projects');
    title.classList.add('sidebarItem');
    title.textContent = 'Projects';
    sidebar.appendChild(title);
}

function renderSidebarProjectList(projects) {
    addProjectToSidebar(projects);
}

function renderNewProjectBtn() {
    const button = document.createElement('div');
    button.classList.add('sidebarItem');
    button.classList.add('addProject');
    button.textContent = '+ Add Project';
    sidebar.appendChild(button);
}