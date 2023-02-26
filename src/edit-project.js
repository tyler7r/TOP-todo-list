import { addedProjects, Project, clearFormEntry } from "./new-project";
import addProjectToContent, { addProjectToSidebar} from "./newProject-to-DOM";
import createEditForm from "./edit-form.js";
import hideDetails from "./details-toggle.js";

export default function addEllipsisFunctionality() {
    const ellipsis = document.querySelectorAll('.ellipsis');
    let popUpOpen = false;
    ellipsis.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectCard = document.querySelector(`.projectCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            if (projectCard.contains(document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`)) === false) {
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
                popUpOpen = true;
                deleteProject();
                editProject(e.target.id.slice(lastChar));
            } else if (popUpOpen === true || projectCard.classList.contains(`.editMode`)) {
                const menuSelect = document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`);
                menuSelect.classList.add('hidden');
                popUpOpen = false;
            } else if (popUpOpen === false && projectCard.contains(document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`))) {
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
            createEditForm((e.target.id.slice(lastChar)));
            hideDetails(cardNo);
        })
    })
}

export { sidebarDeleteFunctionality };

