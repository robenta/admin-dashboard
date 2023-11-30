// SWITCH FROM LIGHT TO DARK MODE AND VICE-VERSA
const html = document.querySelector('html')
const topIcons = document.querySelector('#top-icons')
const darkMode = document.querySelector('#dark-mode')
const lightMode = document.createElement('i')

darkMode.addEventListener('click', switchModeDark)
topIcons.addEventListener('click', switchModesLight)

function switchModeDark(e){
    if (e.target.id = 'dark-mode') {
        html.setAttribute('data-bs-theme', 'dark')

        lightMode.classList = 'fa-solid fa-sun'
        lightMode.id = 'light-mode'
        topIcons.replaceChild(lightMode, darkMode);
    }
}
function switchModesLight(e){
    if(e.target.className.includes('fa-sun')) {
        html.removeAttribute('data-bs-theme', 'dark')
        topIcons.replaceChild(darkMode, lightMode);
    }
}



// HIDE PURPLE TEXT ON NAVBAR/SIDE-MENU ON CLICK OF THE MENU BUTTON
const topRow = document.querySelector('#top-row')
const firstColumn = document.querySelector('#first-column')
const secondColumn = document.querySelector('#second-column')
const menuIcon = document.querySelector('#menu-icon')
const mainRow = document.querySelector('#main-row')
const sideMenu = document.querySelector('#side-menu')
const sideMenuSmall = document.querySelector('#side-menu-small')
const purpleText = document.querySelector('.purple')
const mainBody = document.querySelector('#main-body')
const icon = document.querySelector('#icon')


menuIcon.addEventListener('click', hideFirstColumn)
const newIcon = document.createElement('div')


function hideFirstColumn(e){
    if (purpleText.className === 'purple') {
        purpleText.classList.add('d-none')
        icon.classList.add('p-1')

        sideMenu.classList.add('d-none')
        sideMenuSmall.classList.remove('d-none')
        mainBody.classList.remove('col-md-9')
        mainBody.classList.add('col-md-11')
    }else{
        purpleText.classList.remove('d-none')
        sideMenu.classList.remove('d-none')
        sideMenuSmall.classList.add('d-none')
        mainBody.classList.remove('col-md-11')
        mainBody.classList.add('col-md-9')
    }
}



// TO CHOOSE BETWEEN TO-DO AND CHATS IN OFFCANVAS
const chats = document.querySelector('.chats')
const todoList = document.querySelector('.todo')
const offcanvasChat = document.querySelector('#chats')
const offcanvasTodo = document.querySelector('#todo-list')

chats.addEventListener('click', showChats)
function showChats(e){
    offcanvasChat.classList.remove('d-none')
    offcanvasTodo.classList.add('d-none')
}

todoList.addEventListener('click', showTodo)
function showTodo(e){
    offcanvasChat.classList.add('d-none')
    offcanvasTodo.classList.remove('d-none')
}