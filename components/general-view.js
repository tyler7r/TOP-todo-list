import hideDetails, { revealDetails } from 'details-toggle.js';
import createEditForm from '../src/edit-form.js';
import addEllipsisFunctionality from '../src/edit-project.js';
import expandProjectCard from '../src/expand-project.js';
import addProjectToContent from '../src/project-to-DOM.js';
import { setView } from '../src/state.js';
import { addedProjects } from '../src/new-project.js';

const content = document.querySelector('.content')

export function renderProjectSection() {
    setView(GENERAL);
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