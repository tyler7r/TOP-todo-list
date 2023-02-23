export default function addEllipsisFunctionality() {
    let popUpOpen = false;
    const ellipsis = document.querySelectorAll('.ellipsis');
    ellipsis.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            if (popUpOpen === true) {
                return
            }
            const projectCard = document.querySelector(`.projectCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            const popupMenu = document.createElement('div');
            popupMenu.classList.add('popupMenu');
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
            popUpOpen = true;
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

function sidebarEllipsisFunctionality() {
    let popupOpen = false;
    const ellipsis = document.querySelectorAll('.sidebarEllipsis');
    ellipsis.forEach((icon) => {
        icon.addEventListener('click' , (e) => {
            if (popupOpen === true) {
                return
            }
            let lastChar = (e.target.id).length - 1;
            const projectTab = document.querySelector(`.projectTab.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            const deleteBtn = document.createElement('div');
            deleteBtn.classList.add('popupDelete');
            deleteBtn.setAttribute('id',`sdel${e.target.id.slice(lastChar)}`);
            deleteBtn.textContent = 'Delete';
            projectTab.appendChild(deleteBtn);
            deleteProject();
            popupOpen = true;
        })
    })
}

function editProject() {

}

export { sidebarEllipsisFunctionality };

