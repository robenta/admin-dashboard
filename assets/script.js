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



// HIDE PURPLE TEXT ON NAVBAR ON CLICK OF THE MENU BUTTON
const topRow = document.querySelector('#top-row')
const firstColumn = document.querySelector('#first-column')
const secondColumn = document.querySelector('#second-column')
const menuIcon = document.querySelector('#menu-icon')

menuIcon.addEventListener('click', hideFirstColumn)
const newIcon = document.createElement('div')

function hideFirstColumn(e){
    if (firstColumn.classList != 'col-md-2 ps-5 d-flex align-items-center purple-column d-none') {
        firstColumn.classList.add('d-none')
        newIcon.classList = 'col-md-2 m-0 d-flex align-items-center purple-column'
        newIcon.id = 'new-icon'
        newIcon.innerHTML = '<i class="fa-solid fa-layer-group" style="color: #ba75ff;"></i>'
        topRow.insertBefore(newIcon, secondColumn)
    }else{
        firstColumn.classList.remove('d-none')
        newIcon.remove()
    }
}
