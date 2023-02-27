import addEllipsisFunctionality from '../edit-project';
import expandProjectCard from '../expand-project';
import addAllProjectsToDOM from '../allProjects-to-DOM';
import { addedProjects } from '../new-project';

function renderProjectSection() {
    renderProjectCards();
    initializeProjectCardFunctionality();
}

function renderProjectCards() {
    const content = document.querySelector('.content')
    const projectSection = document.createElement('div');
    projectSection.classList.add('projectSection');
    content.appendChild(projectSection);
    addAllProjectsToDOM(addedProjects);
}

function initializeProjectCardFunctionality() {
    let projects = document.querySelectorAll('.projectCard');
    projects.forEach((project) => {
        project.addEventListener('click', (e) => {
            let lastChar = e.target.className.length - 1
            let cardNo = e.target.className.slice(lastChar);
            projectCardFunctionality();
        })
    })
}

function projectCardFunctionality() {
    addEllipsisFunctionality();
    expandProjectCard();
}

export { renderProjectSection };