const projectSection = document.querySelector('.projectSection');

export default function addProjectsToDOM(array) {
    for (let i = (array.length-1); i < array.length; i++) {
        let projectList = array[i];
        let projectCard = document.createElement('div');
        projectCard.classList.add('projectCard');
        projectCard.setAttribute('id', `no${[i+1]}`);
        projectSection.appendChild(projectCard);

        for (let prop in projectList) {
            const projectSelect = document.querySelector('#no'+[i+1]);
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