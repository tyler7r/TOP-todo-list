import { addedProjects } from "./new-project";
import { renderProjectSection } from "../components/general-view"; 
import renderSidebar from "../components/sidebar";

const PROJECTS = addedProjects;

let ACTIVE_VIEW = GENERAL;

export function addProject(project) {
    PROJECTS.push(project);
    const lastIndex = PROJECTS.lenght -1;
    render();
    return lastIndex
}

export function editProject(oldProject, newProject) {
    const index = PROJECTS.findIndex(oldProject);
    PROJECTS[index] = newProject;
    render();
    return index
}

export function removeProject(project) {
    const index = PROJECTS.findIndex(project);
    const [removed] = PROJECTS.splice(index, 1);
    render();
    return removed
}

export function setView(view) {
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
        case GENERAL:
            renderProjectSection();
            break;
        case TODAY:
            renderTodaySection();
            break;
        case UPCOMING:
            renderUpcomingSection();
            break;
        default:
            throw new Error(`${view} is not a valid view!`);
    }
}

setView();
// update state, rerender after each update, triggers change in view




// update view based on state

export { setView, VIEWS };




