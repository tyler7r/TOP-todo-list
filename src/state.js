import { addedProjects } from "./project-creation/new-project";
import { renderProjectSection } from "./views/general-view.js"; 
import renderSidebar from './views/sidebar.js'
import renderTodaySection from "./views/today-view";
import renderUpcomingSection from "./views/upcoming-view";
import sortDates from "./project-creation/sort-project-dates";
import renderProjectView from "./views/project-view";
import sortTodoDates, { activeTodos } from "./todo-creation/sort-todo-dates";

let ACTIVE_VIEW = 'GENERAL';
let PROJECT_VIEW;

export default function setView(view) {
    ACTIVE_VIEW = view;
    render();
}

function setProjectView(projectNo) {
    PROJECT_VIEW = projectNo;
    setView(`PROJECT${PROJECT_VIEW}`);
}

function render(){
    sortDates();
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
        case `PROJECT${PROJECT_VIEW}`:
            renderProjectView();
            break;
        default:
            break;
    }
}

function removeProject(array, project) {
    array.splice(project, 1);
    render();
}

function removeTodo(array, todo) {
    array.splice(todo, 1);
    render();
}

export { removeProject, setProjectView, PROJECT_VIEW, ACTIVE_VIEW, removeTodo };
// update state, rerender after each update, triggers change in view




// update view based on state




