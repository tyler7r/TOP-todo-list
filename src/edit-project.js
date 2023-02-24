import { addedProjects, Project, clearFormEntry } from "./new-project";
import addProjectToContent, { addProjectToSidebar} from "./project-to-DOM";
import createEditForm from "./first-draft-edit-button.js";

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
                editProject(e.target.id.slice(lastChar));
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

function editProject(cardNo) {
    const editBtn = document.querySelectorAll('.popupEdit');
    editBtn.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectSelect = document.querySelector(`.projectCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            const popupMenu = document.querySelector(`.popupMenu${cardNo}`)
            popupMenu.classList.add('hidden');
            projectSelect.classList.add('editMode');
            let description = document.querySelector(`.projectdescription.no${e.target.id.slice(lastChar)}`);
            description.classList.remove('hidden');
            createEditForm((e.target.id.slice(lastChar)));
            // clickToEdit(e.target.id.slice(lastChar));
        })
    })
}

function clickToEdit(cardNo) {
    let propList = addedProjects[0];
    for (let prop in propList) {
        let propSelect = document.querySelector(`.project${prop}.no${cardNo}`);
        propSelect.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            let initialValue = propSelect.textContent;
            propSelect.classList.add('hidden');

        })
    }
}

function displayPriorityMenu(cardNo) {
    const projectCard = document.querySelector(`.projectCard.no${cardNo}`);
    let selectMenu = document.createElement('select');
    selectMenu.setAttribute('name', 'priority');
    selectMenu.setAttribute('id', 'priority');
    projectCard.appendChild(selectMenu);
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
}

export { sidebarDeleteFunctionality };

