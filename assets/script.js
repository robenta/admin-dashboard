// SWITCH FROM LIGHT TO DARK MODE AND VICE-VERSA
const secondColumn = document.querySelector('#second-column')
const thirdColumn = document.querySelector('#third-column')
const header = document.querySelector('header')
const body = document.querySelector('body')
const faIcons = document.querySelectorAll('.fa-solid')
const faReg = document.querySelectorAll('.fa-regular')
const modes = document.querySelector('#modes')
const offcanvas = document.querySelector('#offcanvasRight')
const ul = document.querySelector('#offcanvasRight')
const navbarToggler = document.querySelector('.navbar-toggler')
const search = document.querySelectorAll('.search')
const allElements = document.querySelectorAll('div')
// const listItem = document.querySelectorAll('.list-group-item')

modes.addEventListener('click', switchModes)
function switchModes(e){
    if (e.target.classList.contains('fa-moon')) {
        body.style.backgroundColor = 'black'
        header.style.backgroundColor = 'black'
        offcanvas.style.backgroundColor = 'black'
        offcanvas.style.borderLeftColor = '#d688ff'
        navbarToggler.style.color = 'red'
        navbarToggler.style.backgroundColor = '#d688ff'
        offcanvas.style.borderLeftStyle = "solid"; 
        offcanvas.style.borderLeftWidth = "0.5px";
        topRow.style.borderBottom = "2px solid #d688ff";
        faIcons.forEach((fa)=>{
            fa.style.color = '#beabc1'
        })
        faReg.forEach((fag)=>{
            fag.style.color = '#beabc1'
        })
        allElements.forEach((all)=>{
            all.style.color = '#beabc1'
        })
        search.forEach((all)=>{
            all.style.color = '#fff'
            all.style.backgroundColor = '#beabc1'
            all.style.border = '2px solid #d688ff'
            all.style.border = 'none'        
        })
        // listItem.forEach((list)=>{
        //     list.style.backgroundColor = 'black'
        // })
        modes.classList.remove('fa-moon')
        modes.classList.add('fa-sun')
    }else{
        body.style.backgroundColor = '#fff'
        header.style.backgroundColor = '#fff'
        offcanvas.style.backgroundColor = '#fff'
        offcanvas.style.borderLeftColor = 'none'
        offcanvas.style.borderLeftStyle = "none"; 
        offcanvas.style.borderLeftWidth = "none";
        topRow.style.borderBottom = "none";

        faIcons.forEach((fa)=>{
            fa.style.color = 'grey'
        })
        faReg.forEach((fag)=>{
            fag.style.color = 'grey'
        })
        allElements.forEach((all)=>{
            all.style.color = '#000'
        })
        search.forEach((all)=>{
            all.style.backgroundColor = '#beabc1'
            all.style.border = '2px solid #d688ff'
            all.style.border = 'none'        
        })
        // listItem.forEach((list)=>{
        //     list.style.backgroundColor = '#fff'
        // })

        modes.classList.add('fa-moon')
        modes.classList.remove('fa-sun')  
    }

}



// HIDE PURPLE TEXT ON NAVBAR/SIDE-MENU ON CLICK OF THE MENU BUTTON
const topRow = document.querySelector('#top-row')
const menuIcon = document.querySelector('#menu-icon')
const mainRow = document.querySelector('#main-row')
const sideMenu = document.querySelector('#side-menu')
const sideMenuSmall = document.querySelector('#side-menu-small')
const mainBody = document.querySelector('#main-body')


menuIcon.addEventListener('click', hideFirstColumn)

function hideFirstColumn(e){
    if (e.target.classList.contains('open')) {
        menuIcon.classList.remove('open')
        sideMenu.classList.add('d-none')
        sideMenuSmall.classList.add('d-xxl-block')
        sideMenuSmall.classList.add('d-xl-block')
        sideMenuSmall.classList.add('d-md-block')
        sideMenuSmall.classList.add('d-lg-block')
        mainBody.classList.remove('col-md-9')
        mainBody.classList.add('col-md-11')
    }else{
        menuIcon.classList.add('open')
        sideMenu.classList.remove('d-none')
        sideMenuSmall.classList.remove('d-xxl-block')
        sideMenuSmall.classList.remove('d-xl-block')
        sideMenuSmall.classList.remove('d-md-block')
        sideMenuSmall.classList.remove('d-lg-block')
        mainBody.classList.remove('col-md-11')
        mainBody.classList.add('col-md-9')
    }
}



// TO CHOOSE BETWEEN TO-DO AND CHATS IN OFFCANVAS
const chats = document.querySelector('.chats')
const todoList = document.querySelector('.todo')
const offcanvasChat = document.querySelector('#chats')
const offcanvasTodo = document.querySelector('#todo-list')
const offcanvasToggle = document.querySelector('#offcanvasToggle')

offcanvasToggle.addEventListener('click', dimHeaderTextColor)
function dimHeaderTextColor(){
    if (offcanvasChat.classList.contains('d-none')) {
        chats.style.color = '#d5d3d3'
    }else{
        chats.style.color = 'white'
    }
}
chats.addEventListener('click', showChats)
function showChats(){
    offcanvasChat.classList.remove('d-none')
    offcanvasTodo.classList.add('d-none')
    todoList.style.color = '#d5d3d3'
    chats.style.color = 'white'
}
todoList.addEventListener('click', showTodo)
function showTodo(){
    offcanvasChat.classList.add('d-none')
    offcanvasTodo.classList.remove('d-none')
    chats.style.color = '#d5d3d3'
    todoList.style.color = 'white'
}

// TODO LIST
const listGroup = document.querySelector('.list-group')
const submitBtn = document.querySelector('#addTask')
const inputDiv = document.querySelector('#inputDiv')
const input = document.querySelector('#todoInput')
const itemList = document.querySelectorAll('.itemText')
const checkboxes = document.querySelectorAll('.checkbox')
const clearTaskButtons = document.querySelectorAll('.clearTask')

submitBtn.addEventListener('click', addTask)
function addTask(e){
    if (input.value === '') {
        showAlert('Please add a task', 'danger');
    }else{
        // create list
        const p = document.createElement('p')
        p.textContent = 'testing 12'
        listGroup.append(p)
        const newListItem = document.createElement('li')
        newListItem.className = 'list-group-item border'

        const litDiv = document.createElement('div')
        litDiv.className = 'd-flex justify-content-between'

        const litDiv1 = document.createElement('div')
        litDiv1.classList = 'd-flex gap-3'
        litDiv1.innerHTML = '<input type="checkbox" name="checkboxes" class="checkbox">'
        const litDiv1Span = document.createElement('span')
        litDiv1Span.className = 'itemText'
        litDiv1Span.textContent = input.value
        litDiv1.appendChild(litDiv1Span)
        litDiv.appendChild(litDiv1)


        const litDiv2 = document.createElement('div')
        litDiv2.className = ' '
        litDiv2.innerHTML = '<i class="fa-regular fa-circle-xmark clearTask"></i>'
        litDiv.appendChild(litDiv2)        

        newListItem.append(litDiv)

        listGroup.appendChild(newListItem)

        showAlert('Task added', 'purple');

        input.value = ''

    }
    e.preventDefault()
}

clearTaskButtons.forEach(button=>{
    button.addEventListener('click', removeTask)
})
function removeTask(e){
    if (e.target.classList.id = 'clearTask') {
        e.target.parentElement.parentElement.parentElement.remove()
    }
}


checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', changeCheckboxColor) 
    function changeCheckboxColor() {
        const span = checkbox.parentElement.querySelector('.itemText');
        span.classList.toggle('checked', checkbox.checked);
        
        const icon = checkbox.parentElement.nextElementSibling.querySelector('.clearTask');
        icon.classList.toggle('checked-color', checkbox.checked);
    };
});

function showAlert(message, className){
    const alertDiv = document.createElement('div')
    alertDiv.className = `alert alert-${className}`
    alertDiv.appendChild(document.createTextNode(message))
    offcanvasTodo.insertBefore(alertDiv, inputDiv)

    setTimeout(()=> document.querySelector('.alert').remove(), 2000)
}


// const navToggler = document.querySelector('#navbar-toggle')

// navToggler.addEventListener('click', removeMenuBtn)
// function removeMenuBtn(e){
//     if (menuIcon.classList.contains('d-block')) {
//         menuIcon.classList.remove('d-block')
//         menuIcon.classList.add('d-none')
//     }else{
//         menuIcon.classList.remove('d-none')
//         menuIcon.classList.add('d-block')
//     }
//     e.preventDefault
// }