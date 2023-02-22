export default function Project(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

function addProjectBtn() {
    let addProjectBtn = document.querySelector('.addProject');
    addProjectBtn.addEventListener('click', () => {
        
    })
}

export { addProjectBtn };