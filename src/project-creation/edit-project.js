import { addedProjects } from "./new-project";
import createEditForm from "./edit-form.js";
import hideDetails from "./details-toggle.js";
import setView, { removeProject } from "../state";

export default function addEllipsisFunctionality() {
    const ellipsis = document.querySelectorAll('.projectellipsis');
    let popUpOpen = false;
    ellipsis.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectCard = document.querySelector(`.projectCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            if (projectCard.contains(document.querySelector(`.popupMenu.no${e.target.id.slice(lastChar)}`)) === false) {
                const popupMenu = document.createElement('div');
                popupMenu.classList.add(`popupMenu`);
                popupMenu.classList.add(`no${e.target.id.slice(lastChar)}`) 
                const deleteBtn = document.createElement('div');
                deleteBtn.classList.add('popupDelete');
                deleteBtn.setAttribute('id',`del${e.target.id.slice(lastChar)}`);
                deleteBtn.textContent = 'DELETE';
                popupMenu.appendChild(deleteBtn);
                const editBtn = document.createElement('div');
                editBtn.classList.add('popupEdit');
                editBtn.textContent = 'EDIT';
                editBtn.setAttribute('id', `edit${e.target.id.slice(lastChar)}`);
                popupMenu.appendChild(editBtn);
                projectCard.appendChild(popupMenu);
                popUpOpen = true;
                deleteProject();
                editProject(e.target.id.slice(lastChar));
            } else if (popUpOpen === true || projectCard.classList.contains(`.editMode`)) {
                const menuSelect = document.querySelector(`.popupMenu.no${e.target.id.slice(lastChar)}`);
                menuSelect.classList.add('hidden');
                popUpOpen = false;
            } else if (popUpOpen === false && projectCard.contains(document.querySelector(`.popupMenu.no${e.target.id.slice(lastChar)}`))) {
                const menuSelect = document.querySelector(`.popupMenu.no${e.target.id.slice(lastChar)}`);
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
            const parent = document.querySelector(`.${e.target.parentElement.parentElement.className.slice(0,11)}`);
            let lastChar = (e.target.id).length - 1;
            const projectNo = (e.target.id.slice(lastChar)) - 1;
            parent.classList.add('removedItem');
            setTimeout(() => {
                removeProject(addedProjects, projectNo);
            }, 750)
        })
    })
}

function sidebarDeleteFunctionality() {
    const sidebarDeleteBtn = document.querySelectorAll('.sidebarDelete');
    sidebarDeleteBtn.forEach((icon) => {
        icon.addEventListener('click' , (e) => {
            const lastChar = (e.target.id).length - 1;
            e.stopImmediatePropagation();
            const projectNo = (e.target.id.slice(lastChar)) - 1;
            setView('GENERAL')
            removeProject(addedProjects, projectNo);
        })
    })
    sidebarDeleteBtn.forEach((icon) => {
        icon.addEventListener('mouseover', (e) => {
            e.stopImmediatePropagation();
            let deleteBtn = document.querySelector(`#${e.target.id}`);
            deleteBtn.classList.add('hovered');
        })
        icon.addEventListener('mouseout', (e) => {
            e.stopImmediatePropagation();
            let deleteBtn = document.querySelector(`#${e.target.id}`);
            deleteBtn.classList.remove('hovered');
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
            const popupMenu = document.querySelector(`.popupMenu.no${cardNo}`)
            popupMenu.classList.add('hidden');
            projectSelect.classList.add('editMode');
            hideDetails('project', cardNo);
            createEditForm((e.target.id.slice(lastChar)));
        })
    })
}

export { sidebarDeleteFunctionality };

