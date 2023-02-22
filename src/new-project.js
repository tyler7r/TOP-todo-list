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
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach((input) => input.value = '');
    let priorityInput = document.querySelector('#priority');
    priorityInput.value = 'low';
})

function newProjectInfo() {
    const title = document.querySelector('#projectTitle').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    let newProject = new Project(title, description, dueDate, priority);
    addedProjects.push(newProject);
    // erasePreviousForm(title.value, description, dueDate, priority);
}  

// function erasePreviousForm (title, description, dueDate, priority) {
//     title = '';
//     description = '';
//     dueDate = '';
//     priority = '';
// }

export { addedProjects };