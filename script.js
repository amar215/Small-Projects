// Array of all class '.card' to iterate through loop
const cards = document.querySelectorAll('.card')

// Adding active class to elements not containing it
cards.forEach((card) => {
    card.addEventListener('click', () => {
        removeActiveClass()
        card.classList.add('active')
    })
})

// Removing active class from elements which contain it
function removeActiveClass() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}