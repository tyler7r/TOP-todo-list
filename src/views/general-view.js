import hideDetails, { revealDetails } from '../details-toggle';
import createEditForm from '../edit-form';
import addEllipsisFunctionality from '../edit-project';
import expandProjectCard from '../expand-project';
import addProjectToContent from '../project-to-DOM';
import setView from '../state.js';
import { addedProjects } from '../new-project';

const content = document.querySelector('.content')

function renderProjectSection() {
    setView('GENERAL');
    renderProjectCards();
    initializeProjectCardFunctionality();
}

function renderProjectCards() {
    const projectSection = document.createElement('div');
    projectSection.classList.add('projectSection');
    content.appendChild(projectSection);
    addProjectToContent(addedProjects);
}

function initializeProjectCardFunctionality() {
    let projects = document.querySelectorAll('.projectCard');
    projects.forEach((project) => {
        project.addEventListener('click', (e) => {
            let lastChar = e.target.className.length - 1
            let cardNo = e.target.className.slice(lastChar);
            projectCardFunctionality(cardNo);
        })
    })
}

function projectCardFunctionality(cardNo) {
    addEllipsisFunctionality();
    expandProjectCard();
    revealDetails(cardNo);
    hideDetails(cardNo);
    createEditForm();
}

export { renderProjectSection };