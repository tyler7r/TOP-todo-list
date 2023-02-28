import { removeProject, removeTodo, PROJECT_VIEW } from "../state";
import { addedProjects } from "../project-creation/new-project";

export default function completedTask(taskType) {
    let checkmarks = document.querySelectorAll(`.${taskType}checkmark`);
    checkmarks.forEach((check) => {
        check.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            let lastChar = (e.target.id).length - 1;
            const taskNo = (e.target.id.slice(lastChar)) - 1;
            if (taskType === 'todo') {
                removeTodo(addedProjects[PROJECT_VIEW-1].todos, taskNo);
            } else if (taskType === 'project') {
                removeProject(addedProjects, taskNo);
            }
        })
    })
}