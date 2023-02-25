import { initializeNewProjectBtn, addedProjects } from "../src/new-project.js";
import { editProject, VIEWS } from '../src/state.js';
import { addProjectToSidebar } from "../src/project-to-DOM.js";
import { sidebarDeleteFunctionality } from '../src/editProject.js';

const sidebar = document.querySelector('.sidebar');

export default function renderSidebar() {
    renderViewButtons([General, Today, Upcoming]);
    renderSidebarProjectListTitle();
    renderSidebarProjectList(addedProjects);
    sidebarDeleteFunctionality();
    renderNewProjectBtn();
    initializeNewProjectBtn();
}

function renderViewButtons(views) {
    views.forEach((viewName) => {
        const button = document.createElement('div');
        button.classList.add("sidebarItem");
        button.setAttribute('id', viewName);
        button.textContent = viewName;
        button.addEventListener('click', () => {
            setView(viewName)
        })
        sidebar.appendChild(button);
    })
}

function renderSidebarProjectListTitle() {
    const title = document.createElement('div');
    title.classList.add('sidebarItem');
    title.classList.add('projects');
    sidebar.appendChild('title');
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