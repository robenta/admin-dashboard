// SWITCH FROM LIGHT TO DARK MODE AND VICE-VERSA
const header = document.querySelector('header')
const body = document.querySelector('body')
const mBody = document.querySelector('#main-body-col')
const faIcons = document.querySelectorAll('.fa-solid')
const faReg = document.querySelectorAll('.fa-regular')
const modes1 = document.querySelector('#modes1')
const modes2 = document.querySelector('#modes2')
const offcanvas = document.querySelector('#offcanvasRight')
const spanName = document.querySelectorAll('.name')
const ul = document.querySelector('#offcanvasRight')
const navbarToggler = document.querySelector('.navbar-toggler')
const search = document.querySelectorAll('.search')
const allElements = document.querySelectorAll('div')
const pTexts = document.querySelectorAll('.pTexts')
const itemTexts = document.querySelectorAll('.itemText')

modes1.addEventListener('click', switchModes1)
function switchModes1(e){
    if (e.target.classList.contains('fa-moon')) {
        body.style.backgroundColor = 'black'
        mBody.style.backgroundColor = 'black'
        header.style.backgroundColor = 'black'
        offcanvas.style.backgroundColor = 'black'
        offcanvas.style.borderLeftColor = '#d688ff'
        navbarToggler.style.backgroundColor = '#d688ff'
        offcanvas.style.borderLeftStyle = "solid"; 
        offcanvas.style.borderLeftWidth = "0.5px";
        topRow.classList.add("shadowAdded");
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
            all.style.backgroundColor = '#f5f5f5'
            all.style.border = '2px solid #d688ff'
            all.classList.add('dark-mode');
        })
        spanName.forEach((all)=>{
            all.style.color = '#beabc1'
        })
        pTexts.forEach((all)=>{
            all.style.color = '#beabc1'
        })
        itemTexts.forEach((list)=>{
            list.style.color = '#beabc1'
        })
        modes1.classList.remove('fa-moon')
        modes1.classList.add('fa-sun')
    }else{
        body.style.backgroundColor = '#fff'
        header.style.backgroundColor = '#fff'
        mBody.style.backgroundColor = ''
        offcanvas.style.backgroundColor = '#fff'
        navbarToggler.style.backgroundColor = '#fff'
        offcanvas.style.borderLeftColor = 'none'
        offcanvas.style.borderLeftStyle = "none"; 
        offcanvas.style.borderLeftWidth = "none";
        topRow.classList.remove("shadowAdded");

        faIcons.forEach((fa)=>{
            fa.style.color = '#d688ff'
        })
        faReg.forEach((fag)=>{
            fag.style.color = '#d688ff'
        })
        allElements.forEach((all)=>{
            all.style.color = '#383838'
        })
        search.forEach((all)=>{
            all.style.backgroundColor = '#fff'
            all.style.border = '2px solid #d688ff'
            all.classList.remove('dark-mode');
        })
        spanName.forEach((all)=>{
            all.style.color = '#383838'
        })
        itemTexts.forEach((list)=>{
            list.style.color = ''
        })

        modes1.classList.add('fa-moon')
        modes1.classList.remove('fa-sun')  
    }

}

modes2.addEventListener('click', switchModes2)
function switchModes2(e){
    if (e.target.classList.contains('fa-moon')) {
        body.style.backgroundColor = 'black'
        mBody.style.backgroundColor = 'black'
        header.style.backgroundColor = 'black'
        offcanvas.style.backgroundColor = 'black'
        offcanvas.style.borderLeftColor = '#d688ff'
        navbarToggler.style.backgroundColor = '#d688ff'
        offcanvas.style.borderLeftStyle = "solid"; 
        offcanvas.style.borderLeftWidth = "0.5px";
        topRow.classList.add("shadowAdded");
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
            all.style.backgroundColor = '#f5f5f5'
            all.style.border = '2px solid #d688ff'
            all.classList.add('dark-mode');
        })
        spanName.forEach((all)=>{
            all.style.color = '#beabc1'
        })
        pTexts.forEach((all)=>{
            all.style.color = '#beabc1'
        })
        itemTexts.forEach((list)=>{
            list.style.color = '#beabc1'
        })
        modes2.classList.remove('fa-moon')
        modes2.classList.add('fa-sun')
    }else{
        body.style.backgroundColor = '#fff'
        mBody.style.backgroundColor = ''
        header.style.backgroundColor = '#fff'
        offcanvas.style.backgroundColor = '#fff'
        navbarToggler.style.backgroundColor = '#fff'
        offcanvas.style.borderLeftColor = 'none'
        offcanvas.style.borderLeftStyle = "none"; 
        offcanvas.style.borderLeftWidth = "none";
        topRow.classList.remove("shadowAdded");

        faIcons.forEach((fa)=>{
            fa.style.color = '#d688ff'
        })
        faReg.forEach((fag)=>{
            fag.style.color = '#d688ff'
        })
        allElements.forEach((all)=>{
            all.style.color = ''
        })
        search.forEach((all)=>{
            all.style.backgroundColor = ''
            all.style.border = ''
            all.classList.remove('dark-mode');
        })
        spanName.forEach((all)=>{
            all.style.color = ''
        })
        itemTexts.forEach((list)=>{
            list.style.color = ''
        })

        modes2.classList.add('fa-moon')
        modes2.classList.remove('fa-sun')  
    }

}



// HIDE SIDE-MENU ON CLICK OF THE MENU BUTTON
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
        mainBody.parentElement.classList.remove('col-md-9')
        mainBody.parentElement.classList.add('col-md-12')
        mainBody.classList.remove('d-none')
    }else{
        menuIcon.classList.add('open')
        sideMenu.classList.remove('d-none')
        sideMenuSmall.classList.remove('d-xxl-block')
        sideMenuSmall.classList.remove('d-xl-block')
        sideMenuSmall.classList.remove('d-md-block')
        sideMenuSmall.classList.remove('d-lg-block')
        mainBody.classList.add('d-none')
        mainBody.parentElement.classList.remove('col-md-12')
        mainBody.parentElement.classList.add('col-md-9')
    }
}


// HIDE SIDE-MENU/REVEAL SMALL SIDE-MENU ON CLICK OF THE MENU BUTTON ON LARGE SCREENS
const menuLgScrn = document.querySelector('#menuLgScrn')

menuLgScrn.addEventListener('click', hideForLgScrn)
function hideForLgScrn(e){
    if (e.target.parentElement.classList.contains('open')) {
        e.target.parentElement.classList.replace('open', 'close')
        sideMenu.classList.add('d-none')
        sideMenuSmall.classList.add('d-xxl-block')
        sideMenuSmall.classList.add('d-xl-block')
        sideMenuSmall.classList.add('d-md-block')
        sideMenuSmall.classList.add('d-lg-block')
        mainBody.parentElement.classList.remove('col-md-9')
        mainBody.parentElement.classList.add('col-md-11')
    }else{
        e.target.parentElement.classList.replace('close', 'open')
        sideMenu.classList.remove('d-none')
        sideMenuSmall.classList.remove('d-xxl-block')
        sideMenuSmall.classList.remove('d-xl-block')
        sideMenuSmall.classList.remove('d-md-block')
        sideMenuSmall.classList.remove('d-lg-block')
        mainBody.parentElement.classList.remove('col-md-11')
        mainBody.parentElement.classList.add('col-md-9')
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
const submitBtn = document.querySelector('#addTask')
const inputDiv = document.querySelector('#inputDiv')
const input = document.querySelector('#todoInput')
const itemList = document.querySelectorAll('.itemText')
const checkboxes = document.querySelectorAll('.checkbox')
const clearTaskButtons = document.querySelectorAll('.clearTask')
const list = document.querySelector('.todoList')

submitBtn.addEventListener('click', addTask);
function addTask() {
    // create list
    const parentDiv = document.createElement('div')
    parentDiv.classList = 'd-flex my-3 pb-2 border-bottom justify-content-between'
    list.appendChild(parentDiv)

    const div1 = document.createElement('div')
    div1.classList = 'd-flex gap-3'
    div1.innerHTML = '<input type="checkbox" name="checkboxes" class="checkbox">'
    const span = document.createElement('span')
    span.className = 'itemText'
    span.textContent = input.value
    div1.appendChild(span)
    parentDiv.appendChild(div1)

    const div2 = document.createElement('div')
    div2.innerHTML = '<i class="fa-regular fa-circle-xmark clearTask"></i>'
    parentDiv.appendChild(div2)

    input.value = ''
}

document.querySelector('.todoList').addEventListener('click', deleteTask);
function deleteTask(event) {
    const target = event.target;
    
    // Check if the clicked element has the class 'clearTask'
    if (target.classList.contains('clearTask')) {
        // Delete the parent task element
        const task = target.closest('.d-flex');
        task.remove();
    }
}


// submitBtn.addEventListener('click', addTask)
// function addTask(e){
//     if (input.value === '') {
//         showAlert('Please add a task', 'danger');
//     }else{

//         addTaskFunction()


//         showAlert('Task added', 'purple');

//         input.value = ''

//     }
//     e.preventDefault()
// }

// function addTaskFunction(){
//     // create list
//     const parentDiv = document.createElement('div')
//     parentDiv.classList = 'd-flex my-3 pb-2 border-bottom justify-content-between'
//     list.appendChild(parentDiv)

//     const div1 = document.createElement('div')
//     div1.classList = 'd-flex gap-3'
//     div1.innerHTML = '<input type="checkbox" name="checkboxes" class="checkbox">'
//     const span = document.createElement('span')
//     span.className = 'itemText'
//     span.textContent = input.value
//     div1.appendChild(span)
//     parentDiv.appendChild(div1)

//     const div2 = document.createElement('div')
//     div2.innerHTML = '<i class="fa-regular fa-circle-xmark clearTask"></i>'
//     parentDiv.appendChild(div2)
// }

clearTaskButtons.forEach(button=>{
    button.addEventListener('click', removeTask)
})
function removeTask(e){
    if (e.target.classList.id = 'clearTask') {
        e.target.parentElement.parentElement.remove()
    }
}


list.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('checkbox')) {
        toggleItemText(e.target);
    }
});

function toggleItemText(checkbox) {
    var itemText = checkbox.nextElementSibling; 
    var clearTask = checkbox.parentElement.nextElementSibling.querySelector('.clearTask'); 

    if (checkbox.checked) {
        itemText.classList.add("completed");
        clearTask.classList.add('complete');
    } else {
        itemText.classList.remove("completed");
        clearTask.classList.remove("complete");
        clearTask.style.color = ''; 
    }
}


function showAlert(message, className){
    const alertDiv = document.createElement('div')
    alertDiv.className = `alert alert-${className}`
    alertDiv.appendChild(document.createTextNode(message))
    offcanvasTodo.insertBefore(alertDiv, inputDiv)

    setTimeout(()=> document.querySelector('.alert').remove(), 2000)
}


