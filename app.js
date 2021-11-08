const toggle = document.getElementById('toggle')
const home = document.getElementById('home-wrap')
const menu = document.getElementById('menu-wrap')


function switchContent() {
    if (menu.classList.contains('hide')) {
        home.classList.add('hide')
        menu.classList.remove('hide')
        toggle.innerText = "home"
    } else if (home.classList.contains('hide')) {
        menu.classList.add('hide')
        home.classList.remove('hide')
        toggle.innerText = "menu"
    }
}


toggle.addEventListener('click', switchContent)

