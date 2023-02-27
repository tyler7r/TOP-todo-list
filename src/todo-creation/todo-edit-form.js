import { addedProjects, Project } from '../project-creation/new-project';

import { revealDetails } from '../project-creation/details-toggle';
import setView, { PROJECT_VIEW }from '../state';
import { Todo } from './new-todo';

export default function createTodoEditForm(cardNo) {
    const projectSelect = document.querySelector(`.todoCard.no${cardNo}`);
    if (projectSelect.contains(document.querySelector(`.editForm.no${cardNo}`)) === false) {
        projectSelect.classList.add('editMode');
        let projectInfo = (addedProjects[PROJECT_VIEW-1].todos[cardNo-1]);
        console.log(projectInfo);
        const editForm = document.createElement('form');
        editForm.setAttribute('method', 'get');
        editForm.classList.add('editForm');
        editForm.classList.add(`no${cardNo}`);
        projectSelect.appendChild(editForm);
        for (let prop in projectInfo) {
            if (prop === 'priority') {
                let div = document.createElement('div');
                div.classList.add('todoPriorityDiv');
                editForm.appendChild(div);
                let label = document.createElement('label');
                label.setAttribute('for', `todo${prop}`);
                label.textContent = 'Priority Level'
                div.appendChild(label);
                let selectMenu = document.createElement('select');
                selectMenu.setAttribute('name', 'todopriority');
                selectMenu.setAttribute('id', 'todopriority');
                selectMenu.setAttribute('class', `no${cardNo}`)
                div.appendChild(selectMenu);
                let lowOption = document.createElement('option');
                lowOption.setAttribute('value', 'low');
                lowOption.textContent = 'Low';
                selectMenu.appendChild(lowOption);
                let mediumOption = document.createElement('option');
                mediumOption.setAttribute('value', 'medium');
                mediumOption.textContent = 'Medium';
                selectMenu.appendChild(mediumOption);
                let highOption = document.createElement('option');
                highOption.setAttribute('value', 'high');
                highOption.textContent = 'High';
                selectMenu.appendChild(highOption); 
            } else if (prop === 'dueDate') {
                let div = document.createElement('div');
                div.classList.add('todoDueDateDiv');
                editForm.appendChild(div)
                let label = document.createElement('label');
                label.setAttribute('for', `todo${prop}`);
                label.textContent = 'Due Date';
                div.appendChild(label);
                let date = document.createElement('input');
                date.setAttribute('type', 'date');
                date.setAttribute('name', `todo${prop}`);
                date.setAttribute('id', `todo${prop}`);
                date.setAttribute('class', `no${cardNo}`)
                div.appendChild(date);
            } else if (prop === 'title') {
                let div = document.createElement('div');
                div.classList.add('todoTitleDiv');
                editForm.appendChild(div);
                let label = document.createElement('label');
                label.setAttribute('for', `todo${prop}`);
                label.textContent = 'Title';
                div.appendChild(label);
                let input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('id', 'todoprojectTitle');
                input.setAttribute('class', `no${cardNo}`)
                input.setAttribute('name', `todo${prop}`);
                div.appendChild(input);
            } else if (prop === 'todos') {
                continue;
            } else {
                let div = document.createElement('div');
                div.classList.add('todoDescriptionDiv');
                editForm.appendChild(div);
                let label = document.createElement('label');
                label.setAttribute('for', `todo${prop}`);
                label.textContent = 'Description';
                div.appendChild(label);
                let input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.setAttribute('name', `todo${prop}`);
                input.setAttribute('id', `todo${prop}`);
                input.setAttribute('class', `no${cardNo}`)
                div.appendChild(input);
            }
        }
        let submitEdit = document.createElement('button');
        editForm.appendChild(submitEdit);
        submitEdit.setAttribute('class', 'submitProject');
        submitEdit.setAttribute('id', `no${cardNo}`);
        submitEdit.textContent = 'Done';
        submitEdit.addEventListener('click', (e) => {
            e.preventDefault();
            const title = document.querySelector(`#todoprojectTitle.no${cardNo}`).value;
            const description = document.querySelector(`#tododescription.no${cardNo}`).value;
            const dueDate = document.querySelector(`#tododueDate.no${cardNo}`).value;
            const priority = document.querySelector(`#todopriority.no${cardNo}`).value;
            let editedTodo = new Todo(title, description, dueDate, priority);
            addedProjects[PROJECT_VIEW-1].todos[cardNo-1] = editedTodo;
            editForm.classList.add('hidden');
            projectSelect.classList.remove('editMode');
            revealDetails('todo', cardNo);
            setView(`PROJECT${PROJECT_VIEW}`);
        })
    } else if (projectSelect.contains(document.querySelector(`.editForm.no${cardNo}`))) {
        const editForm = document.querySelector(`.editForm.no${cardNo}`);
        editForm.classList.remove('hidden');
        projectSelect.classList.add('editMode');
    }
}