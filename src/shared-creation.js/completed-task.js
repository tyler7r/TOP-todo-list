import { removeProject, removeTodo, PROJECT_VIEW } from "../state";
import { addedProjects } from "../project-creation/new-project";

export default function completedTask(taskType) {
    const checkmarks = document.querySelectorAll(`.${taskType}checkmark`);
    checkmarks.forEach((check) => {
        check.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            let lastChar = (e.target.id).length - 1;
            const taskNo = (e.target.id.slice(lastChar)) - 1;
            if (taskType === 'todo') {
                const parent = document.querySelector(`.${e.target.parentElement.className.slice(0,8)}`);
                check.classList.remove('checkmark-color');
                check.classList.add('completed-checkmark');
                parent.classList.add('removedItem');
                setTimeout(() => {
                    removeTodo(addedProjects[PROJECT_VIEW-1].todos, taskNo);
                }, 750);
            } else if (taskType === 'project') {
                const parent = document.querySelector(`.${e.target.parentElement.className.slice(0,11)}`);
                check.classList.remove('checkmark-color');
                check.classList.add('completed-checkmark');
                parent.classList.add('removedItem');
                setTimeout(() => {
                    removeProject(addedProjects, taskNo);
                }, 750);
            }
        })
        check.addEventListener('mouseover', (e) => {
            e.stopImmediatePropagation();
            const check = document.querySelector(`#${e.target.id}`);
            check.classList.remove('checkmark-color');
            check.classList.add('completed-checkmark');
        })
        check.addEventListener('mouseout', (e) => {
            e.stopImmediatePropagation();
            const check = document.querySelector(`#${e.target.id}`);
            check.classList.add('checkmark-color');
            check.classList.remove('completed-checkmark');
        })
    })
}