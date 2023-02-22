export default function addEllipsisFunctionality() {
    let popUpOpen = false;
    const ellipsis = document.querySelectorAll('.ellipsis');
    ellipsis.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            if (popUpOpen === true) {
                return
            }
            const projectCard = document.querySelector(`.projectCard.no${e.target.id.slice(1)}`);
            e.stopImmediatePropagation();
            const popupMenu = document.createElement('div');
            popupMenu.classList.add('popupMenu');
            const deleteBtn = document.createElement('div');
            deleteBtn.classList.add('popupDelete');
            deleteBtn.setAttribute('id',`d${e.target.id.slice(1)}`);
            deleteBtn.textContent = 'Delete';
            popupMenu.appendChild(deleteBtn);
            const editBtn = document.createElement('div');
            editBtn.classList.add('popupEdit');
            editBtn.textContent = 'Edit';
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
            const projectSelect = document.querySelectorAll(`.no${e.target.id.slice(1)}`);
            projectSelect.forEach((object) => {
                object.classList.add('hidden');
            })
            // const projectCard = document.querySelector(`.projectCard.no${e.target.id.slice(1)}`);
        })
    })
}

