import { addedProjects } from "../project-creation/new-project";

let activeTodos = [];

function getActiveTodos(array) {
    for (let i = 0; i < array.length; i++) {
        let todoList = array[i].todos;
        for (let j = 0; j < todoList.length; j++) {
            activeTodos.push(todoList[j]);
        }
    }
}

export default function sortTodoDates(array) {
    getActiveTodos(addedProjects);
    let sortedTodos = array.sort((a, b) => 
    (a.dueDate > b.dueDate) ? 1 : (a.dueDate < b.dueDate) ? -1 : 0);
    for (let i = 0; i < array.length; i++) {
        array[i] = sortedTodos[i];
    }
}

function clearActiveTodos() {
    activeTodos = [];
}

export { activeTodos, clearActiveTodos };