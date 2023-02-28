import { setProjectView } from "../state";
export default function expandProjectCard() {
    const projectCards = document.querySelectorAll('.projectCard');
    projectCards.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            let lastChar = (e.target.className).length - 1;
            if (e.target.classList.contains('projectCard') === false) {
                return
            }
            const projectSelect = document.querySelector(`.projectCard.no${e.target.className.slice(lastChar)}`);
            if (projectSelect.classList.contains('editMode')) {
                return
            }
            else {
                let todoList = document.querySelector(`.todoList.no${e.target.className.slice(lastChar)}`);
                todoList.classList.toggle('hidden');
            }
        })
    })
}

function titleClick() {
    const projectCards = document.querySelectorAll('.projecttitle');
    projectCards.forEach((title) => {
        title.addEventListener('click', (e) => {
            let lastChar = (e.target.className).length - 1;
            e.stopImmediatePropagation();
            setProjectView(e.target.className.slice(lastChar));
        })
    })
}

export { titleClick }