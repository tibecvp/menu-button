
/** SECOND BUTTON */
document.addEventListener('DOMContentLoaded', function() {
    const navIcon = document.getElementById('menu-btn')
    const navIcon2 = document.getElementById('menu-btn2')

    navIcon.addEventListener('click', function() {
        this.classList.toggle('open')
    })
    navIcon2.addEventListener('click', function() {
        this.classList.toggle('open')
    })
})