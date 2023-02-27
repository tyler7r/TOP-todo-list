import { addedProjects } from "./new-project";

//only works after clicking one of the tab buttons, which triggers re-render
// need to work on making it work after adding a new project

export default function sortDates() {
    let sortedProjects = addedProjects.sort((a, b) => 
    (a.dueDate > b.dueDate) ? 1 : (a.dueDate < b.dueDate) ? -1 : 0);
    for (let i = 0; i < addedProjects.length; i++) {
        addedProjects[i] = sortedProjects[i];
    }
    console.log(addedProjects);
}

