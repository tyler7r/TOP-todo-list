const projectSection = document.querySelector('.projectSection');
const projectSideBarSection = document.querySelector('.projects');

export default function addProjectToContent(array) {
    for (let i = (array.length-1); i < array.length; i++) {
        let projectList = array[i];
        let projectCard = document.createElement('div');
        projectCard.classList.add(`projectCard`);
        projectCard.classList.add(`no${[i+1]}`);
        projectSection.appendChild(projectCard);

        const projectSelect = document.querySelector('.no'+[i+1]);

        for (let prop in projectList) {
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
        let ellipsis = document.createElement('img');
        ellipsis.classList.add('ellipsis');
        ellipsis.setAttribute('id', `e${[i+1]}`);
        ellipsis.src = 'ellipsis.svg';
        projectSelect.appendChild(ellipsis);
    }
}

function addProjectToSidebar(array) {
    for (let i = (array.length-1); i < array.length; i++) {
        let projectList = array[i]
        let projectTab = document.createElement('div');
        projectTab.classList.add(`projectTab`);
        projectTab.classList.add(`no${[i+1]}`);
        projectSideBarSection.appendChild(projectTab);

        const projectTabSelect = document.querySelector('.no'+[i+1]);

        for (let prop in projectList) {
            if (prop === 'title') {
                let projectTabElement = document.createElement('div');
                projectTabElement.classList.add(`projectTab${prop}`);
                projectTabElement.textContent = projectList[prop];
                projectTabSelect.appendChild(projectTabElement);
            }
        }
        let sidebarDelete = document.createElement('img');
        sidebarDelete.classList.add('sidebarDelete');
        sidebarDelete.setAttribute('id', `sidebarD${[i+1]}`);
        sidebarDelete.src = 'delbtn.svg';
        projectTabSelect.appendChild(sidebarDelete);
    }
}

export { addProjectToSidebar };