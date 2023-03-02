import { renderProjectSection } from "./views/general-view.js"; 
import renderSidebar from './views/sidebar.js'
import renderTodaySection from "./views/today-view";
import renderUpcomingSection from "./views/upcoming-view";
import sortDates from "./project-creation/sort-project-dates";
import renderProjectView from "./views/project-view";
import { addedProjects } from "./project-creation/new-project.js";

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
    localStorage.setItem('masterList', JSON.stringify(addedProjects));

    sortDates();
    const content = document.querySelector('.content');
    content.replaceChildren();

    const sidebar = document.querySelector('.sidebar');
    sidebar.replaceChildren();
    renderSidebar();

    const viewButtons = document.querySelectorAll('.viewButton');
    viewButtons.forEach((button) => {
        if (ACTIVE_VIEW === button.textContent) {
            button.classList.add('buttonClicked');
        } else if (ACTIVE_VIEW !== button.textContent) {
            button.classList.remove('buttonClicked');
        }
    })

    const projectTabs = document.querySelectorAll('.tabtitle.projecttitle');
    projectTabs.forEach((tab) => {
        let lastTabChar = tab.className.length - 1;
        let tabNo = tab.className.slice(lastTabChar);
        let lastViewChar = ACTIVE_VIEW.length - 1;
        let viewNo = ACTIVE_VIEW.slice(lastViewChar);
        if (viewNo === tabNo) {
            tab.classList.add('buttonClicked')
        } else if (viewNo !== tabNo) {
            tab.classList.remove('buttonClicked');
        }
    })

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
function addProject(array, project) {
    array.push(project);
    render();
}

// function addTodo(array, todo) {
//     array.push(todo);
//     render();
// }

function removeProject(array, project) {
    array.splice(project, 1);
    render();
}

function removeTodo(array, todo) {
    array.splice(todo, 1);
    render();
}

export { addProject, removeProject, setProjectView, PROJECT_VIEW, ACTIVE_VIEW, removeTodo };




