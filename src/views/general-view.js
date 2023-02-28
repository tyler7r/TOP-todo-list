import addEllipsisFunctionality from '../project-creation/edit-project';
import expandProjectCard, { titleClick } from '../project-creation/expand-project';
import addAllProjectsToDOM from '../project-creation/allProjects-to-DOM';
import { addedProjects } from '../project-creation/new-project';

function renderProjectSection() {
    renderProjectCards(addedProjects);
    initializeProjectCardFunctionality();
}

function renderProjectCards(array) {
    const content = document.querySelector('.content')
    const projectSection = document.createElement('div');
    projectSection.classList.add('projectSection');
    content.appendChild(projectSection);
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
}

export { renderProjectSection, renderProjectCards, initializeProjectCardFunctionality };