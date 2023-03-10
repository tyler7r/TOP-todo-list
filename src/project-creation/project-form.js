export default function createProjectForm() {
    const content = document.querySelector('.content');
    const projectFormDiv = document.createElement('div');
    projectFormDiv.classList.add('projectForm');
    projectFormDiv.classList.add('hidden');
    content.appendChild(projectFormDiv);
    const projectForm = document.createElement('form');
    projectForm.setAttribute('method', 'get');
    projectForm.classList.add('editMode');
    projectFormDiv.appendChild(projectForm);
    const formTitle = document.createElement('div');
    formTitle.classList.add('projectFormTitle');
    formTitle.textContent = 'NEW PROJECT';
    projectForm.appendChild(formTitle);

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('titleDiv');
        projectForm.appendChild(titleDiv);
        let title = document.createElement('label');
        title.setAttribute('for', 'projectTitle');
        title.textContent = 'Title';
        titleDiv.appendChild(title);
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'projectTitle');
        titleInput.setAttribute('name', 'projectTitle');
        titleInput.classList.add('main');
        titleDiv.appendChild(titleInput);

        let formPriority = document.createElement('div');
        formPriority.classList.add('formPriority');  
        projectForm.appendChild(formPriority);
        let priority = document.createElement('label');
        priority.setAttribute('for', 'priority');
        priority.textContent = 'Priority Level';  
        formPriority.appendChild(priority);
        let selectMenu = document.createElement('select');
        selectMenu.setAttribute('name', 'priority');
        selectMenu.setAttribute('id', 'priority');
        selectMenu.classList.add('main');
        formPriority.appendChild(selectMenu);
        let lowOption = document.createElement('option');
        lowOption.setAttribute('value', 'low');
        lowOption.textContent = 'Low';
        selectMenu.appendChild(lowOption);
        let mediumOption = document.createElement('option');
        mediumOption.setAttribute('value', 'medium');
        mediumOption.textContent = 'Medium';
        selectMenu.appendChild(mediumOption);
        let highOption = document.createElement('option');
        highOption.setAttribute('value', 'high');
        highOption.textContent = 'High';
        selectMenu.appendChild(highOption); 

        let dueDateDiv = document.createElement('div');
        dueDateDiv.classList.add('dueDateDiv');
        projectForm.appendChild(dueDateDiv);
        let dueDate = document.createElement('label');
        dueDate.setAttribute('for', 'dueDate');
        dueDate.textContent = 'Due Date';
        dueDateDiv.appendChild(dueDate);
        let date = document.createElement('input');
        date.setAttribute('type', 'date');
        date.setAttribute('name', 'dueDate');
        date.setAttribute('id', 'dueDate');
        date.classList.add('main');
        dueDateDiv.appendChild(date);

        let descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('descriptionDiv');
        projectForm.appendChild(descriptionDiv);
        let label = document.createElement('label');
        label.setAttribute('for', 'description');
        label.textContent = 'Description';
        descriptionDiv.appendChild(label);
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'description');
        input.setAttribute('id', 'description');
        input.classList.add('main');
        descriptionDiv.appendChild(input);

        let submitProject = document.createElement('button');
        submitProject.setAttribute('id', 'submitProject');
        submitProject.textContent = 'Add Project';
        projectForm.appendChild(submitProject);
}