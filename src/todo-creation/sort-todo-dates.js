import { addedProjects } from "../project-creation/new-project";

let activeTodoLists = [];
let activeArray = [];
let activeTodos = [];

function getActiveTodos(array) {
    for (let i = 0; i < array.length; i++) {
        let todoList = array[i].todos;
        console.log(todoList);
        for (let j = 0; j < todoList.length; j++) {
            activeTodos.push(todoList[j]);
        }
    }
    console.log(activeTodos);
}

export default function sortTodoDates(array) {
    let sortedTodos = array.sort((a, b) => 
    (a.dueDate > b.dueDate) ? 1 : (a.dueDate < b.dueDate) ? -1 : 0);
    for (let i = 0; i < array.length; i++) {
        array[i] = sortedTodos[i];
    }
    array = [];
}

export { activeTodos };