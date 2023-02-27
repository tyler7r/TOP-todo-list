import { addedProjects } from "../project-creation/new-project";
// array is the todos array from project object
export default function addTodoToDOM(array) {
    const projectView = document.querySelector('.todos');
    if (array.length > 0) {
        for (let i = (array.length-1); i < array.length; i++) {
            let todoList = array[i];
            let todoCard = document.createElement('div');
            projectView.appendChild(todoCard);
            todoCard.classList.add('todoCard');
            todoCard.classList.add(`no${[i+1]}`);

            const cardSelect = document.querySelector('.todoCard.no'+[i+1]);

            for (let prop in todoList) {
                let todoElement = document.createElement('div');
                todoElement.classList.add(`todo${prop}`);
                cardSelect.appendChild(todoElement);
                if (prop === 'priority') {
                    todoElement.classList.add(`${todoList[prop]}`);
                    todoElement.textContent = '';
                } else if (prop === 'description') {
                    todoElement.classList.add(`hidden`);
                    todoElement.textContent += todoList[prop];
                } 
                else {
                    todoElement.textContent += todoList[prop];
                }
                todoElement.classList.add(`no${[i+1]}`);
            }
            let ellipsis = document.createElement('img');
            ellipsis.classList.add('todoEllipsis');
            ellipsis.setAttribute('id', `e${[i+1]}`);
            ellipsis.src = 'ellipsis.svg';
            cardSelect.appendChild(ellipsis);
        }
    }
}

export function addAllTodosToDOM(array) {
    const projectView = document.querySelector('.todos');
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            let todoList = array[i];
            let todoCard = document.createElement('div');
            projectView.appendChild(todoCard);
            todoCard.classList.add('todoCard');
            todoCard.classList.add(`no${[i+1]}`);

            const cardSelect = document.querySelector('.todoCard.no'+[i+1]);

            for (let prop in todoList) {
                let todoElement = document.createElement('div');
                todoElement.classList.add(`todo${prop}`);
                cardSelect.appendChild(todoElement);
                if (prop === 'priority') {
                    todoElement.classList.add(`${todoList[prop]}`);
                    todoElement.textContent = '';
                } else if (prop === 'description') {
                    todoElement.classList.add(`hidden`);
                    todoElement.textContent += todoList[prop];
                } 
                else {
                    todoElement.textContent += todoList[prop];
                }
                todoElement.classList.add(`no${[i+1]}`);
            }
            let ellipsis = document.createElement('img');
            ellipsis.classList.add('todoEllipsis');
            ellipsis.setAttribute('id', `e${[i+1]}`);
            ellipsis.src = 'ellipsis.svg';
            cardSelect.appendChild(ellipsis);
        }
    }
}