import { addedProjects } from "./new-project";
import { renderProjectSection } from "./views/general-view.js"; 
import renderSidebar from './views/sidebar.js'
import renderTodaySection from "./views/today-view";
import renderUpcomingSection from "./views/upcoming-view";

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


export default function setView(view) {
    ACTIVE_VIEW = view;
    render();
}

function render(){
    const content = document.querySelector('.content');
    content.replaceChildren();

    const sidebar = document.querySelector('.sidebar');
    sidebar.replaceChildren();
    renderSidebar();

    switch (ACTIVE_VIEW) {
        case 'GENERAL':
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

function removeProject(array, project) {
    array.splice(project, 1);
    render();
}

export { removeProject };
// update state, rerender after each update, triggers change in view




// update view based on state




