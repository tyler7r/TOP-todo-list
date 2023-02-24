import { addedProjects, Project } from './new-project.js';

export default function createEditForm(cardNo) {
    const projectSelect = document.querySelector(`.projectCard.no${cardNo}`)
    projectSelect.classList.add('editMode');
    let projectInfo = (addedProjects[cardNo-1]);
    const editForm = document.createElement('form');
    editForm.setAttribute('method', 'get');
    for (let prop in projectInfo) {
        const propClass = document.querySelector(`.project${prop}`);
        if (prop === 'priority') {
            let selectMenu = document.createElement('select');
            selectMenu.setAttribute('name', 'priority');
            selectMenu.setAttribute('id', 'priority');
            editForm.appendChild(selectMenu);
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
            let label = document.createElement('label');
            label.setAttribute('for', prop);
            label.textContent = prop;
            editForm.appendChild(label);
            let date = document.createElement('input');
            date.setAttribute('type', 'date');
            date.setAttribute('name', prop);
            date.setAttribute('id', prop);
            editForm.appendChild(date);
        } else if (prop === 'title') {
            let label = document.createElement('label');
            label.setAttribute('for', prop);
            label.textContent = prop;
            editForm.appendChild(label);
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('id', 'projectTitle');
            input.setAttribute('name', prop);
            editForm.appendChild(input);
        } else {
            let label = document.createElement('label');
            label.setAttribute('for', prop);
            label.textContent = prop;
            editForm.appendChild(label);
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', prop);
            input.setAttribute('id', prop);
            editForm.appendChild(input);
        }
    }
    let submitEdit = document.createElement('button');
    submitEdit.setAttribute('class', 'submitProject');
    submitEdit.setAttribute('id', `no${cardNo}`);
    submitEdit.textContent = 'Done';
    submitEdit.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(addedProjects[(cardNo)-1]);
        const title = document.querySelector('#projectTitle').value;
        const description = document.querySelector('#description').value;
        const dueDate = document.querySelector('#dueDate').value;
        const priority = document.querySelector('#priority').value;
        let editedProject = new Project(title, description, dueDate, priority);
        addedProjects[(cardNo)-1] = editedProject;
        editForm.classList.add('hidden');
        projectSelect.classList.remove('editMode');

        let projectNo = document.querySelectorAll(`.no${cardNo}`);
        for (let i = 0; i < projectNo.length; i++) {
            if (projectNo[i].classList.contains('projecttitle')) {
                projectNo[i].textContent = title;
            } else if (projectNo[i].classList.contains('projectdescription')) {
                projectNo[i].textContent = description;
            } else if (projectNo[i].classList.contains('dueDate')) {
                projectNo[i].textContent = dueDate;
            } else if (projectNo[i].classList.contains('priority')) {
                projectNo[i].classList.remove('low' || 'medium' || 'high');
                projectNo[i].textContent = priority;
                projectNo[i].classList.add(priority);
            }
        }
        
    })
    editForm.appendChild(submitEdit);
    projectSelect.appendChild(editForm);
}