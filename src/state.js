import { addedProjects } from "./new-project";
import { renderProjectSection } from "./views/general-view.js"; 
import renderSidebar from './views/sidebar.js'

const PROJECTS = addedProjects;

let ACTIVE_VIEW = 'GENERAL';

// export function addProject(project) {
//     PROJECTS.push(project);
//     const lastIndex = PROJECTS.lenght -1;
//     render();
//     return lastIndex
// }

// export function editProject(oldProject, newProject) {
//     const index = PROJECTS.findIndex(oldProject);
//     PROJECTS[index] = newProject;
//     render();
//     return index
// }

// export function removeProject(project) {
//     const index = PROJECTS.findIndex(project);
//     const [removed] = PROJECTS.splice(index, 1);
//     render();
//     return removed
// }

export default function setView(view) {
    ACTIVE_VIEW = view;
    render();
}

function render(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.replaceChildren();
    renderSidebar();

    const content = document.querySelector('.content');
    content.replaceChildren();

    switch (ACTIVE_VIEW) {
        case 'GENERAL':
            console.log('GENERAL works');
            renderProjectSection();
            break;
        case 'TODAY':
            renderTodaySection();
            break;
        case 'UPCOMING':
            renderUpcomingSection();
            break;
        default:
            break;
    }
}
// update state, rerender after each update, triggers change in view




// update view based on state




