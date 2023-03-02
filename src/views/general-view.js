import addEllipsisFunctionality from '../project-creation/edit-project';
import expandProjectCard, { titleClick } from '../project-creation/expand-project';
import addAllProjectsToDOM from '../project-creation/allProjects-to-DOM';
import addProjectBtn, { addedProjects } from '../project-creation/new-project';
import completedTask from '../shared-creation.js/completed-task';
import { ACTIVE_VIEW } from '../state';

function renderProjectSection() {
    renderProjectCards(addedProjects);
    initializeProjectCardFunctionality();
    renderNewContentProjectBtn();
    addProjectBtn();
}

function renderProjectCards(array) {
    const content = document.querySelector('.content')
    const projectSection = document.createElement('div');
    projectSection.classList.add('projectSection');
    const projectSectionTitle = document.createElement('div');
    projectSectionTitle.classList.add('projectSectionTitle');
    projectSectionTitle.textContent = 'PROJECTS'
    projectSection.appendChild(projectSectionTitle);
    content.prepend(projectSection);
    addAllProjectsToDOM(array);
}

function initializeProjectCardFunctionality() {
    let projects = document.querySelectorAll('.projectCard');
    projects.forEach((project) => {
        project.addEventListener('click', () => {
            projectCardFunctionality();
        })
    })
}

function projectCardFunctionality() {
    addEllipsisFunctionality();
    expandProjectCard();
    titleClick();
    completedTask('project');
}

export function renderNewContentProjectBtn() {
    const content = document.querySelector('.content');
    const button = document.createElement('div');
    button.classList.add('generalAddProject');
    button.classList.add('addProject');
    if (ACTIVE_VIEW.includes('PROJECT')) {
        button.textContent = 'Back to GENERAL'
    } else {
        button.textContent = '+ ADD PROJECT';
    }
    content.appendChild(button);
}

export { renderProjectSection, renderProjectCards, initializeProjectCardFunctionality };