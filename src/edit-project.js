import { addedProjects, Project, clearFormEntry } from "./new-project";
import addProjectToContent, { addProjectToSidebar} from "./project-to-DOM";

export default function addEllipsisFunctionality() {
    const ellipsis = document.querySelectorAll('.ellipsis');
    let popUpOpen = false;
    let ellipsisClicked = false;
    ellipsis.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectCard = document.querySelector(`.projectCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            console.log(ellipsisClicked, popUpOpen);
            if (popUpOpen === false && ellipsisClicked === false) {
                const popupMenu = document.createElement('div');
                popupMenu.classList.add(`popupMenu${e.target.id.slice(lastChar)}`); 
                const deleteBtn = document.createElement('div');
                deleteBtn.classList.add('popupDelete');
                deleteBtn.setAttribute('id',`del${e.target.id.slice(lastChar)}`);
                deleteBtn.textContent = 'Delete';
                popupMenu.appendChild(deleteBtn);
                const editBtn = document.createElement('div');
                editBtn.classList.add('popupEdit');
                editBtn.textContent = 'Edit';
                editBtn.setAttribute('id', `edit${e.target.id.slice(lastChar)}`);
                popupMenu.appendChild(editBtn);
                projectCard.appendChild(popupMenu);
                deleteProject();
                editProject();
                popUpOpen = true;
                ellipsisClicked = true;
            } else if (popUpOpen === true) {
                const menuSelect = document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`);
                menuSelect.classList.add('hidden');
                ellipsisClicked = true;
                popUpOpen = false;
            } else if (popUpOpen === false && ellipsisClicked === true) {
                const menuSelect = document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`);
                menuSelect.classList.remove('hidden');
                popUpOpen = true;
            }
        })
    })
}

function deleteProject() {
    const deleteBtn = document.querySelectorAll('.popupDelete');
    deleteBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectSelect = document.querySelectorAll(`.no${e.target.id.slice(lastChar)}`);
            projectSelect.forEach((object) => {
                object.remove();
            })
        })
    })
}

function sidebarDeleteFunctionality() {
    const sidebarDeleteBtn = document.querySelectorAll('.sidebarDelete');
    sidebarDeleteBtn.forEach((icon) => {
        icon.addEventListener('click' , (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectSelect = document.querySelectorAll(`.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            projectSelect.forEach((object) => {
                object.remove();
            })
        })
    })
}

function editProject() {
    const editBtn = document.querySelectorAll('.popupEdit');
    editBtn.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectSelect = document.querySelector(`.projectCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            projectSelect.classList.add('editMode');
            let projectInfo = (addedProjects[(e.target.id.slice(lastChar)) - 1]);
            const editForm = document.createElement('form');
            editForm.setAttribute('method', 'get');
            for (let prop in projectInfo) {
                let propClass = document.querySelector(`.project${prop}`);
                propClass.remove();
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
            submitEdit.setAttribute('id', `no${(e.target.id.slice(lastChar))}`);
            submitEdit.textContent = 'Done';
            submitEdit.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(e.target.id.slice(2));
                const title = document.querySelector('#projectTitle').value;
                const description = document.querySelector('#description').value;
                const dueDate = document.querySelector('#dueDate').value;
                const priority = document.querySelector('#priority').value;
                let editedProject = new Project(title, description, dueDate, priority);
                addedProjects[(e.target.id.slice(2))-1] = editedProject;
                console.log(addedProjects);
                editForm.classList.add('hidden');
                projectSelect.classList.remove('editMode');
            })
            editForm.appendChild(submitEdit);
            projectSelect.appendChild(editForm);
        })
    })
}


function createEditForm() {

}

export { sidebarDeleteFunctionality };

