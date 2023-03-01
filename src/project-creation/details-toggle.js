export default function hideDetails(cardType, cardNo) {
    const projectSelect = document.querySelector(`.${cardType}Card.no${cardNo}`);
    const description = projectSelect.querySelector(`.${cardType}description`);
    description.classList.add('hidden');
    const title = projectSelect.querySelector(`.${cardType}title`);
    title.classList.add('hidden');
    const dueDate = projectSelect.querySelector(`.${cardType}dueDate`);
    dueDate.classList.add('hidden');
    const ellipsis = projectSelect.querySelector(`.${cardType}ellipsis`);
    ellipsis.classList.add('hidden')
    const priority = projectSelect.querySelector(`.${cardType}priority`);
    priority.classList.add('hidden');
    const checkmark = projectSelect.querySelector(`.${cardType}checkmark`);
    checkmark.classList.add('hidden');
}

export function revealDetails(cardType, cardNo) {
    const projectSelect = document.querySelector(`.${cardType}Card.no${cardNo}`);
    const description = document.querySelector(`.${cardType}description`);
    description.classList.toggle('hidden');
    const title = projectSelect.querySelector(`.${cardType}title`);
    title.classList.remove('hidden');
    const dueDate = projectSelect.querySelector(`.${cardType}dueDate`);
    dueDate.classList.remove('hidden');
    const priority = projectSelect.querySelector(`.${cardType}priority`);
    priority.classList.remove('hidden');
    const ellipsis = projectSelect.querySelector(`.${cardType}ellipsis`);
    ellipsis.classList.remove('hidden');
    const checkmark = projectSelect.querySelector(`.${cardType}checkmark`);
    checkmark.classList.remove('hidden');
}