import { parseISO, isThisWeek } from "date-fns";
import { addedProjects } from "../project-creation/new-project";
import { renderProjectCards, initializeProjectCardFunctionality } from "./general-view";

let upcomingProjects = [];

function upcomingFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = parseISO(array[i].dueDate);
        if (isThisWeek(formattedDate)) {
            upcomingProjects.push(array[i])
        } else {
            continue;
        }
    }
}

export default function renderUpcomingSection() {
    upcomingFilter(addedProjects);
    renderProjectCards(upcomingProjects);
    initializeProjectCardFunctionality();
    upcomingProjects = [];
}