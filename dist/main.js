/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/details-toggle.js":
/*!*******************************!*\
  !*** ./src/details-toggle.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hideDetails),
/* harmony export */   "revealDetails": () => (/* binding */ revealDetails)
/* harmony export */ });
function hideDetails(cardNo) {
    const projectSelect = document.querySelector(`.projectCard.no${cardNo}`);
    const description = projectSelect.querySelector('.projectdescription');
    description.classList.add('hidden');
    const title = projectSelect.querySelector('.projecttitle');
    title.classList.add('hidden');
    const dueDate = projectSelect.querySelector('.projectdueDate');
    dueDate.classList.add('hidden');
    const ellipsis = projectSelect.querySelector('.ellipsis');
    ellipsis.classList.add('hidden')
}

function revealDetails(cardNo) {
    const projectSelect = document.querySelector(`.projectCard.no${cardNo}`);
    const description = projectSelect.querySelector('.projectdescription');
    description.classList.toggle('hidden');
    const title = projectSelect.querySelector('.projecttitle');
    title.classList.remove('hidden');
    const dueDate = projectSelect.querySelector('.projectdueDate');
    dueDate.classList.remove('hidden');
    const ellipsis = projectSelect.querySelector('.ellipsis');
    ellipsis.classList.remove('hidden');
}

/***/ }),

/***/ "./src/edit-form.js":
/*!**************************!*\
  !*** ./src/edit-form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEditForm)
/* harmony export */ });
/* harmony import */ var _new_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project.js */ "./src/new-project.js");
/* harmony import */ var _details_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-toggle */ "./src/details-toggle.js");




function createEditForm(cardNo) {
    const projectSelect = document.querySelector(`.projectCard.no${cardNo}`);
    if (projectSelect.contains(document.querySelector(`.editForm.no${cardNo}`)) === false) {
    projectSelect.classList.add('editMode');
    let projectInfo = (_new_project_js__WEBPACK_IMPORTED_MODULE_0__.addedProjects[cardNo-1]);
    const editForm = document.createElement('form');
    editForm.setAttribute('method', 'get');
    editForm.classList.add('editForm');
    editForm.classList.add(`no${cardNo}`);
    for (let prop in projectInfo) {
        if (prop === 'priority') {
            let selectMenu = document.createElement('select');
            selectMenu.setAttribute('name', 'priority');
            selectMenu.setAttribute('id', 'priority');
            selectMenu.setAttribute('class', `no${cardNo}`)
            editForm.appendChild(selectMenu);
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
        } else if (prop === 'dueDate') {
            let label = document.createElement('label');
            label.setAttribute('for', prop);
            label.textContent = prop;
            editForm.appendChild(label);
            let date = document.createElement('input');
            date.setAttribute('type', 'date');
            date.setAttribute('name', prop);
            date.setAttribute('id', prop);
            date.setAttribute('class', `no${cardNo}`)
            editForm.appendChild(date);
        } else if (prop === 'title') {
            let label = document.createElement('label');
            label.setAttribute('for', prop);
            label.textContent = prop;
            editForm.appendChild(label);
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('id', 'projectTitle');
            input.setAttribute('class', `no${cardNo}`)
            input.setAttribute('name', prop);
            editForm.appendChild(input);
        } else {
            let label = document.createElement('label');
            label.setAttribute('for', prop);
            label.textContent = prop;
            editForm.appendChild(label);
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('name', prop);
            input.setAttribute('id', prop);
            input.setAttribute('class', `no${cardNo}`)
            editForm.appendChild(input);
        }
    }
    let submitEdit = document.createElement('button');
    submitEdit.setAttribute('class', 'submitProject');
    submitEdit.setAttribute('id', `no${cardNo}`);
    submitEdit.textContent = 'Done';
    submitEdit.addEventListener('click', (e) => {
        e.preventDefault();
        const title = document.querySelector(`#projectTitle.no${cardNo}`).value;
        const description = document.querySelector(`#description.no${cardNo}`).value;
        const dueDate = document.querySelector(`#dueDate.no${cardNo}`).value;
        const priority = document.querySelector(`#priority.no${cardNo}`).value;
        let editedProject = new _new_project_js__WEBPACK_IMPORTED_MODULE_0__.Project(title, description, dueDate, priority);
        _new_project_js__WEBPACK_IMPORTED_MODULE_0__.addedProjects[(cardNo)-1] = editedProject;
        editForm.classList.add('hidden');
        projectSelect.classList.remove('editMode');
        (0,_details_toggle__WEBPACK_IMPORTED_MODULE_1__.revealDetails)(cardNo);

        let projectNo = document.querySelectorAll(`.no${cardNo}`);
        for (let i = 0; i < projectNo.length; i++) {
            if (projectNo[i].classList.contains('projecttitle')) {
                projectNo[i].textContent = title;
            } else if (projectNo[i].classList.contains('projectdescription')) {
                projectNo[i].textContent = description;
                projectNo[i].classList.add('hidden');
            } else if (projectNo[i].classList.contains('projectdueDate')) {
                projectNo[i].textContent = dueDate;
            } else if (projectNo[i].classList.contains('projectpriority')) {
                projectNo[i].classList.remove('low');
                projectNo[i].classList.remove('medium');
                projectNo[i].classList.remove('high');
                projectNo[i].classList.add(priority);
            }
        }
        
    })
    editForm.appendChild(submitEdit);
    projectSelect.appendChild(editForm);

} else if (projectSelect.contains(document.querySelector(`.editForm.no${cardNo}`))) {
    const editForm = document.querySelector(`.editForm.no${cardNo}`);
    editForm.classList.remove('hidden');
    projectSelect.classList.add('editMode');
}
}

/***/ }),

/***/ "./src/edit-project.js":
/*!*****************************!*\
  !*** ./src/edit-project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addEllipsisFunctionality),
/* harmony export */   "sidebarDeleteFunctionality": () => (/* binding */ sidebarDeleteFunctionality)
/* harmony export */ });
/* harmony import */ var _new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project */ "./src/new-project.js");
/* harmony import */ var _project_to_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-to-DOM */ "./src/project-to-DOM.js");
/* harmony import */ var _edit_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-form.js */ "./src/edit-form.js");
/* harmony import */ var _details_toggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details-toggle.js */ "./src/details-toggle.js");





function addEllipsisFunctionality() {
    const ellipsis = document.querySelectorAll('.ellipsis');
    let popUpOpen = false;
    ellipsis.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectCard = document.querySelector(`.projectCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            if (projectCard.contains(document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`)) === false) {
                const popupMenu = document.createElement('div');
                popupMenu.classList.add(`popupMenu${e.target.id.slice(lastChar)}`); 
                const deleteBtn = document.createElement('div');
                deleteBtn.classList.add('popupDelete');
                deleteBtn.setAttribute('id',`del${e.target.id.slice(lastChar)}`);
                deleteBtn.textContent = 'Delete';
                popupMenu.appendChild(deleteBtn);
                const editBtn = document.createElement('div');
                editBtn.classList.add('popupEdit');
                editBtn.textContent = 'Edit';
                editBtn.setAttribute('id', `edit${e.target.id.slice(lastChar)}`);
                popupMenu.appendChild(editBtn);
                projectCard.appendChild(popupMenu);
                popUpOpen = true;
                deleteProject();
                editProject(e.target.id.slice(lastChar));
            } else if (popUpOpen === true || projectCard.classList.contains(`.editMode`)) {
                const menuSelect = document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`);
                menuSelect.classList.add('hidden');
                popUpOpen = false;
            } else if (popUpOpen === false && projectCard.contains(document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`))) {
                const menuSelect = document.querySelector(`.popupMenu${e.target.id.slice(lastChar)}`);
                menuSelect.classList.remove('hidden');
                popUpOpen = true;
            }
        })
    })
}

function deleteProject() {
    const deleteBtn = document.querySelectorAll('.popupDelete');
    deleteBtn.forEach((button) => {
        button.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectSelect = document.querySelectorAll(`.no${e.target.id.slice(lastChar)}`);
            projectSelect.forEach((object) => {
                object.remove();
            })
        })
    })
}

function sidebarDeleteFunctionality() {
    const sidebarDeleteBtn = document.querySelectorAll('.sidebarDelete');
    sidebarDeleteBtn.forEach((icon) => {
        icon.addEventListener('click' , (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectSelect = document.querySelectorAll(`.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            projectSelect.forEach((object) => {
                object.remove();
            })
        })
    })
}

function editProject(cardNo) {
    const editBtn = document.querySelectorAll('.popupEdit');
    editBtn.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            let lastChar = (e.target.id).length - 1;
            const projectSelect = document.querySelector(`.projectCard.no${e.target.id.slice(lastChar)}`);
            e.stopImmediatePropagation();
            const popupMenu = document.querySelector(`.popupMenu${cardNo}`)
            popupMenu.classList.add('hidden');
            projectSelect.classList.add('editMode');
            (0,_edit_form_js__WEBPACK_IMPORTED_MODULE_2__["default"])((e.target.id.slice(lastChar)));
            (0,_details_toggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(cardNo);
        })
    })
}





/***/ }),

/***/ "./src/expand-project.js":
/*!*******************************!*\
  !*** ./src/expand-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ expandProjectCard)
/* harmony export */ });
function expandProjectCard() {
    const projectCards = document.querySelectorAll('.projectCard');
    projectCards.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            let lastChar = (e.target.className).length - 1;
            if (! e.target.classList.contains('projectCard')) {
                return
            }
            const projectSelect = document.querySelector(`.projectCard.no${e.target.className.slice(lastChar)}`);
            if (projectSelect.classList.contains('editMode')) {
                return
            } else {
            const description = projectSelect.querySelector('.projectdescription');
            description.classList.toggle('hidden');
            }
        })
    })
}

/***/ }),

/***/ "./src/new-project.js":
/*!****************************!*\
  !*** ./src/new-project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "addedProjects": () => (/* binding */ addedProjects),
/* harmony export */   "clearFormEntry": () => (/* binding */ clearFormEntry),
/* harmony export */   "default": () => (/* binding */ addProjectBtn),
/* harmony export */   "initializeNewProjectBtn": () => (/* binding */ initializeNewProjectBtn)
/* harmony export */ });
/* harmony import */ var _project_to_DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-to-DOM.js */ "./src/project-to-DOM.js");
/* harmony import */ var _edit_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-project.js */ "./src/edit-project.js");
/* harmony import */ var _expand_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expand-project.js */ "./src/expand-project.js");
const projectForm = document.querySelector('.projectForm');
let addedProjects = [];






function addProjectBtn() {
    let addProjectBtn = document.querySelector('.addProject');
    const projectForm = document.querySelector('.projectForm');
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

function initializeNewProjectBtn() {
    const projectForm = document.querySelector('.projectForm');
    const submitProjectBtn = document.querySelector('#submitProject');
    submitProjectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        newProjectInfo();
        projectForm.classList.add('hidden');
        clearFormEntry();
        (0,_project_to_DOM_js__WEBPACK_IMPORTED_MODULE_0__["default"])(addedProjects);
        (0,_project_to_DOM_js__WEBPACK_IMPORTED_MODULE_0__.addProjectToSidebar)(addedProjects);
        (0,_edit_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_edit_project_js__WEBPACK_IMPORTED_MODULE_1__.sidebarDeleteFunctionality)();
        (0,_expand_project_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })
}

function newProjectInfo() {
    const title = document.querySelector('#projectTitle.main').value;
    const description = document.querySelector('#description.main').value;
    const dueDate = document.querySelector('#dueDate.main').value;
    const priority = document.querySelector('#priority.main').value;
    let newProject = new Project(title, description, dueDate, priority);
    addedProjects.push(newProject);
}

function clearFormEntry() {
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach((input) => input.value = '');
    let priorityInput = document.querySelector('#priority');
    priorityInput.value = 'low';
}



/***/ }),

/***/ "./src/project-form.js":
/*!*****************************!*\
  !*** ./src/project-form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProjectForm)
/* harmony export */ });
function createProjectForm() {
    const sidebar = document.querySelector('.sidebar');
    const projectFormDiv = document.createElement('div');
    projectFormDiv.classList.add('projectForm');
    projectFormDiv.classList.add('hidden');
    sidebar.appendChild(projectFormDiv);
    const projectForm = document.createElement('form');
    projectForm.setAttribute('method', 'get');
    projectForm.classList.add('editMode');
    projectFormDiv.appendChild(projectForm);

        let formPriority = document.createElement('div');
        formPriority.classList.add('formPriority');  
        projectForm.appendChild(formPriority);
        let priority = document.createElement('label');
        priority.setAttribute('for', 'priority');
        priority.textContent = 'Priority Level';  
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

        let dueDate = document.createElement('label');
        dueDate.setAttribute('for', 'dueDate');
        dueDate.textContent = 'Due Date';
        projectForm.appendChild(dueDate);
        let date = document.createElement('input');
        date.setAttribute('type', 'date');
        date.setAttribute('name', 'dueDate');
        date.setAttribute('id', 'dueDate');
        date.classList.add('main');
        projectForm.appendChild(date);

        let title = document.createElement('label');
        title.setAttribute('for', 'projectTitle');
        title.textContent = 'Title';
        projectForm.appendChild(title);
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('id', 'projectTitle');
        titleInput.setAttribute('name', 'projectTitle');
        titleInput.classList.add('main');
        projectForm.appendChild(titleInput);

        let label = document.createElement('label');
        label.setAttribute('for', 'description');
        label.textContent = 'Description';
        projectForm.appendChild(label);
        let input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'description');
        input.setAttribute('id', 'description');
        input.classList.add('main');
        projectForm.appendChild(input);

        let submitProject = document.createElement('button');
        submitProject.setAttribute('id', 'submitProject');
        submitProject.textContent = 'Add Project';
        projectForm.appendChild(submitProject);
}

/***/ }),

/***/ "./src/project-to-DOM.js":
/*!*******************************!*\
  !*** ./src/project-to-DOM.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectToSidebar": () => (/* binding */ addProjectToSidebar),
/* harmony export */   "default": () => (/* binding */ addProjectToContent)
/* harmony export */ });
function addProjectToContent(array) {
    const projectSection = document.querySelector('.projectSection');
    if (array.length > 0) {
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
            } else if (prop === 'description') {
                projectElement.classList.add(`hidden`);
                projectElement.textContent += projectList[prop];
            } 
            else {
                projectElement.textContent += projectList[prop];
            }
            projectElement.classList.add(`no${[i+1]}`);
        }
        let ellipsis = document.createElement('img');
        ellipsis.classList.add('ellipsis');
        ellipsis.setAttribute('id', `e${[i+1]}`);
        ellipsis.src = 'ellipsis.svg';
        projectSelect.appendChild(ellipsis);
    }
}
}

function addProjectToSidebar(array) {
    const projectSideBarSection = document.querySelector('.projects');
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
                projectTabElement.classList.add(`tab${prop}`);
                projectTabElement.classList.add(`project${prop}`);
                projectTabElement.classList.add(`no${[i+1]}`);
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



/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setView)
/* harmony export */ });
/* harmony import */ var _new_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-project */ "./src/new-project.js");
/* harmony import */ var _views_general_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/general-view.js */ "./src/views/general-view.js");
/* harmony import */ var _views_sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/sidebar.js */ "./src/views/sidebar.js");

 


const PROJECTS = _new_project__WEBPACK_IMPORTED_MODULE_0__.addedProjects;

let ACTIVE_VIEW = 'GENERAL';

// export function addProject(project) {
//     PROJECTS.push(project);
//     const lastIndex = PROJECTS.lenght -1;
//     render();
//     return lastIndex
// }

// export function editProject(oldProject, newProject) {
//     const index = PROJECTS.findIndex(oldProject);
//     PROJECTS[index] = newProject;
//     render();
//     return index
// }

// export function removeProject(project) {
//     const index = PROJECTS.findIndex(project);
//     const [removed] = PROJECTS.splice(index, 1);
//     render();
//     return removed
// }

function setView(view) {
    ACTIVE_VIEW = view;
    render();
}

function render(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.replaceChildren();
    (0,_views_sidebar_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

    const content = document.querySelector('.content');
    content.replaceChildren();

    switch (ACTIVE_VIEW) {
        case 'GENERAL':
            console.log('GENERAL works');
            (0,_views_general_view_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectSection)();
            break;
        case 'TODAY':
            renderTodaySection();
            break;
        case 'UPCOMING':
            renderUpcomingSection();
            break;
        default:
            break;
    }
}
// update state, rerender after each update, triggers change in view




// update view based on state






/***/ }),

/***/ "./src/views/general-view.js":
/*!***********************************!*\
  !*** ./src/views/general-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjectSection": () => (/* binding */ renderProjectSection)
/* harmony export */ });
/* harmony import */ var _details_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../details-toggle */ "./src/details-toggle.js");
/* harmony import */ var _edit_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-form */ "./src/edit-form.js");
/* harmony import */ var _edit_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-project */ "./src/edit-project.js");
/* harmony import */ var _expand_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../expand-project */ "./src/expand-project.js");
/* harmony import */ var _project_to_DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project-to-DOM */ "./src/project-to-DOM.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state.js */ "./src/state.js");
/* harmony import */ var _new_project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../new-project */ "./src/new-project.js");








const content = document.querySelector('.content')

function renderProjectSection() {
    renderProjectCards();
    initializeProjectCardFunctionality();
}

function renderProjectCards() {
    const projectSection = document.createElement('div');
    projectSection.classList.add('projectSection');
    content.appendChild(projectSection);
    (0,_project_to_DOM__WEBPACK_IMPORTED_MODULE_4__["default"])(_new_project__WEBPACK_IMPORTED_MODULE_6__.addedProjects);
}

function initializeProjectCardFunctionality() {
    let projects = document.querySelectorAll('.projectCard');
    projects.forEach((project) => {
        project.addEventListener('click', (e) => {
            let lastChar = e.target.className.length - 1
            let cardNo = e.target.className.slice(lastChar);
            projectCardFunctionality(cardNo);
        })
    })
}

function projectCardFunctionality(cardNo) {
    (0,_edit_project__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_expand_project__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_details_toggle__WEBPACK_IMPORTED_MODULE_0__.revealDetails)(cardNo);
    (0,_details_toggle__WEBPACK_IMPORTED_MODULE_0__["default"])(cardNo);
    (0,_edit_form__WEBPACK_IMPORTED_MODULE_1__["default"])();
}



/***/ }),

/***/ "./src/views/sidebar.js":
/*!******************************!*\
  !*** ./src/views/sidebar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderSidebar)
/* harmony export */ });
/* harmony import */ var _new_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../new-project.js */ "./src/new-project.js");
/* harmony import */ var _project_to_DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-to-DOM.js */ "./src/project-to-DOM.js");
/* harmony import */ var _edit_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-project.js */ "./src/edit-project.js");
/* harmony import */ var _project_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-form.js */ "./src/project-form.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state.js */ "./src/state.js");






const sidebar = document.querySelector('.sidebar');
const views = ['GENERAL', 'TODAY', 'UPCOMING'];

function renderSidebar() {
    renderViewButtons(views);
    renderSidebarProjectListTitle();
    renderSidebarProjectList(_new_project_js__WEBPACK_IMPORTED_MODULE_0__.addedProjects);
    (0,_edit_project_js__WEBPACK_IMPORTED_MODULE_2__.sidebarDeleteFunctionality)();
    renderNewProjectBtn();
    (0,_project_form_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_new_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_new_project_js__WEBPACK_IMPORTED_MODULE_0__.initializeNewProjectBtn)();
}

function renderViewButtons(views) {
    views.forEach((viewName) => {
        const button = document.createElement('div');
        button.classList.add("sidebarItem");
        button.setAttribute('id', viewName);
        button.textContent = viewName;
        button.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            (0,_state_js__WEBPACK_IMPORTED_MODULE_4__["default"])(viewName);
        })
        sidebar.appendChild(button);
    })
}

function renderSidebarProjectListTitle() {
    const title = document.createElement('div');
    title.classList.add('projects');
    title.classList.add('sidebarItem');
    title.textContent = 'Projects';
    sidebar.appendChild(title);
}

function renderSidebarProjectList(projects) {
    (0,_project_to_DOM_js__WEBPACK_IMPORTED_MODULE_1__.addProjectToSidebar)(projects);
}

function renderNewProjectBtn() {
    const button = document.createElement('div');
    button.classList.add('sidebarItem');
    button.classList.add('addProject');
    button.textContent = '+ Add Project';
    sidebar.appendChild(button);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/state.js");


(0,_state__WEBPACK_IMPORTED_MODULE_0__["default"])('GENERAL');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLHlEQUF3QjtBQUM1QixJQUFJLDJEQUFpQjtBQUNyQixJQUFJLDhEQUFhO0FBQ2pCLElBQUksMkRBQVc7QUFDZixJQUFJLHNEQUFjO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzBGO0FBQy9CO0FBQ0s7QUFDYjtBQUNqQjs7QUFFbEM7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQSw2QkFBNkIsMERBQWE7QUFDMUMsSUFBSSw0RUFBMEI7QUFDOUI7QUFDQSxJQUFJLDREQUFpQjtBQUNyQixJQUFJLDJEQUFhO0FBQ2pCLElBQUksd0VBQXVCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFPO0FBQ25CLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksdUVBQW1CO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNwREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQjs7QUFFL0Isa0RBQU8sWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvZGV0YWlscy10b2dnbGUuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9lZGl0LWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9lZGl0LXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9leHBhbmQtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL25ldy1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1mb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC10by1ET00uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL2dlbmVyYWwtdmlldy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3ZpZXdzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGlkZURldGFpbHMoY2FyZE5vKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0Q2FyZC5ubyR7Y2FyZE5vfWApO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdGRlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29uc3QgdGl0bGUgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0dGl0bGUnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBkdWVEYXRlID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdGR1ZURhdGUnKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNvbnN0IGVsbGlwc2lzID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuZWxsaXBzaXMnKTtcbiAgICBlbGxpcHNpcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZWFsRGV0YWlscyhjYXJkTm8pIHtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RDYXJkLm5vJHtjYXJkTm99YCk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0ZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICBjb25zdCB0aXRsZSA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcignLnByb2plY3R0aXRsZScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0ZHVlRGF0ZScpO1xuICAgIGR1ZURhdGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgZWxsaXBzaXMgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5lbGxpcHNpcycpO1xuICAgIGVsbGlwc2lzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufSIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMsIFByb2plY3QgfSBmcm9tICcuL25ldy1wcm9qZWN0LmpzJztcblxuaW1wb3J0IHsgcmV2ZWFsRGV0YWlscyB9IGZyb20gJy4vZGV0YWlscy10b2dnbGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFZGl0Rm9ybShjYXJkTm8pIHtcbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RDYXJkLm5vJHtjYXJkTm99YCk7XG4gICAgaWYgKHByb2plY3RTZWxlY3QuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVkaXRGb3JtLm5vJHtjYXJkTm99YCkpID09PSBmYWxzZSkge1xuICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbiAgICBsZXQgcHJvamVjdEluZm8gPSAoYWRkZWRQcm9qZWN0c1tjYXJkTm8tMV0pO1xuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGVkaXRGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ2dldCcpO1xuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXRGb3JtJyk7XG4gICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZChgbm8ke2NhcmROb31gKTtcbiAgICBmb3IgKGxldCBwcm9wIGluIHByb2plY3RJbmZvKSB7XG4gICAgICAgIGlmIChwcm9wID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgICBsZXQgc2VsZWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHNlbGVjdE1lbnUpO1xuICAgICAgICAgICAgbGV0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgbG93T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gICAgICAgICAgICBsb3dPcHRpb24udGV4dENvbnRlbnQgPSAnTG93JztcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQobG93T3B0aW9uKTtcbiAgICAgICAgICAgIGxldCBtZWRpdW1PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG1lZGl1bU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ21lZGl1bScpO1xuICAgICAgICAgICAgbWVkaXVtT3B0aW9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKG1lZGl1bU9wdGlvbik7XG4gICAgICAgICAgICBsZXQgaGlnaE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgaGlnaE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgICAgICAgICAgIGhpZ2hPcHRpb24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGhpZ2hPcHRpb24pOyBcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnZHVlRGF0ZScpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3ApO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBwcm9wO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBwcm9wKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsIHByb3ApO1xuICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3ApO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBwcm9wO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBwcm9wKTtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3ApO1xuICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBwcm9wO1xuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBwcm9wKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9wKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgbm8ke2NhcmROb31gKVxuICAgICAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBzdWJtaXRFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0RWRpdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1Ym1pdFByb2plY3QnKTtcbiAgICBzdWJtaXRFZGl0LnNldEF0dHJpYnV0ZSgnaWQnLCBgbm8ke2NhcmROb31gKTtcbiAgICBzdWJtaXRFZGl0LnRleHRDb250ZW50ID0gJ0RvbmUnO1xuICAgIHN1Ym1pdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3RUaXRsZS5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkZXNjcmlwdGlvbi5ubyR7Y2FyZE5vfWApLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2R1ZURhdGUubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJpb3JpdHkubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgbGV0IGVkaXRlZFByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgYWRkZWRQcm9qZWN0c1soY2FyZE5vKS0xXSA9IGVkaXRlZFByb2plY3Q7XG4gICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2VkaXRNb2RlJyk7XG4gICAgICAgIHJldmVhbERldGFpbHMoY2FyZE5vKTtcblxuICAgICAgICBsZXQgcHJvamVjdE5vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLm5vJHtjYXJkTm99YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdE5vLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJvamVjdE5vW2ldLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHRpdGxlJykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvamVjdE5vW2ldLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdGRlc2NyaXB0aW9uJykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2plY3ROb1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RkdWVEYXRlJykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0udGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0cHJpb3JpdHknKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdsb3cnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LnJlbW92ZSgnbWVkaXVtJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2gnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSlcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChzdWJtaXRFZGl0KTtcbiAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcblxufSBlbHNlIGlmIChwcm9qZWN0U2VsZWN0LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0Rm9ybS5ubyR7Y2FyZE5vfWApKSkge1xuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmVkaXRGb3JtLm5vJHtjYXJkTm99YCk7XG4gICAgZWRpdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xufVxufSIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMsIFByb2plY3QsIGNsZWFyRm9ybUVudHJ5IH0gZnJvbSBcIi4vbmV3LXByb2plY3RcIjtcbmltcG9ydCBhZGRQcm9qZWN0VG9Db250ZW50LCB7IGFkZFByb2plY3RUb1NpZGViYXJ9IGZyb20gXCIuL3Byb2plY3QtdG8tRE9NXCI7XG5pbXBvcnQgY3JlYXRlRWRpdEZvcm0gZnJvbSBcIi4vZWRpdC1mb3JtLmpzXCI7XG5pbXBvcnQgaGlkZURldGFpbHMgZnJvbSBcIi4vZGV0YWlscy10b2dnbGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCkge1xuICAgIGNvbnN0IGVsbGlwc2lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVsbGlwc2lzJyk7XG4gICAgbGV0IHBvcFVwT3BlbiA9IGZhbHNlO1xuICAgIGVsbGlwc2lzLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0Q2FyZC5ubyR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Q2FyZC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBNZW51JHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCkpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvcHVwTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHBvcHVwTWVudS5jbGFzc0xpc3QuYWRkKGBwb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTsgXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3BvcHVwRGVsZXRlJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLGBkZWwke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgICAgICAgICBwb3B1cE1lbnUuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKCdwb3B1cEVkaXQnKTtcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGBlZGl0JHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICAgICAgICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHBvcHVwTWVudSk7XG4gICAgICAgICAgICAgICAgcG9wVXBPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkZWxldGVQcm9qZWN0KCk7XG4gICAgICAgICAgICAgICAgZWRpdFByb2plY3QoZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocG9wVXBPcGVuID09PSB0cnVlIHx8IHByb2plY3RDYXJkLmNsYXNzTGlzdC5jb250YWlucyhgLmVkaXRNb2RlYCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIG1lbnVTZWxlY3QuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcG9wVXBPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvcFVwT3BlbiA9PT0gZmFsc2UgJiYgcHJvamVjdENhcmQuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBNZW51JHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgbWVudVNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBwb3BVcE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwRGVsZXRlJyk7XG4gICAgZGVsZXRlQnRuLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5ubyR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBvYmplY3QucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNpZGViYXJEZWxldGVGdW5jdGlvbmFsaXR5KCkge1xuICAgIGNvbnN0IHNpZGViYXJEZWxldGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhckRlbGV0ZScpO1xuICAgIHNpZGViYXJEZWxldGVCdG4uZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyAsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuaWQpLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLm5vJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBvYmplY3QucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0KGNhcmRObykge1xuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBFZGl0Jyk7XG4gICAgZWRpdEJ0bi5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0Q2FyZC5ubyR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cE1lbnUke2NhcmROb31gKVxuICAgICAgICAgICAgcG9wdXBNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgICAgICAgICAgY3JlYXRlRWRpdEZvcm0oKGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSkpO1xuICAgICAgICAgICAgaGlkZURldGFpbHMoY2FyZE5vKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgeyBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSB9O1xuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleHBhbmRQcm9qZWN0Q2FyZCgpIHtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdENhcmQnKTtcbiAgICBwcm9qZWN0Q2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSAoZS50YXJnZXQuY2xhc3NOYW1lKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWYgKCEgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0Q2FyZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RDYXJkLm5vJHtlLnRhcmdldC5jbGFzc05hbWUuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgaWYgKHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0TW9kZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0ZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59IiwiY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKTtcbmxldCBhZGRlZFByb2plY3RzID0gW107XG5cbmltcG9ydCBhZGRQcm9qZWN0VG9Db250ZW50LCB7IGFkZFByb2plY3RUb1NpZGViYXIgfSBmcm9tICcuL3Byb2plY3QtdG8tRE9NLmpzJztcbmltcG9ydCBhZGRFbGxpcHNpc0Z1bmN0aW9uYWxpdHksIHsgc2lkZWJhckRlbGV0ZUZ1bmN0aW9uYWxpdHkgfSBmcm9tICcuL2VkaXQtcHJvamVjdC5qcyc7XG5pbXBvcnQgZXhwYW5kUHJvamVjdENhcmQgZnJvbSAnLi9leHBhbmQtcHJvamVjdC5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdEJ0bigpIHtcbiAgICBsZXQgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Jyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKTtcbiAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZU5ld1Byb2plY3RCdG4oKSB7XG4gICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKTtcbiAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdFByb2plY3QnKTtcbiAgICBzdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBuZXdQcm9qZWN0SW5mbygpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgY2xlYXJGb3JtRW50cnkoKTtcbiAgICAgICAgYWRkUHJvamVjdFRvQ29udGVudChhZGRlZFByb2plY3RzKTtcbiAgICAgICAgYWRkUHJvamVjdFRvU2lkZWJhcihhZGRlZFByb2plY3RzKTtcbiAgICAgICAgYWRkRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCk7XG4gICAgICAgIHNpZGViYXJEZWxldGVGdW5jdGlvbmFsaXR5KCk7XG4gICAgICAgIGV4cGFuZFByb2plY3RDYXJkKCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbmV3UHJvamVjdEluZm8oKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFRpdGxlLm1haW4nKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbi5tYWluJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlLm1haW4nKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eS5tYWluJykudmFsdWU7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICBhZGRlZFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybUVudHJ5KCkge1xuICAgIGxldCBhbGxJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGFsbElucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4gaW5wdXQudmFsdWUgPSAnJyk7XG4gICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgICBwcmlvcml0eUlucHV0LnZhbHVlID0gJ2xvdyc7XG59XG5cbmV4cG9ydCB7IGFkZGVkUHJvamVjdHMsIFByb2plY3QsIGNsZWFyRm9ybUVudHJ5IH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgY29uc3QgcHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Rm9ybURpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xuICAgIHByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1EaXYpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ2dldCcpO1xuICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXRNb2RlJyk7XG4gICAgcHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuXG4gICAgICAgIGxldCBmb3JtUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2Zvcm1Qcmlvcml0eScpOyAgXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1Qcmlvcml0eSk7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5IExldmVsJzsgIFxuICAgICAgICBsZXQgc2VsZWN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RNZW51LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICBzZWxlY3RNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgICAgICAgc2VsZWN0TWVudS5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGZvcm1Qcmlvcml0eS5hcHBlbmRDaGlsZChzZWxlY3RNZW51KTtcbiAgICAgICAgbGV0IGxvd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBsb3dPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgICAgICAgbG93T3B0aW9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQobG93T3B0aW9uKTtcbiAgICAgICAgbGV0IG1lZGl1bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBtZWRpdW1PcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgICAgICAgbWVkaXVtT3B0aW9uLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQobWVkaXVtT3B0aW9uKTtcbiAgICAgICAgbGV0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgaGlnaE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2gnKTtcbiAgICAgICAgaGlnaE9wdGlvbi50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKTsgXG5cbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpO1xuICAgICAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdFRpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RpdGxlJztcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgICAgICBsZXQgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0UHJvamVjdCcpO1xuICAgICAgICBzdWJtaXRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0UHJvamVjdCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUHJvamVjdFRvQ29udGVudChhcnJheSkge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RTZWN0aW9uJyk7XG4gICAgaWYgKGFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICBmb3IgKGxldCBpID0gKGFycmF5Lmxlbmd0aC0xKTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdCA9IGFycmF5W2ldO1xuICAgICAgICBsZXQgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChgcHJvamVjdENhcmRgKTtcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChgbm8ke1tpKzFdfWApO1xuICAgICAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ubycrW2krMV0pO1xuXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gcHJvamVjdExpc3QpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgcHJvamVjdCR7cHJvcH1gKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdwcmlvcml0eScpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke3Byb2plY3RMaXN0W3Byb3BdfWApO1xuICAgICAgICAgICAgICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBoaWRkZW5gKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCArPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCArPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZWxsaXBzaXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZWxsaXBzaXMuY2xhc3NMaXN0LmFkZCgnZWxsaXBzaXMnKTtcbiAgICAgICAgZWxsaXBzaXMuc2V0QXR0cmlidXRlKCdpZCcsIGBlJHtbaSsxXX1gKTtcbiAgICAgICAgZWxsaXBzaXMuc3JjID0gJ2VsbGlwc2lzLnN2Zyc7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQoZWxsaXBzaXMpO1xuICAgIH1cbn1cbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdFRvU2lkZWJhcihhcnJheSkge1xuICAgIGNvbnN0IHByb2plY3RTaWRlQmFyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIGZvciAobGV0IGkgPSAoYXJyYXkubGVuZ3RoLTEpOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHByb2plY3RMaXN0ID0gYXJyYXlbaV1cbiAgICAgICAgbGV0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0VGFiYCk7XG4gICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZChgbm8ke1tpKzFdfWApO1xuICAgICAgICBwcm9qZWN0U2lkZUJhclNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRhYlNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ubycrW2krMV0pO1xuXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gcHJvamVjdExpc3QpIHtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RUYWJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRhYkVsZW1lbnQuY2xhc3NMaXN0LmFkZChgdGFiJHtwcm9wfWApO1xuICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdFRhYkVsZW1lbnQuY2xhc3NMaXN0LmFkZChgbm8ke1tpKzFdfWApO1xuICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdExpc3RbcHJvcF07XG4gICAgICAgICAgICAgICAgcHJvamVjdFRhYlNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGFiRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNpZGViYXJEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgc2lkZWJhckRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyRGVsZXRlJyk7XG4gICAgICAgIHNpZGViYXJEZWxldGUuc2V0QXR0cmlidXRlKCdpZCcsIGBzaWRlYmFyRCR7W2krMV19YCk7XG4gICAgICAgIHNpZGViYXJEZWxldGUuc3JjID0gJ2RlbGJ0bi5zdmcnO1xuICAgICAgICBwcm9qZWN0VGFiU2VsZWN0LmFwcGVuZENoaWxkKHNpZGViYXJEZWxldGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgYWRkUHJvamVjdFRvU2lkZWJhciB9OyIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFNlY3Rpb24gfSBmcm9tIFwiLi92aWV3cy9nZW5lcmFsLXZpZXcuanNcIjsgXG5pbXBvcnQgcmVuZGVyU2lkZWJhciBmcm9tICcuL3ZpZXdzL3NpZGViYXIuanMnXG5cbmNvbnN0IFBST0pFQ1RTID0gYWRkZWRQcm9qZWN0cztcblxubGV0IEFDVElWRV9WSUVXID0gJ0dFTkVSQUwnO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4vLyAgICAgUFJPSkVDVFMucHVzaChwcm9qZWN0KTtcbi8vICAgICBjb25zdCBsYXN0SW5kZXggPSBQUk9KRUNUUy5sZW5naHQgLTE7XG4vLyAgICAgcmVuZGVyKCk7XG4vLyAgICAgcmV0dXJuIGxhc3RJbmRleFxuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZWRpdFByb2plY3Qob2xkUHJvamVjdCwgbmV3UHJvamVjdCkge1xuLy8gICAgIGNvbnN0IGluZGV4ID0gUFJPSkVDVFMuZmluZEluZGV4KG9sZFByb2plY3QpO1xuLy8gICAgIFBST0pFQ1RTW2luZGV4XSA9IG5ld1Byb2plY3Q7XG4vLyAgICAgcmVuZGVyKCk7XG4vLyAgICAgcmV0dXJuIGluZGV4XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICBjb25zdCBpbmRleCA9IFBST0pFQ1RTLmZpbmRJbmRleChwcm9qZWN0KTtcbi8vICAgICBjb25zdCBbcmVtb3ZlZF0gPSBQUk9KRUNUUy5zcGxpY2UoaW5kZXgsIDEpO1xuLy8gICAgIHJlbmRlcigpO1xuLy8gICAgIHJldHVybiByZW1vdmVkXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFZpZXcodmlldykge1xuICAgIEFDVElWRV9WSUVXID0gdmlldztcbiAgICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgc2lkZWJhci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICByZW5kZXJTaWRlYmFyKCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgc3dpdGNoIChBQ1RJVkVfVklFVykge1xuICAgICAgICBjYXNlICdHRU5FUkFMJzpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHRU5FUkFMIHdvcmtzJyk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0U2VjdGlvbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1RPREFZJzpcbiAgICAgICAgICAgIHJlbmRlclRvZGF5U2VjdGlvbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1VQQ09NSU5HJzpcbiAgICAgICAgICAgIHJlbmRlclVwY29taW5nU2VjdGlvbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG4vLyB1cGRhdGUgc3RhdGUsIHJlcmVuZGVyIGFmdGVyIGVhY2ggdXBkYXRlLCB0cmlnZ2VycyBjaGFuZ2UgaW4gdmlld1xuXG5cblxuXG4vLyB1cGRhdGUgdmlldyBiYXNlZCBvbiBzdGF0ZVxuXG5cblxuXG4iLCJpbXBvcnQgaGlkZURldGFpbHMsIHsgcmV2ZWFsRGV0YWlscyB9IGZyb20gJy4uL2RldGFpbHMtdG9nZ2xlJztcbmltcG9ydCBjcmVhdGVFZGl0Rm9ybSBmcm9tICcuLi9lZGl0LWZvcm0nO1xuaW1wb3J0IGFkZEVsbGlwc2lzRnVuY3Rpb25hbGl0eSBmcm9tICcuLi9lZGl0LXByb2plY3QnO1xuaW1wb3J0IGV4cGFuZFByb2plY3RDYXJkIGZyb20gJy4uL2V4cGFuZC1wcm9qZWN0JztcbmltcG9ydCBhZGRQcm9qZWN0VG9Db250ZW50IGZyb20gJy4uL3Byb2plY3QtdG8tRE9NJztcbmltcG9ydCBzZXRWaWV3IGZyb20gJy4uL3N0YXRlLmpzJztcbmltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tICcuLi9uZXctcHJvamVjdCc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RTZWN0aW9uKCkge1xuICAgIHJlbmRlclByb2plY3RDYXJkcygpO1xuICAgIGluaXRpYWxpemVQcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdENhcmRzKCkge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdFNlY3Rpb24nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RTZWN0aW9uKTtcbiAgICBhZGRQcm9qZWN0VG9Db250ZW50KGFkZGVkUHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplUHJvamVjdENhcmRGdW5jdGlvbmFsaXR5KCkge1xuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Q2FyZCcpO1xuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSBlLnRhcmdldC5jbGFzc05hbWUubGVuZ3RoIC0gMVxuICAgICAgICAgICAgbGV0IGNhcmRObyA9IGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZShsYXN0Q2hhcik7XG4gICAgICAgICAgICBwcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkoY2FyZE5vKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkoY2FyZE5vKSB7XG4gICAgYWRkRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCk7XG4gICAgZXhwYW5kUHJvamVjdENhcmQoKTtcbiAgICByZXZlYWxEZXRhaWxzKGNhcmRObyk7XG4gICAgaGlkZURldGFpbHMoY2FyZE5vKTtcbiAgICBjcmVhdGVFZGl0Rm9ybSgpO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0U2VjdGlvbiB9OyIsImltcG9ydCBhZGRQcm9qZWN0QnRuLCB7IGluaXRpYWxpemVOZXdQcm9qZWN0QnRuLCBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL25ldy1wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0VG9TaWRlYmFyIH0gZnJvbSBcIi4uL3Byb2plY3QtdG8tRE9NLmpzXCI7XG5pbXBvcnQgeyBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2VkaXQtcHJvamVjdC5qcyc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdEZvcm0gZnJvbSBcIi4uL3Byb2plY3QtZm9ybS5qc1wiO1xuaW1wb3J0IHNldFZpZXcgZnJvbSBcIi4uL3N0YXRlLmpzXCI7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3Qgdmlld3MgPSBbJ0dFTkVSQUwnLCAnVE9EQVknLCAnVVBDT01JTkcnXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyU2lkZWJhcigpIHtcbiAgICByZW5kZXJWaWV3QnV0dG9ucyh2aWV3cyk7XG4gICAgcmVuZGVyU2lkZWJhclByb2plY3RMaXN0VGl0bGUoKTtcbiAgICByZW5kZXJTaWRlYmFyUHJvamVjdExpc3QoYWRkZWRQcm9qZWN0cyk7XG4gICAgc2lkZWJhckRlbGV0ZUZ1bmN0aW9uYWxpdHkoKTtcbiAgICByZW5kZXJOZXdQcm9qZWN0QnRuKCk7XG4gICAgY3JlYXRlUHJvamVjdEZvcm0oKTtcbiAgICBhZGRQcm9qZWN0QnRuKCk7XG4gICAgaW5pdGlhbGl6ZU5ld1Byb2plY3RCdG4oKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVmlld0J1dHRvbnModmlld3MpIHtcbiAgICB2aWV3cy5mb3JFYWNoKCh2aWV3TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFySXRlbVwiKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCB2aWV3TmFtZSk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHZpZXdOYW1lO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHNldFZpZXcodmlld05hbWUpO1xuICAgICAgICB9KVxuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2lkZWJhclByb2plY3RMaXN0VGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJdGVtJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTaWRlYmFyUHJvamVjdExpc3QocHJvamVjdHMpIHtcbiAgICBhZGRQcm9qZWN0VG9TaWRlYmFyKHByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3UHJvamVjdEJ0bigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc2lkZWJhckl0ZW0nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdCcpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICcrIEFkZCBQcm9qZWN0JztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc2V0VmlldyAgZnJvbSAnLi9zdGF0ZSc7XG5cbnNldFZpZXcoJ0dFTkVSQUwnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=