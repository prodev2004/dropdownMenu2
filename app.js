const selected = document.querySelector('.selected');
const options_container = document.querySelector('.options')
const arrow_icon = document.querySelector('.selected > i')

const selected_name = document.querySelector('.selected-name')
const selected_icon = document.querySelector('.selected-inner i')

const options = document.querySelectorAll('.option')

options.forEach(option => {
    option.addEventListener('click', () => {
        selected_name.innerText = option.innerText;

        const selected_icon_class = option.firstChild.nextSibling.classList.value;
        selected_icon.setAttribute('class', selected_icon_class)

        options_container.classList.remove('show');
        arrow_icon.classList.remove('rotate')
    })
})

selected.addEventListener('click', () => {
    options_container.classList.toggle('show');
    arrow_icon.classList.toggle('rotate')
})