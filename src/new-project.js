const projectForm = document.querySelector('.projectForm');
let addedProjects = [];

export default function addProjectBtn() {
    let addProjectBtn = document.querySelector('.addProject');
    addProjectBtn.addEventListener('click', () => {
        projectForm.classList.remove('hidden');
    })
}

function Project(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

const submitProjectBtn = document.querySelector('#submitProject');
submitProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newProjectInfo();
    projectForm.classList.add('hidden');
})

function newProjectInfo() {
    let newProject = new Project(projectTitle, description, dueDate, priority);
    addedProjects.push(newProject);
    newProject = '';
}  

export { addedProjects };