import { compareAsc, parseISO } from "date-fns";
import { addedProjects } from "./new-project";

let formattedDates = [];

let orderedDates = [];

function formatDates(array) {
    for (let i = 0; i < array.length; i++) {
        let formatted = parseISO(array[i].dueDate);
        formattedDates.push(formatted);
    }
}

export default function sortDates() {
    formatDates(addedProjects);
    formattedDates.sort(compareAsc);
}

