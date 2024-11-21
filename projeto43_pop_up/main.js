const buttonClick = document.querySelector('#buttonClick')
const sectionPopUp = document.querySelector('#sectionPopUp')
const fechar = document.querySelector('#fechar')
const body = document.body

buttonClick.addEventListener('click', () => {
    body.style.background = '#bdbcbc'
    sectionPopUp.style.display = 'block'
    buttonClick.disabled = true
})

fechar.addEventListener('click', () => {
    body.style.background = 'white'
    sectionPopUp.style.display = 'none'
    buttonClick.disabled = false
})