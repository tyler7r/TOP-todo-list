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
    const content = document.querySelector('.content');
    const projectFormDiv = document.createElement('div');
    projectFormDiv.classList.add('projectForm');
    projectFormDiv.classList.add('hidden');
    content.appendChild(projectFormDiv);
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

        const projectSelect = document.querySelector('.projectCard.no'+[i+1]);

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
    if (array.length > 0) {
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
    const content = document.querySelector('.content');
    content.replaceChildren();

    const sidebar = document.querySelector('.sidebar');
    sidebar.replaceChildren();
    (0,_views_sidebar_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

    switch (ACTIVE_VIEW) {
        case 'GENERAL':
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








function renderProjectSection() {
    renderProjectCards();
    initializeProjectCardFunctionality();
}

function renderProjectCards() {
    const content = document.querySelector('.content')
    const projectSection = document.createElement('div');
    projectSection.classList.add('projectSection');
    content.appendChild(projectSection);
    (0,_project_to_DOM__WEBPACK_IMPORTED_MODULE_4__["default"])(_new_project__WEBPACK_IMPORTED_MODULE_6__.addedProjects);
}

function initializeProjectCardFunctionality() {
    let projects = document.querySelectorAll('.projectCard');
    projects.forEach((project) => {
        project.addEventListener('click', (e) => {
            console.log(e);
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
    (0,_project_form_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    renderNewProjectBtn();
    (0,_new_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_new_project_js__WEBPACK_IMPORTED_MODULE_0__.initializeNewProjectBtn)();
}

function renderViewButtons(views) {
    views.forEach((viewName) => {
        const button = document.createElement('div');
        button.classList.add("sidebarItem");
        button.setAttribute('id', viewName);
        button.textContent = viewName;
        sidebar.appendChild(button);
        button.addEventListener('click', () => {
            (0,_state_js__WEBPACK_IMPORTED_MODULE_4__["default"])(viewName);
        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLHlEQUF3QjtBQUM1QixJQUFJLDJEQUFpQjtBQUNyQixJQUFJLDhEQUFhO0FBQ2pCLElBQUksMkRBQVc7QUFDZixJQUFJLHNEQUFjO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzBGO0FBQy9CO0FBQ0s7QUFDYjtBQUNqQjs7QUFFbEM7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQSw2QkFBNkIsMERBQWE7QUFDMUMsSUFBSSw0RUFBMEI7QUFDOUIsSUFBSSw0REFBaUI7QUFDckI7QUFDQSxJQUFJLDJEQUFhO0FBQ2pCLElBQUksd0VBQXVCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFPO0FBQ25CLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVFQUFtQjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDbkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0I7O0FBRS9CLGtEQUFPLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2RldGFpbHMtdG9nZ2xlLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvZWRpdC1mb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvZWRpdC1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvZXhwYW5kLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9uZXctcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtdG8tRE9NLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9nZW5lcmFsLXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy92aWV3cy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhpZGVEZXRhaWxzKGNhcmRObykge1xuICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdENhcmQubm8ke2NhcmROb31gKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcignLnByb2plY3RkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNvbnN0IHRpdGxlID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHRpdGxlJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY29uc3QgZHVlRGF0ZSA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcignLnByb2plY3RkdWVEYXRlJyk7XG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb25zdCBlbGxpcHNpcyA9IHByb2plY3RTZWxlY3QucXVlcnlTZWxlY3RvcignLmVsbGlwc2lzJyk7XG4gICAgZWxsaXBzaXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVhbERldGFpbHMoY2FyZE5vKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0Q2FyZC5ubyR7Y2FyZE5vfWApO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdGRlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgY29uc3QgdGl0bGUgPSBwcm9qZWN0U2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0dGl0bGUnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjb25zdCBkdWVEYXRlID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdGR1ZURhdGUnKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGNvbnN0IGVsbGlwc2lzID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKCcuZWxsaXBzaXMnKTtcbiAgICBlbGxpcHNpcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn0iLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzLCBQcm9qZWN0IH0gZnJvbSAnLi9uZXctcHJvamVjdC5qcyc7XG5cbmltcG9ydCB7IHJldmVhbERldGFpbHMgfSBmcm9tICcuL2RldGFpbHMtdG9nZ2xlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWRpdEZvcm0oY2FyZE5vKSB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0Q2FyZC5ubyR7Y2FyZE5vfWApO1xuICAgIGlmIChwcm9qZWN0U2VsZWN0LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0Rm9ybS5ubyR7Y2FyZE5vfWApKSA9PT0gZmFsc2UpIHtcbiAgICBwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2VkaXRNb2RlJyk7XG4gICAgbGV0IHByb2plY3RJbmZvID0gKGFkZGVkUHJvamVjdHNbY2FyZE5vLTFdKTtcbiAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBlZGl0Rm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdnZXQnKTtcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0Rm9ybScpO1xuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoYG5vJHtjYXJkTm99YCk7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBwcm9qZWN0SW5mbykge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgICAgbGV0IHNlbGVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICBzZWxlY3RNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgIHNlbGVjdE1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChzZWxlY3RNZW51KTtcbiAgICAgICAgICAgIGxldCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGxvd09wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xvdycpO1xuICAgICAgICAgICAgbG93T3B0aW9uLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XG4gICAgICAgICAgICBsZXQgbWVkaXVtT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBtZWRpdW1PcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgICAgICAgICAgIG1lZGl1bU9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChtZWRpdW1PcHRpb24pO1xuICAgICAgICAgICAgbGV0IGhpZ2hPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGhpZ2hPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gICAgICAgICAgICBoaWdoT3B0aW9uLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgICAgICAgICAgc2VsZWN0TWVudS5hcHBlbmRDaGlsZChoaWdoT3B0aW9uKTsgXG4gICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ2R1ZURhdGUnKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gcHJvcDtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgcHJvcCk7XG4gICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9wKTtcbiAgICAgICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBubyR7Y2FyZE5vfWApXG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gcHJvcDtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgbm8ke2NhcmROb31gKVxuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgcHJvcCk7XG4gICAgICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wKTtcbiAgICAgICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gcHJvcDtcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgcHJvcCk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvcCk7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYG5vJHtjYXJkTm99YClcbiAgICAgICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3VibWl0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEVkaXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWJtaXRQcm9qZWN0Jyk7XG4gICAgc3VibWl0RWRpdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYG5vJHtjYXJkTm99YCk7XG4gICAgc3VibWl0RWRpdC50ZXh0Q29udGVudCA9ICdEb25lJztcbiAgICBzdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0VGl0bGUubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZGVzY3JpcHRpb24ubm8ke2NhcmROb31gKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkdWVEYXRlLm5vJHtjYXJkTm99YCkudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3ByaW9yaXR5Lm5vJHtjYXJkTm99YCkudmFsdWU7XG4gICAgICAgIGxldCBlZGl0ZWRQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIGFkZGVkUHJvamVjdHNbKGNhcmRObyktMV0gPSBlZGl0ZWRQcm9qZWN0O1xuICAgICAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdlZGl0TW9kZScpO1xuICAgICAgICByZXZlYWxEZXRhaWxzKGNhcmRObyk7XG5cbiAgICAgICAgbGV0IHByb2plY3RObyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5ubyR7Y2FyZE5vfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3ROby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHByb2plY3ROb1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3R0aXRsZScpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb2plY3ROb1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RkZXNjcmlwdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0ZHVlRGF0ZScpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvamVjdE5vW2ldLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdHByaW9yaXR5JykpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Tm9baV0uY2xhc3NMaXN0LnJlbW92ZSgnbG93Jyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ21lZGl1bScpO1xuICAgICAgICAgICAgICAgIHByb2plY3ROb1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdoJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE5vW2ldLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0pXG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0RWRpdCk7XG4gICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG5cbn0gZWxzZSBpZiAocHJvamVjdFNlbGVjdC5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZWRpdEZvcm0ubm8ke2NhcmROb31gKSkpIHtcbiAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5lZGl0Rm9ybS5ubyR7Y2FyZE5vfWApO1xuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbn1cbn0iLCJpbXBvcnQgeyBhZGRlZFByb2plY3RzLCBQcm9qZWN0LCBjbGVhckZvcm1FbnRyeSB9IGZyb20gXCIuL25ldy1wcm9qZWN0XCI7XG5pbXBvcnQgYWRkUHJvamVjdFRvQ29udGVudCwgeyBhZGRQcm9qZWN0VG9TaWRlYmFyfSBmcm9tIFwiLi9wcm9qZWN0LXRvLURPTVwiO1xuaW1wb3J0IGNyZWF0ZUVkaXRGb3JtIGZyb20gXCIuL2VkaXQtZm9ybS5qc1wiO1xuaW1wb3J0IGhpZGVEZXRhaWxzIGZyb20gXCIuL2RldGFpbHMtdG9nZ2xlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEVsbGlwc2lzRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBjb25zdCBlbGxpcHNpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbGxpcHNpcycpO1xuICAgIGxldCBwb3BVcE9wZW4gPSBmYWxzZTtcbiAgICBlbGxpcHNpcy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdENhcmQubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAocHJvamVjdENhcmQuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3B1cE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwb3B1cE1lbnUuY2xhc3NMaXN0LmFkZChgcG9wdXBNZW51JHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7IFxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwb3B1cERlbGV0ZScpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJyxgZGVsJHtlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcil9YCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gICAgICAgICAgICAgICAgcG9wdXBNZW51LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgncG9wdXBFZGl0Jyk7XG4gICAgICAgICAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgZWRpdCR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIHBvcHVwTWVudS5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwb3B1cE1lbnUpO1xuICAgICAgICAgICAgICAgIHBvcFVwT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIGVkaXRQcm9qZWN0KGUudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBvcFVwT3BlbiA9PT0gdHJ1ZSB8fCBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuY29udGFpbnMoYC5lZGl0TW9kZWApKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgICAgICBtZW51U2VsZWN0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHBvcFVwT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwb3BVcE9wZW4gPT09IGZhbHNlICYmIHByb2plY3RDYXJkLmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wb3B1cE1lbnUke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvcHVwTWVudSR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgICAgIG1lbnVTZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcG9wVXBPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KCkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cERlbGV0ZScpO1xuICAgIGRlbGV0ZUJ0bi5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5pZCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBjb25zdCBzaWRlYmFyRGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJEZWxldGUnKTtcbiAgICBzaWRlYmFyRGVsZXRlQnRuLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmlkKS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5ubyR7ZS50YXJnZXQuaWQuc2xpY2UobGFzdENoYXIpfWApO1xuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdChjYXJkTm8pIHtcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwRWRpdCcpO1xuICAgIGVkaXRCdG4uZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0Q2hhciA9IChlLnRhcmdldC5pZCkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdENhcmQubm8ke2UudGFyZ2V0LmlkLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBwb3B1cE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9wdXBNZW51JHtjYXJkTm99YClcbiAgICAgICAgICAgIHBvcHVwTWVudS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgnZWRpdE1vZGUnKTtcbiAgICAgICAgICAgIGNyZWF0ZUVkaXRGb3JtKChlLnRhcmdldC5pZC5zbGljZShsYXN0Q2hhcikpKTtcbiAgICAgICAgICAgIGhpZGVEZXRhaWxzKGNhcmRObyk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHsgc2lkZWJhckRlbGV0ZUZ1bmN0aW9uYWxpdHkgfTtcblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhwYW5kUHJvamVjdENhcmQoKSB7XG4gICAgY29uc3QgcHJvamVjdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RDYXJkJyk7XG4gICAgcHJvamVjdENhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IGxhc3RDaGFyID0gKGUudGFyZ2V0LmNsYXNzTmFtZSkubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGlmICghIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdENhcmQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0Q2FyZC5ubyR7ZS50YXJnZXQuY2xhc3NOYW1lLnNsaWNlKGxhc3RDaGFyKX1gKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0U2VsZWN0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdE1vZGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvamVjdFNlbGVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdGRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufSIsImNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtJyk7XG5sZXQgYWRkZWRQcm9qZWN0cyA9IFtdO1xuXG5pbXBvcnQgYWRkUHJvamVjdFRvQ29udGVudCwgeyBhZGRQcm9qZWN0VG9TaWRlYmFyIH0gZnJvbSAnLi9wcm9qZWN0LXRvLURPTS5qcyc7XG5pbXBvcnQgYWRkRWxsaXBzaXNGdW5jdGlvbmFsaXR5LCB7IHNpZGViYXJEZWxldGVGdW5jdGlvbmFsaXR5IH0gZnJvbSAnLi9lZGl0LXByb2plY3QuanMnO1xuaW1wb3J0IGV4cGFuZFByb2plY3RDYXJkIGZyb20gJy4vZXhwYW5kLXByb2plY3QuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3RCdG4oKSB7XG4gICAgbGV0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtJyk7XG4gICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gUHJvamVjdCh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVOZXdQcm9qZWN0QnRuKCkge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtJyk7XG4gICAgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRQcm9qZWN0Jyk7XG4gICAgc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbmV3UHJvamVjdEluZm8oKTtcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGNsZWFyRm9ybUVudHJ5KCk7XG4gICAgICAgIGFkZFByb2plY3RUb0NvbnRlbnQoYWRkZWRQcm9qZWN0cyk7XG4gICAgICAgIGFkZFByb2plY3RUb1NpZGViYXIoYWRkZWRQcm9qZWN0cyk7XG4gICAgICAgIGFkZEVsbGlwc2lzRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSgpO1xuICAgICAgICBleHBhbmRQcm9qZWN0Q2FyZCgpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3RJbmZvKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RUaXRsZS5tYWluJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24ubWFpbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZS5tYWluJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHkubWFpbicpLnZhbHVlO1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgYWRkZWRQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xufVxuXG5mdW5jdGlvbiBjbGVhckZvcm1FbnRyeSgpIHtcbiAgICBsZXQgYWxsSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBhbGxJbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IGlucHV0LnZhbHVlID0gJycpO1xuICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9ICdsb3cnO1xufVxuXG5leHBvcnQgeyBhZGRlZFByb2plY3RzLCBQcm9qZWN0LCBjbGVhckZvcm1FbnRyeSB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEZvcm1EaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybURpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBwcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdnZXQnKTtcbiAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0TW9kZScpO1xuICAgIHByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RGb3JtKTtcblxuICAgICAgICBsZXQgZm9ybVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdmb3JtUHJpb3JpdHknKTsgIFxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtUHJpb3JpdHkpO1xuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBMZXZlbCc7ICBcbiAgICAgICAgbGV0IHNlbGVjdE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgc2VsZWN0TWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgIHNlbGVjdE1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBmb3JtUHJpb3JpdHkuYXBwZW5kQ2hpbGQoc2VsZWN0TWVudSk7XG4gICAgICAgIGxldCBsb3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbG93T3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gICAgICAgIGxvd09wdGlvbi50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKGxvd09wdGlvbik7XG4gICAgICAgIGxldCBtZWRpdW1PcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgbWVkaXVtT3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gICAgICAgIG1lZGl1bU9wdGlvbi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgICAgICBzZWxlY3RNZW51LmFwcGVuZENoaWxkKG1lZGl1bU9wdGlvbik7XG4gICAgICAgIGxldCBoaWdoT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGhpZ2hPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdoJyk7XG4gICAgICAgIGhpZ2hPcHRpb24udGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgICAgIHNlbGVjdE1lbnUuYXBwZW5kQ2hpbGQoaGlnaE9wdGlvbik7IFxuXG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKTtcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZURhdGUnKTtcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3RUaXRsZScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaXRsZSc7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0VGl0bGUnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJvamVjdFRpdGxlJyk7XG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgbGV0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdFByb2plY3QnKTtcbiAgICAgICAgc3VibWl0UHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdFByb2plY3QpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFByb2plY3RUb0NvbnRlbnQoYXJyYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0U2VjdGlvbicpO1xuICAgIGlmIChhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgZm9yIChsZXQgaSA9IChhcnJheS5sZW5ndGgtMSk7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBhcnJheVtpXTtcbiAgICAgICAgbGV0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoYHByb2plY3RDYXJkYCk7XG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdENhcmQubm8nK1tpKzFdKTtcblxuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHByb2plY3RMaXN0KSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke3Byb3B9YCk7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtwcm9qZWN0TGlzdFtwcm9wXX1gKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgaGlkZGVuYCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgKz0gcHJvamVjdExpc3RbcHJvcF07XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgKz0gcHJvamVjdExpc3RbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVsbGlwc2lzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGVsbGlwc2lzLmNsYXNzTGlzdC5hZGQoJ2VsbGlwc2lzJyk7XG4gICAgICAgIGVsbGlwc2lzLnNldEF0dHJpYnV0ZSgnaWQnLCBgZSR7W2krMV19YCk7XG4gICAgICAgIGVsbGlwc2lzLnNyYyA9ICdlbGxpcHNpcy5zdmcnO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKGVsbGlwc2lzKTtcbiAgICB9XG59XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb1NpZGViYXIoYXJyYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0U2lkZUJhclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gKGFycmF5Lmxlbmd0aC0xKTsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdExpc3QgPSBhcnJheVtpXVxuICAgICAgICAgICAgbGV0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZChgcHJvamVjdFRhYmApO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKGBubyR7W2krMV19YCk7XG4gICAgICAgICAgICBwcm9qZWN0U2lkZUJhclNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUYWJTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8nK1tpKzFdKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBwcm9qZWN0TGlzdCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wID09PSAndGl0bGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0VGFiRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGFiRWxlbWVudC5jbGFzc0xpc3QuYWRkKGB0YWIke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHByb2plY3Qke3Byb3B9YCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RUYWJFbGVtZW50LmNsYXNzTGlzdC5hZGQoYG5vJHtbaSsxXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYkVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYlNlbGVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGFiRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNpZGViYXJEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHNpZGViYXJEZWxldGUuY2xhc3NMaXN0LmFkZCgnc2lkZWJhckRlbGV0ZScpO1xuICAgICAgICAgICAgc2lkZWJhckRlbGV0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHNpZGViYXJEJHtbaSsxXX1gKTtcbiAgICAgICAgICAgIHNpZGViYXJEZWxldGUuc3JjID0gJ2RlbGJ0bi5zdmcnO1xuICAgICAgICAgICAgcHJvamVjdFRhYlNlbGVjdC5hcHBlbmRDaGlsZChzaWRlYmFyRGVsZXRlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgYWRkUHJvamVjdFRvU2lkZWJhciB9OyIsImltcG9ydCB7IGFkZGVkUHJvamVjdHMgfSBmcm9tIFwiLi9uZXctcHJvamVjdFwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFNlY3Rpb24gfSBmcm9tIFwiLi92aWV3cy9nZW5lcmFsLXZpZXcuanNcIjsgXG5pbXBvcnQgcmVuZGVyU2lkZWJhciBmcm9tICcuL3ZpZXdzL3NpZGViYXIuanMnXG5cbmNvbnN0IFBST0pFQ1RTID0gYWRkZWRQcm9qZWN0cztcblxubGV0IEFDVElWRV9WSUVXID0gJ0dFTkVSQUwnO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KSB7XG4vLyAgICAgUFJPSkVDVFMucHVzaChwcm9qZWN0KTtcbi8vICAgICBjb25zdCBsYXN0SW5kZXggPSBQUk9KRUNUUy5sZW5naHQgLTE7XG4vLyAgICAgcmVuZGVyKCk7XG4vLyAgICAgcmV0dXJuIGxhc3RJbmRleFxuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZWRpdFByb2plY3Qob2xkUHJvamVjdCwgbmV3UHJvamVjdCkge1xuLy8gICAgIGNvbnN0IGluZGV4ID0gUFJPSkVDVFMuZmluZEluZGV4KG9sZFByb2plY3QpO1xuLy8gICAgIFBST0pFQ1RTW2luZGV4XSA9IG5ld1Byb2plY3Q7XG4vLyAgICAgcmVuZGVyKCk7XG4vLyAgICAgcmV0dXJuIGluZGV4XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3QpIHtcbi8vICAgICBjb25zdCBpbmRleCA9IFBST0pFQ1RTLmZpbmRJbmRleChwcm9qZWN0KTtcbi8vICAgICBjb25zdCBbcmVtb3ZlZF0gPSBQUk9KRUNUUy5zcGxpY2UoaW5kZXgsIDEpO1xuLy8gICAgIHJlbmRlcigpO1xuLy8gICAgIHJldHVybiByZW1vdmVkXG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNldFZpZXcodmlldykge1xuICAgIEFDVElWRV9WSUVXID0gdmlldztcbiAgICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKCl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIHNpZGViYXIucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgcmVuZGVyU2lkZWJhcigpO1xuXG4gICAgc3dpdGNoIChBQ1RJVkVfVklFVykge1xuICAgICAgICBjYXNlICdHRU5FUkFMJzpcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RTZWN0aW9uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVE9EQVknOlxuICAgICAgICAgICAgcmVuZGVyVG9kYXlTZWN0aW9uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVVBDT01JTkcnOlxuICAgICAgICAgICAgcmVuZGVyVXBjb21pbmdTZWN0aW9uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbi8vIHVwZGF0ZSBzdGF0ZSwgcmVyZW5kZXIgYWZ0ZXIgZWFjaCB1cGRhdGUsIHRyaWdnZXJzIGNoYW5nZSBpbiB2aWV3XG5cblxuXG5cbi8vIHVwZGF0ZSB2aWV3IGJhc2VkIG9uIHN0YXRlXG5cblxuXG5cbiIsImltcG9ydCBoaWRlRGV0YWlscywgeyByZXZlYWxEZXRhaWxzIH0gZnJvbSAnLi4vZGV0YWlscy10b2dnbGUnO1xuaW1wb3J0IGNyZWF0ZUVkaXRGb3JtIGZyb20gJy4uL2VkaXQtZm9ybSc7XG5pbXBvcnQgYWRkRWxsaXBzaXNGdW5jdGlvbmFsaXR5IGZyb20gJy4uL2VkaXQtcHJvamVjdCc7XG5pbXBvcnQgZXhwYW5kUHJvamVjdENhcmQgZnJvbSAnLi4vZXhwYW5kLXByb2plY3QnO1xuaW1wb3J0IGFkZFByb2plY3RUb0NvbnRlbnQgZnJvbSAnLi4vcHJvamVjdC10by1ET00nO1xuaW1wb3J0IHNldFZpZXcgZnJvbSAnLi4vc3RhdGUuanMnO1xuaW1wb3J0IHsgYWRkZWRQcm9qZWN0cyB9IGZyb20gJy4uL25ldy1wcm9qZWN0JztcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFNlY3Rpb24oKSB7XG4gICAgcmVuZGVyUHJvamVjdENhcmRzKCk7XG4gICAgaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Q2FyZHMoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RTZWN0aW9uJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0U2VjdGlvbik7XG4gICAgYWRkUHJvamVjdFRvQ29udGVudChhZGRlZFByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVByb2plY3RDYXJkRnVuY3Rpb25hbGl0eSgpIHtcbiAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdENhcmQnKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBsZXQgbGFzdENoYXIgPSBlLnRhcmdldC5jbGFzc05hbWUubGVuZ3RoIC0gMVxuICAgICAgICAgICAgbGV0IGNhcmRObyA9IGUudGFyZ2V0LmNsYXNzTmFtZS5zbGljZShsYXN0Q2hhcik7XG4gICAgICAgICAgICBwcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkoY2FyZE5vKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Q2FyZEZ1bmN0aW9uYWxpdHkoY2FyZE5vKSB7XG4gICAgYWRkRWxsaXBzaXNGdW5jdGlvbmFsaXR5KCk7XG4gICAgZXhwYW5kUHJvamVjdENhcmQoKTtcbiAgICByZXZlYWxEZXRhaWxzKGNhcmRObyk7XG4gICAgaGlkZURldGFpbHMoY2FyZE5vKTtcbiAgICBjcmVhdGVFZGl0Rm9ybSgpO1xufVxuXG5leHBvcnQgeyByZW5kZXJQcm9qZWN0U2VjdGlvbiB9OyIsImltcG9ydCBhZGRQcm9qZWN0QnRuLCB7IGluaXRpYWxpemVOZXdQcm9qZWN0QnRuLCBhZGRlZFByb2plY3RzIH0gZnJvbSBcIi4uL25ldy1wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0VG9TaWRlYmFyIH0gZnJvbSBcIi4uL3Byb2plY3QtdG8tRE9NLmpzXCI7XG5pbXBvcnQgeyBzaWRlYmFyRGVsZXRlRnVuY3Rpb25hbGl0eSB9IGZyb20gJy4uL2VkaXQtcHJvamVjdC5qcyc7XG5pbXBvcnQgY3JlYXRlUHJvamVjdEZvcm0gZnJvbSBcIi4uL3Byb2plY3QtZm9ybS5qc1wiO1xuaW1wb3J0IHNldFZpZXcgZnJvbSBcIi4uL3N0YXRlLmpzXCI7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3Qgdmlld3MgPSBbJ0dFTkVSQUwnLCAnVE9EQVknLCAnVVBDT01JTkcnXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyU2lkZWJhcigpIHtcbiAgICByZW5kZXJWaWV3QnV0dG9ucyh2aWV3cyk7XG4gICAgcmVuZGVyU2lkZWJhclByb2plY3RMaXN0VGl0bGUoKTtcbiAgICByZW5kZXJTaWRlYmFyUHJvamVjdExpc3QoYWRkZWRQcm9qZWN0cyk7XG4gICAgc2lkZWJhckRlbGV0ZUZ1bmN0aW9uYWxpdHkoKTtcbiAgICBjcmVhdGVQcm9qZWN0Rm9ybSgpO1xuICAgIHJlbmRlck5ld1Byb2plY3RCdG4oKTtcbiAgICBhZGRQcm9qZWN0QnRuKCk7XG4gICAgaW5pdGlhbGl6ZU5ld1Byb2plY3RCdG4oKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVmlld0J1dHRvbnModmlld3MpIHtcbiAgICB2aWV3cy5mb3JFYWNoKCh2aWV3TmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFySXRlbVwiKTtcbiAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCB2aWV3TmFtZSk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IHZpZXdOYW1lO1xuICAgICAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHNldFZpZXcodmlld05hbWUpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlclNpZGViYXJQcm9qZWN0TGlzdFRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFySXRlbScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHRpdGxlKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU2lkZWJhclByb2plY3RMaXN0KHByb2plY3RzKSB7XG4gICAgYWRkUHJvamVjdFRvU2lkZWJhcihwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5ld1Byb2plY3RCdG4oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJJdGVtJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFByb2plY3QnKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnKyBBZGQgUHJvamVjdCc7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChidXR0b24pO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNldFZpZXcgIGZyb20gJy4vc3RhdGUnO1xuXG5zZXRWaWV3KCdHRU5FUkFMJyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9