import { isToday, parseISO } from "date-fns";
import { addedProjects } from "../project-creation/new-project";
import { renderProjectCards, initializeProjectCardFunctionality } from "./general-view";

let todayProjects = [];

function todayFilter(array) {
    for (let i = 0; i < array.length; i++) {
        let formattedDate = parseISO(array[i].dueDate);
        if (isToday(formattedDate)) {
            todayProjects.push(array[i])
        } else {
            continue;
        }
    }
}

export default function renderTodaySection() {
    todayFilter(addedProjects);
    renderProjectCards(todayProjects);
    initializeProjectCardFunctionality();
    todayProjects = [];
}