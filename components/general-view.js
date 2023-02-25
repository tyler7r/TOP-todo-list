import hideDetails, { revealDetails } from 'details-toggle.js';
import createEditForm from '../src/edit-form.js';
import addEllipsisFunctionality from '../src/edit-project.js';
import expandProjectCard from '../src/expand-project.js';
import addProjectToContent from '../src/project-to-DOM.js';
import { setView } from '../src/state.js';

export function renderProjectSection() {
    setView(generalView);
    
}