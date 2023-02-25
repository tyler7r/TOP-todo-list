import { addedProjects } from "./new-project";
const PROJECTS = addedProjects;

const VIEWS = [ generalView, todayView, upcomingView ];

let activeView = generalView;

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
    activeView = view;
    render();
}

function render(){
    switch (activeView) {
        case generalView:
            renderProjectSection();
            break;
        case todayView:
            renderTodaySection();
            break;
        case upcomingView:
            renderUpcomingSection();
            break;
        default:
            throw new Error(`${view} is not a valid view!`);
    }
}

// update state, rerender after each update, triggers change in view




// update view based on state

export { setView, VIEWS };




