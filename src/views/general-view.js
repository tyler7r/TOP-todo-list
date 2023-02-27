import addEllipsisFunctionality from '../edit-project';
import expandProjectCard from '../expand-project';
import addAllProjectsToDOM from '../allProjects-to-DOM';
import { addedProjects } from '../new-project';

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
}

export { renderProjectSection, renderProjectCards, initializeProjectCardFunctionality };