const projectSection = document.querySelector('.projectSection');
const projectSideBarSection = document.querySelector('.projects');

export default function addProjectToContent(array) {
    for (let i = (array.length-1); i < array.length; i++) {
        let projectList = array[i];
        let projectCard = document.createElement('div');
        projectCard.classList.add(`projectCard`);
        projectCard.classList.add(`no${[i+1]}`);
        projectSection.appendChild(projectCard);

        for (let prop in projectList) {
            const projectSelect = document.querySelector('.no'+[i+1]);
            let projectElement = document.createElement('div');
            projectElement.classList.add(`project${prop}`);
            projectSelect.appendChild(projectElement);
            if (prop === 'priority') {
                projectElement.classList.add(`${projectList[prop]}`);
                projectElement.textContent = '';
            } else {
                projectElement.textContent += projectList[prop];
            }
        }
    }
}

function addProjectToSidebar(array) {
    for (let i = (array.length-1); i < array.length; i++) {
        let projectList = array[i]
        let projectTab = document.createElement('div');
        projectTab.classList.add(`projectTab`);
        projectTab.classList.add(`no${[i+1]}`);
        projectSideBarSection.appendChild(projectTab);

        for (let prop in projectList) {
            const projectTabSelect = document.querySelector('.no'+[i+1]);
            if (prop === 'title' || prop === 'dueDate') {
                let projectTabElement = document.createElement('div');
                projectTabElement.classList.add(`projectTab${prop}`);
                projectTabElement.textContent = projectList[prop];
                projectTabSelect.appendChild(projectTabElement);
            }
        }
    }
}

export { addProjectToSidebar };