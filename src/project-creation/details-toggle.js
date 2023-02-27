export default function hideDetails(cardNo) {
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

export function revealDetails(cardNo) {
    const projectSelect = document.querySelector(`.projectCard.no${cardNo}`);
    const description = document.querySelector(`.projectdescription.no${cardNo}`);
    description.classList.toggle('hidden');
    const title = projectSelect.querySelector('.projecttitle');
    title.classList.remove('hidden');
    const dueDate = projectSelect.querySelector('.projectdueDate');
    dueDate.classList.remove('hidden');
    const ellipsis = projectSelect.querySelector('.ellipsis');
    ellipsis.classList.remove('hidden');
}