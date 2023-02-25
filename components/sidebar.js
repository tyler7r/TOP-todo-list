import addProjectBtn, { initializeNewProjectBtn, addedProjects } from "../src/new-project.js";
import { addProjectToSidebar } from "../src/project-to-DOM.js";
import { sidebarDeleteFunctionality } from '../src/editProject.js';
import createProjectForm from "../src/project-form.js";

const sidebar = document.querySelector('.sidebar');

export default function renderSidebar() {
    renderViewButtons([GENERAL, TODAY, UPCOMING]);
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
    addProjectBtn();
    createProjectForm();
}