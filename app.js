const toggleButton = document.getElementsByClassName('toggle-button')[0]
const narlinks = document.getElementsByClassName('nar-links')[0]

toggleButton.addEventListener('click', () => {
    narlinks.classList.toggle('active')
})