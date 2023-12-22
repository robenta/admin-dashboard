// SWITCH FROM LIGHT TO DARK MODE AND VICE-VERSA
const header = document.querySelector('header')
const body = document.querySelector('body')
const logoText = document.querySelector('.logo-text')
const logoIcon = document.querySelector('#logo-icon')
const mBody = document.querySelector('#main-body-col')
const sideMenu = document.querySelector('#side-menu')
const sideMenuSmall = document.querySelector('#side-menu-small')
const faIcons = document.querySelectorAll('.fa-solid')
const faReg = document.querySelectorAll('.fa-regular')
const modes1 = document.querySelector('.modes1')
const modes2 = document.querySelector('.modes2')
const offcanvas = document.querySelector('#offcanvasRight')
const spanName = document.querySelectorAll('.name')
const headerImage = document.querySelectorAll('.headerImage')
const ul = document.querySelector('#offcanvasRight')
const navbarToggler = document.querySelector('.navbar-toggler')
const allElements = document.querySelectorAll('div')
const pTexts = document.querySelectorAll('.pTexts')
const itemTexts = document.querySelectorAll('.itemText')
const whiteDiv = document.querySelectorAll('.bg-white')
const tableRows = document.querySelectorAll('.table-row')
const clearTaskButtons2 = document.querySelectorAll('.clearTask2')
const search = document.querySelectorAll('.search')
const tripleIcon = document.querySelectorAll('.tripleIcon')
// const mainBodyH5 = document.querySelectorAll('.mainBodyh5')
const darkTexts = document.querySelectorAll('.darkTexts')
const bodyIcon = document.querySelectorAll('.bodyIcon')




modes1.addEventListener('click', switchModes)
function switchModes(e){
    if (e.target.classList.contains('fa-moon')) {
        body.style.backgroundColor = 'black'
        mBody.style.backgroundColor = 'black'
        logoText.style.color = '#ffd0ce'
        logoIcon.style.color = '#ffd0ce'
        header.style.backgroundColor = 'black'
        offcanvas.style.backgroundColor = 'black'
        navbarToggler.style.color = '#ffd0ce'
        offcanvas.style.borderLeftColor = '#ffd0ce'
        offcanvas.style.borderLeftStyle = "solid"; 
        offcanvas.style.borderLeftWidth = "0.5px";
        // sideMenu.classList.add('border-end')
        // sideMenu.classList.add('border-dark')
        sideMenu.style.borderRightColor = '#ffd0ce'
        sideMenu.style.borderRightStyle = 'solid'
        sideMenu.style.borderRightWidth = "0.1px";
        // sideMenuSmall.style.borderRightColor = "#ffd0ce"; 
        // sideMenuSmall.style.borderRightStyle = "solid"; 
        // sideMenuSmall.style.borderRightWidth = "0.3px";
        // topRow.classList.add("shadowAdded");
        faIcons.forEach((fa)=>{
            fa.style.color = '#ffd0ce'
        })
        faReg.forEach((fag)=>{
            fag.style.color = '#ffd0ce'
        })
        allElements.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        // search.forEach((all)=>{
        //     all.style.borderBottomColor = ''
        //     all.style.borderBottomStyle = 'solid'
        //     all.style.borderBottomWidth = '3px'
        // })
        spanName.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        pTexts.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        itemTexts.forEach((list)=>{
            list.style.color = '#ffd0ce'
        })
        headerImage.forEach((all)=>{
            all.style.border = '2px solid #ffd0ce'
        })
        whiteDiv.forEach((all)=>{
            all.classList.remove('bg-white')
            all.classList.add('bg-light')
            
        })
        tableRows.forEach((all)=>{
            all.classList.add('table-light')
        })
        clearTaskButtons2.forEach((all)=>{
            all.style.color = ''
        })
        tripleIcon.forEach((all)=>{
            all.style.color = '';
        })
        darkTexts.forEach((all)=>{
            all.style.color = '#383838';
        })
        bodyIcon.forEach((all)=>{
            all.style.color = '';
        })
        modes1.classList.remove('fa-moon')
        modes1.classList.add('fa-sun')
        modes2.classList.remove('fa-moon')
        modes2.classList.add('fa-sun')
        
    }else{
        body.style.backgroundColor = ''
        header.style.backgroundColor = ''
        logoText.style.color = ''
        logoIcon.style.color = ''
        mBody.style.backgroundColor = ''
        offcanvas.style.backgroundColor = ''
        navbarToggler.style.color = ''
        // offcanvas.style.borderLeftColor = ''
        // offcanvas.style.borderLeftStyle = ""; 
        // offcanvas.style.borderLeftWidth = "";
        sideMenu.style.borderRightColor = ''
        sideMenu.style.borderRightStyle = ''
        sideMenu.style.borderRightWidth = "";
        // topRow.classList.remove("shadowAdded");

        faIcons.forEach((fa)=>{
            fa.style.color = ''
        })
        faReg.forEach((fag)=>{
            fag.style.color = ''
        })
        allElements.forEach((all)=>{
            all.style.color = ''
        })
        search.forEach((all)=>{
            all.style.backgroundColor = ''
            all.style.border = ''
        })
        pTexts.forEach((all)=>{
            all.style.color = ''
        })
        spanName.forEach((all)=>{
            all.style.color = ''
        })
        itemTexts.forEach((list)=>{
            list.style.color = ''
        })
        headerImage.forEach((all)=>{
            all.style.border = ''
        })
        whiteDiv.forEach((all)=>{
            all.classList.remove('bg-light')
            all.classList.add('bg-white')
        })
        tableRows.forEach((all)=>{
            all.classList.remove('table-light')
        })

        modes1.classList.add('fa-moon')
        modes1.classList.remove('fa-sun')  
        modes2.classList.add('fa-moon')
        modes2.classList.remove('fa-sun')  
    }

}


modes2.addEventListener('click', switchModes2)
function switchModes2(e){
    if (e.target.classList.contains('fa-moon')) {
        body.style.backgroundColor = 'black'
        mBody.style.backgroundColor = 'black'
        logoText.style.color = '#ffd0ce'
        logoIcon.style.color = '#ffd0ce'
        header.style.backgroundColor = 'black'
        offcanvas.style.backgroundColor = 'black'
        offcanvas.style.borderLeftColor = '#d688ff'
        navbarToggler.style.color = '#d688ff'
        offcanvas.style.borderLeftStyle = "solid"; 
        offcanvas.style.borderLeftWidth = "0.5px";
        sideMenu.style.borderRightColor = '#ffd0ce'
        sideMenu.style.borderRightStyle = 'solid'
        sideMenu.style.borderRightWidth = "0.3px";
        topRow.classList.add("shadowAdded");
        faIcons.forEach((fa)=>{
            fa.style.color = '#ffd0ce'
        })
        faReg.forEach((fag)=>{
            fag.style.color = '#ffd0ce'
        })
        allElements.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        search.forEach((all)=>{
            all.style.backgroundColor = '#f5f5f5'
            all.style.borderColor = ' #d688ff'
            all.style.borderStyle = ' solid'
            all.style.borderWidth = ' 1px'
        })
        spanName.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        pTexts.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        itemTexts.forEach((list)=>{
            list.style.color = '#ffd0ce'
        })
        headerImage.forEach((all)=>{
            all.style.border = '2px solid #ffd0ce'
        })
        whiteDiv.forEach((all)=>{
            all.classList.remove('bg-white')
            all.classList.add('bg-light')
        })
        tableRows.forEach((all)=>{
            all.classList.add('table-light')
        })
        modes2.classList.remove('fa-moon')
        modes2.classList.add('fa-sun')
        modes1.classList.remove('fa-moon')
        modes1.classList.add('fa-sun')
    }else{
        body.style.backgroundColor = ''
        mBody.style.backgroundColor = ''
        logoText.style.color = ''
        logoIcon.style.color = ''
        header.style.backgroundColor = ''
        offcanvas.style.backgroundColor = ''
        navbarToggler.style.color = ''
        offcanvas.style.borderLeftColor = ''
        offcanvas.style.borderLeftStyle = ""; 
        offcanvas.style.borderLeftWidth = "";
        topRow.classList.remove("shadowAdded");

        faIcons.forEach((fa)=>{
            fa.style.color = ''
        })
        faReg.forEach((fag)=>{
            fag.style.color = ''
        })
        allElements.forEach((all)=>{
            all.style.color = ''
        })
        search.forEach((all)=>{
            all.style.backgroundColor = ''
            all.style.border = ''
        })
        pTexts.forEach((all)=>{
            all.style.color = ''
        })
        spanName.forEach((all)=>{
            all.style.color = ''
        })
        itemTexts.forEach((list)=>{
            list.style.color = ''
        })
        headerImage.forEach((all)=>{
            all.style.border = ''
        })
        whiteDiv.forEach((all)=>{
            all.classList.remove('bg-light')
            all.classList.add('bg-white')
        })
        tableRows.forEach((all)=>{
            all.classList.remove('table-light')
        })

        modes2.classList.add('fa-moon')
        modes2.classList.remove('fa-sun')  
        modes1.classList.add('fa-moon')
        modes1.classList.remove('fa-sun')  
    }

}


// HIDE SIDE-MENU ON CLICK OF THE MENU BUTTON
const topRow = document.querySelector('#top-row')
const menuIcon = document.querySelector('#menu-icon')
const mainRow = document.querySelector('#main-row')
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
        chats.style.color = 'grey'
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

// OFF-CANVAS TODO LIST
const submitBtn = document.querySelector('#addTask')
const inputDiv = document.querySelector('#inputDiv')
const input = document.querySelector('#todoInput')
const itemList = document.querySelectorAll('.itemText')
const checkboxes = document.querySelectorAll('.checkbox')
const clearTaskButtons = document.querySelectorAll('.clearTask')
const list = document.querySelector('.todoList')

// ADD TASK
submitBtn.addEventListener('click', addTask);
function addTask(e) {
    if (input.value === '') {
        showAlert('Please add a task', 'danger');
    }else{
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
    e.preventDefault()
}

// DELETE TASK
document.querySelector('.todoList').addEventListener('click', deleteTask);
function deleteTask(e) {
    const target = e.target;
    
    if (target.classList.contains('clearTask')) {
        // Delete the parent task element
        const task = target.closest('.d-flex');
        task.remove();
    }
}

// STYLING FOR CHECKBOX ON CLICK
list.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkbox')) {
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
    }
}

// ALERT STYLING
function showAlert(message, className){
    const alertDiv = document.createElement('div')
    alertDiv.className = `alert alert-${className}`
    alertDiv.append(document.createTextNode(message))
    offcanvasTodo.insertBefore(alertDiv, inputDiv)

    setTimeout(()=> document.querySelector('.alert').remove(), 2000)
}


// MAIN-BODY TODO LIST
const submitBtn2 = document.querySelector('#addTask2')
const inputDiv2 = document.querySelector('#inputDiv2')
const input2 = document.querySelector('#todoInput')
const itemList2 = document.querySelectorAll('.itemText2')
const checkboxes2 = document.querySelectorAll('.checkbox2')
// const clearTaskButtons2 = document.querySelectorAll('.clearTask2')
const list2 = document.querySelector('.todoList2')
const todoList2 = document.querySelector('#todo-list2')

// ADD TASK
submitBtn2.addEventListener('click', addTask2);
function addTask2(e) {
    if (input.value === '') {
        showAlert2('Please add a task', 'danger');
    }else{
        // create list
        const parentDiv = document.createElement('div')
        parentDiv.classList = 'd-flex my-3 pb-2 border-bottom justify-content-between'
        list2.appendChild(parentDiv)
    
        const div1 = document.createElement('div')
        div1.classList = 'd-flex gap-3'
        div1.innerHTML = '<input type="checkbox" name="checkboxes" class="checkbox2">'
        const span = document.createElement('span')
        span.className = 'itemText'
        span.textContent = input.value
        div1.appendChild(span)
        parentDiv.appendChild(div1)
    
        const div2 = document.createElement('div')
        div2.innerHTML = '<i class="fa-regular fa-circle-xmark clearTask2"></i>'
        parentDiv.appendChild(div2)
    
        input.value = ''   
            
    }
    e.preventDefault()
}

// DELETE TASK
document.querySelector('.todoList2').addEventListener('click', deleteTask2);
function deleteTask2(e) {
    const target = e.target;
    
    if (target.classList.contains('clearTask2')) {
        // Delete the parent task element
        const task = target.closest('.d-flex');
        task.remove();
    }
}

// STYLING FOR CHECKBOX ON CLICK
list2.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkbox2')) {
        toggleItemText2(e.target);
    }
});
function toggleItemText2(checkbox) {
    var itemText2 = checkbox.nextElementSibling; 
    var clearTask2 = checkbox.parentElement.nextElementSibling.querySelector('.clearTask2'); 
    if (checkbox.checked) {
        itemText2.classList.add("completed");
        clearTask2.classList.add('complete');
    } else {
        itemText2.classList.remove("completed");
        clearTask2.classList.remove("complete");
    }
}

// ALERT STYLING
function showAlert2(message, className){
    const alertDiv = document.createElement('div')
    alertDiv.className = `alert alert-${className}`
    alertDiv.append(document.createTextNode(message))
    todoList2.insertBefore(alertDiv, inputDiv2)

    setTimeout(()=> document.querySelector('.alert').remove(), 2000)
}


// CALENDAR
const monthYearElement = document.querySelector('#monthYear')
const datesElement = document.querySelector('#dates')
const prevBtn = document.querySelector('#prevBtn')
const nextBtn = document.querySelector('#nextBtn')

let currentDate = new Date()

// TO SHOW THE CURRENT DATE ON WINDOW LOAD
document.addEventListener('DOMContentLoaded', function() {
    currentDate.setMonth(currentDate.getMonth())
    updateCalendar()
});

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()


    const firstDay = new Date(currentYear, currentMonth, 0)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const totalDays = lastDay.getDate()
    const firstDayIndex = firstDay.getDay()
    const lastDayIndex = lastDay.getDay()

    const monthYearString = currentDate.toLocaleDateString
    ('default', {month: 'long', year: 'numeric'})
    monthYearElement.textContent = monthYearString


    let datesHTML = ''

    for(let i = firstDayIndex; i > 0; i--){
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);

        datesHTML += `<div class = "date inactive"> ${prevDate.getDate()}</div>`
    }        

    for(let i = 1; i <= totalDays; i++){
        const date = new Date(currentYear, currentMonth, i)
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}"> ${i}</div>`
    }

    for(let i = 1; i <= 7 - lastDayIndex; i++){
        const nextDate = new Date(currentYear , currentMonth + 1, i)
        datesHTML += `<div class="date inactive"> ${nextDate.getDate()}</div>`
    }

    datesElement.innerHTML = datesHTML
}

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1)
    updateCalendar()
})
nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1)
    updateCalendar()
})

// SMALL DEVICES
const monthYearElement2 = document.querySelector('#monthYear2')
const datesElement2 = document.querySelector('#dates2')
const prevBtn2 = document.querySelector('#prevBtn2')
const nextBtn2 = document.querySelector('#nextBtn2')

let currentDate2 = new Date()

// TO SHOW THE CURRENT DATE ON WINDOW LOAD
document.addEventListener('DOMContentLoaded', function() {
    currentDate2.setMonth(currentDate2.getMonth())
    updateCalendar2()
});

const updateCalendar2 = () => {
    const currentYear = currentDate2.getFullYear()
    const currentMonth = currentDate2.getMonth()


    const firstDay = new Date(currentYear, currentMonth, 0)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const totalDays = lastDay.getDate()
    const firstDayIndex = firstDay.getDay()
    const lastDayIndex = lastDay.getDay()

    const monthYearString = currentDate2.toLocaleDateString
    ('default', {month: 'long', year: 'numeric'})
    monthYearElement2.textContent = monthYearString


    let datesHTML = ''

    for(let i = firstDayIndex; i > 0; i--){
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);

        datesHTML += `<div class = "date inactive"> ${prevDate.getDate()}</div>`
    }        

    for(let i = 1; i <= totalDays; i++){
        const date = new Date(currentYear, currentMonth, i)
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}"> ${i}</div>`
    }

    for(let i = 1; i <= 7 - lastDayIndex; i++){
        const nextDate = new Date(currentYear , currentMonth + 1, i)
        datesHTML += `<div class="date inactive"> ${nextDate.getDate()}</div>`
    }

    datesElement2.innerHTML = datesHTML
}

prevBtn2.addEventListener('click', () => {
    currentDate2.setMonth(currentDate2.getMonth() - 1)
    updateCalendar2()
})
nextBtn2.addEventListener('click', () => {
    currentDate2.setMonth(currentDate2.getMonth() + 1)
    updateCalendar2()
})


// EXTRA-SMALL DEVICES
const monthYearElement3 = document.querySelector('#monthYear3')
const datesElement3 = document.querySelector('#dates3')
const prevBtn3 = document.querySelector('#prevBtn3')
const nextBtn3 = document.querySelector('#nextBtn3')

let currentDate3 = new Date()

// TO SHOW THE CURRENT DATE ON WINDOW LOAD
document.addEventListener('DOMContentLoaded', function() {
    currentDate3.setMonth(currentDate3.getMonth())
    updateCalendar3()
});

const updateCalendar3 = () => {
    const currentYear = currentDate3.getFullYear()
    const currentMonth = currentDate3.getMonth()


    const firstDay = new Date(currentYear, currentMonth, 0)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)
    const totalDays = lastDay.getDate()
    const firstDayIndex = firstDay.getDay()
    const lastDayIndex = lastDay.getDay()

    const monthYearString = currentDate3.toLocaleDateString
    ('default', {month: 'long', year: 'numeric'})
    monthYearElement3.textContent = monthYearString


    let datesHTML = ''

    for(let i = firstDayIndex; i > 0; i--){
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);

        datesHTML += `<div class = "date inactive"> ${prevDate.getDate()}</div>`
    }        

    for(let i = 1; i <= totalDays; i++){
        const date = new Date(currentYear, currentMonth, i)
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}"> ${i}</div>`
    }

    for(let i = 1; i <= 7 - lastDayIndex; i++){
        const nextDate = new Date(currentYear , currentMonth + 1, i)
        datesHTML += `<div class="date inactive"> ${nextDate.getDate()}</div>`
    }

    datesElement3.innerHTML = datesHTML
}

prevBtn3.addEventListener('click', () => {
    currentDate3.setMonth(currentDate3.getMonth() - 1)
    updateCalendar3()
})
nextBtn3.addEventListener('click', () => {
    currentDate3.setMonth(currentDate3.getMonth() + 1)
    updateCalendar3()
})