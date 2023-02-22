export default function addProjectBtn() {
    let addProjectBtn = document.querySelector('.addProject');
    addProjectBtn.addEventListener('click', () => {
        const projectForm = document.querySelector('.projectForm')
        projectForm.classList.remove('hidden');
        submitNewProject();
    })
}

function Project(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

function submitNewProject() {
    const submitProjectBtn = document.querySelector('#submitProject');
    submitProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        newProjectInfo();
    })
}

function newProjectInfo() {
    const title = document.querySelector('#projectTitle').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    let newProject = new Project(title, description, dueDate, priority);
    console.log(newProject);
    return title, description, dueDate, priority, newProject;
}