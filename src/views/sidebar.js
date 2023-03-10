import addProjectBtn, { initializeNewProjectBtn, addedProjects } from "../project-creation/new-project.js";
import { sidebarDeleteFunctionality } from '../project-creation/edit-project.js';
import createProjectForm from "../project-creation/project-form.js";
import setView, { ACTIVE_VIEW } from "../state.js";
import { addAllProjectsToSidebar } from "../project-creation/allProjects-to-DOM.js";

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
        button.classList.add('viewButton');
        button.setAttribute('id', viewName);
        let buttonTitle = document.createElement('div');
        buttonTitle.textContent = viewName;
        buttonTitle.classList.add('viewButtonTitle');
        button.appendChild(buttonTitle);
        sidebar.appendChild(button);
        if (viewName === 'GENERAL') {
            let general = document.getElementById('GENERAL');
            let icon = document.createElement('img');
            icon.src = 'globe.real.svg';
            icon.classList.add('generalIcon');
            icon.classList.add('iconColor');
            general.prepend(icon);
        } else if (viewName === 'TODAY') {
            let today = document.getElementById('TODAY')
            let icon = document.createElement('img');
            icon.src = 'today.svg';
            icon.classList.add('todayIcon');
            icon.classList.add('iconColor');
            today.prepend(icon)
        } else if (viewName === 'UPCOMING') {
            let upcoming = document.getElementById("UPCOMING")
            let icon = document.createElement('img');
            icon.src = 'next-week.svg';
            icon.classList.add('upcomingIcon');
            icon.classList.add('iconColor');
            upcoming.prepend(icon);
        }
        button.addEventListener('click', () => {
            setView(viewName);
        })
    })
}

function renderSidebarProjectListTitle() {
    const divider = document.createElement('div');
    sidebar.appendChild(divider);
    divider.textContent = ' ';
    divider.classList.add('sidebarItem');
    divider.setAttribute('class', 'divider');
    const title = document.createElement('div');
    title.classList.add('projects');
    title.classList.add('sidebarItem');
    title.textContent = 'PROJECT LIST';
    sidebar.appendChild(title);
}

function renderSidebarProjectList(projects) {
    addAllProjectsToSidebar(projects);
}

function renderNewProjectBtn() {
    const button = document.createElement('div');
    button.classList.add('sidebarItem');
    button.classList.add('addProject');
    if (ACTIVE_VIEW.includes('PROJECT')) {
        button.textContent = 'Back to GENERAL'
    } else {
        button.textContent = '+ ADD PROJECT';
    }
    sidebar.appendChild(button);
}