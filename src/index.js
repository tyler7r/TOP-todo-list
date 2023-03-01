import setView  from './state';
import { pullFromStorage } from './project-creation/new-project';

pullFromStorage();
setView('GENERAL');

// projectpriority todopriority