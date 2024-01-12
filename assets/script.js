// SWITCH FROM LIGHT TO DARK MODE AND VICE-VERSA
const header = document.querySelector('header')
const body = document.querySelector('body')
const logoText = document.querySelector('.logo-text')
const logoIcon = document.querySelector('#logo-icon')
const cardHr = document.querySelectorAll('.cardHr')
const mBody = document.querySelector('#main-body-col')
const sideMenu = document.querySelector('#side-menu')
const sideMenuSmall = document.querySelector('#side-menu-small')
const faIcons = document.querySelectorAll('.fa-solid')
const faReg = document.querySelectorAll('.fa-regular')
const modes1 = document.querySelector('.modes1')
const modes2 = document.querySelector('.modes2')
const modes3 = document.querySelector('.modes3')
const offcanvas = document.querySelector('#offcanvasRight')
const todoList = document.querySelector('.todoList')
const spanName = document.querySelectorAll('.name')
const headerImage = document.querySelectorAll('.headerImage')
const ul = document.querySelector('#offcanvasRight')
const navbarToggler = document.querySelector('.navbar-toggler')
const allElements = document.querySelectorAll('div')
const pTexts = document.querySelectorAll('.pTexts')
const offcanvasHeader = document.querySelector('#offcanvasHeader')
const itemTexts = document.querySelectorAll('.itemText')
const whiteDiv = document.querySelectorAll('.bg-white')
const tableRows = document.querySelectorAll('.table-row')
const clearTaskButtons = document.querySelectorAll('.clearTask')
const clearTaskButtons2 = document.querySelectorAll('.clearTask2')
const search = document.querySelectorAll('.search')
const tripleIcon = document.querySelectorAll('.tripleIcon')
const darkTexts = document.querySelectorAll('.darkTexts')
const bodyIcon = document.querySelectorAll('.bodyIcon')
const days = document.querySelectorAll('.day')
const circles = document.querySelectorAll('.circles')
const nameDiv = document.querySelector('.nameDiv')

modes1.addEventListener('click', switchModes)
function switchModes(e){
    if (e.target.classList.contains('fa-sun')) {
        todoList.classList.replace('pt-2', 'pt-1')
        todoList.classList.add('pb-1')
        todoList.classList.add('px-2')
        modes1.classList.replace('fa-sun', 'fa-moon')
        modes2.classList.replace('fa-sun', 'fa-moon')
        modes3.classList.replace('fa-sun', 'fa-moon')

        nameDiv.classList.remove('border-end')
        nameDiv.classList.remove('border-start')
        nameDiv.style.borderLeftColor = '#ffd0ce'
        nameDiv.style.borderLeftStyle = 'solid'
        nameDiv.style.borderLeftWidth = "0.1px";
        nameDiv.style.borderRightColor = '#ffd0ce'
        nameDiv.style.borderRightStyle = 'solid'
        nameDiv.style.borderRightWidth = "0.1px";
        body.style.backgroundColor = 'black'
        mBody.style.backgroundColor = 'black'
        todoList.style.backgroundColor = '#ffd0ce'
        logoText.style.color = '#ffd0ce'
        logoIcon.style.color = '#ffd0ce'
        header.style.backgroundColor = 'black'
        offcanvas.style.backgroundColor = 'black'
        navbarToggler.style.color = '#ffd0ce'
        offcanvas.style.borderLeftColor = '#ffd0ce'
        offcanvas.style.borderLeftStyle = "solid"; 
        offcanvas.style.borderLeftWidth = "0.5px";
        sideMenu.style.borderRightColor = '#ffd0ce'
        sideMenu.style.borderRightStyle = 'solid'
        sideMenu.style.borderRightWidth = "0.1px";

        faIcons.forEach((fa)=>{
            fa.style.color = '#ffd0ce'
        })
        faReg.forEach((fag)=>{
            fag.style.color = '#ffd0ce'
        })
        allElements.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        spanName.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        circles.forEach((all)=>{
            all.style.color = ''
        })
        pTexts.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        search.forEach((all)=>{
            all.style.backgroundColor = ''
            all.style.border = ''
        })
        darkTexts.forEach((all)=>{
            all.style.color = '#383838'
        })
        itemTexts.forEach((list)=>{
            list.style.color = '#383838'
        })
        headerImage.forEach((all)=>{
            all.style.border = '1px solid #ffd0ce'
        })
        whiteDiv.forEach((all)=>{
            all.classList.remove('bg-white')
            all.classList.add('bg-light')
        })
        tableRows.forEach((all)=>{
            all.classList.add('table-light')
        })
        clearTaskButtons.forEach((all)=>{
            all.style.color = ''
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
        days.forEach((all)=>{
            all.style.color = '';
        })
        
    }else{
        todoList.classList.replace('pt-1', 'pt-2')
        todoList.classList.remove('pb-1')
        todoList.classList.remove('px-2')
        modes1.classList.replace('fa-moon', 'fa-sun')
        modes2.classList.replace('fa-moon', 'fa-sun')
        modes3.classList.replace('fa-moon', 'fa-sun')

        nameDiv.classList.add('border-end')
        nameDiv.classList.add('border-start')
        nameDiv.style.borderLeftColor = ''
        nameDiv.style.borderLeftStyle = ''
        nameDiv.style.borderLeftWidth = "";
        nameDiv.style.borderRightColor = ''
        nameDiv.style.borderRightStyle = ''
        nameDiv.style.borderRightWidth = "";
        body.style.backgroundColor = ''
        header.style.backgroundColor = ''
        todoList.style.backgroundColor = ''
        logoText.style.color = ''
        logoIcon.style.color = ''
        mBody.style.backgroundColor = ''
        offcanvas.style.backgroundColor = ''
        offcanvas.style.borderLeftColor = ''
        offcanvas.style.borderLeftStyle = ''; 
        navbarToggler.style.color = ''
        sideMenu.style.borderRightColor = ''
        sideMenu.style.borderRightStyle = ''
        sideMenu.style.borderRightWidth = '';


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
        circles.forEach((all)=>{
            all.style.color = ''
        })
        darkTexts.forEach((all)=>{
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
    }

}

modes2.addEventListener('click', switchModes2)
function switchModes2(e){
    if (e.target.classList.contains('fa-sun')) {
        todoList.classList.replace('pt-2', 'pt-1')
        todoList.classList.add('pb-1')
        todoList.classList.add('px-2')
        modes1.classList.replace('fa-sun', 'fa-moon')
        modes2.classList.replace('fa-sun', 'fa-moon')
        modes3.classList.replace('fa-sun', 'fa-moon')

        nameDiv.classList.remove('border-end')
        nameDiv.classList.remove('border-start')
        nameDiv.style.borderLeftColor = '#ffd0ce'
        nameDiv.style.borderLeftStyle = 'solid'
        nameDiv.style.borderLeftWidth = "0.1px";
        nameDiv.style.borderRightColor = '#ffd0ce'
        nameDiv.style.borderRightStyle = 'solid'
        nameDiv.style.borderRightWidth = "0.1px";
        body.style.backgroundColor = 'black'
        mBody.style.backgroundColor = 'black'
        todoList.style.backgroundColor = '#ffd0ce'
        logoText.style.color = '#ffd0ce'
        logoIcon.style.color = '#ffd0ce'
        header.style.backgroundColor = 'black'
        offcanvas.style.backgroundColor = 'black'
        navbarToggler.style.color = '#ffd0ce'
        offcanvas.style.borderLeftColor = '#ffd0ce'
        offcanvas.style.borderLeftStyle = "solid"; 
        offcanvas.style.borderLeftWidth = "0.5px";
        sideMenu.style.borderRightColor = '#ffd0ce'
        sideMenu.style.borderRightStyle = 'solid'
        sideMenu.style.borderRightWidth = "0.1px";

        faIcons.forEach((fa)=>{
            fa.style.color = '#ffd0ce'
        })
        faReg.forEach((fag)=>{
            fag.style.color = '#ffd0ce'
        })
        allElements.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        spanName.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        circles.forEach((all)=>{
            all.style.color = ''
        })
        pTexts.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        search.forEach((all)=>{
            all.style.backgroundColor = ''
            all.style.border = ''
        })
        darkTexts.forEach((all)=>{
            all.style.color = '#383838'
        })
        itemTexts.forEach((list)=>{
            list.style.color = '#383838'
        })
        headerImage.forEach((all)=>{
            all.style.border = '1px solid #ffd0ce'
        })
        whiteDiv.forEach((all)=>{
            all.classList.remove('bg-white')
            all.classList.add('bg-light')
        })
        tableRows.forEach((all)=>{
            all.classList.add('table-light')
        })
        clearTaskButtons.forEach((all)=>{
            all.style.color = ''
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
        days.forEach((all)=>{
            all.style.color = '';
        })
        
    }else{
        todoList.classList.replace('pt-1', 'pt-2')
        todoList.classList.remove('pb-1')
        todoList.classList.remove('px-2')
        modes1.classList.replace('fa-moon', 'fa-sun')
        modes2.classList.replace('fa-moon', 'fa-sun')
        modes3.classList.replace('fa-moon', 'fa-sun')

        nameDiv.classList.add('border-end')
        nameDiv.classList.add('border-start')
        nameDiv.style.borderLeftColor = ''
        nameDiv.style.borderLeftStyle = ''
        nameDiv.style.borderLeftWidth = "";
        nameDiv.style.borderRightColor = ''
        nameDiv.style.borderRightStyle = ''
        nameDiv.style.borderRightWidth = "";
        body.style.backgroundColor = ''
        header.style.backgroundColor = ''
        todoList.style.backgroundColor = ''
        logoText.style.color = ''
        logoIcon.style.color = ''
        mBody.style.backgroundColor = ''
        offcanvas.style.backgroundColor = ''
        offcanvas.style.borderLeftColor = ''
        offcanvas.style.borderLeftStyle = ''; 
        navbarToggler.style.color = ''
        sideMenu.style.borderRightColor = ''
        sideMenu.style.borderRightStyle = ''
        sideMenu.style.borderRightWidth = '';


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
        circles.forEach((all)=>{
            all.style.color = ''
        })
        darkTexts.forEach((all)=>{
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
    }

}

modes3.addEventListener('click', switchModes3)
function switchModes3(e){
    if (e.target.classList.contains('fa-sun')) {
        todoList.classList.replace('pt-2', 'pt-1')
        todoList.classList.add('pb-1')
        todoList.classList.add('px-2')
        modes1.classList.replace('fa-sun', 'fa-moon')
        modes2.classList.replace('fa-sun', 'fa-moon')
        modes3.classList.replace('fa-sun', 'fa-moon')

        nameDiv.classList.remove('border-end')
        nameDiv.classList.remove('border-start')
        nameDiv.style.borderLeftColor = '#ffd0ce'
        nameDiv.style.borderLeftStyle = 'solid'
        nameDiv.style.borderLeftWidth = "0.1px";
        nameDiv.style.borderRightColor = '#ffd0ce'
        nameDiv.style.borderRightStyle = 'solid'
        nameDiv.style.borderRightWidth = "0.1px";
        body.style.backgroundColor = 'black'
        mBody.style.backgroundColor = 'black'
        todoList.style.backgroundColor = '#ffd0ce'
        logoText.style.color = '#ffd0ce'
        logoIcon.style.color = '#ffd0ce'
        header.style.backgroundColor = 'black'
        offcanvas.style.backgroundColor = 'black'
        navbarToggler.style.color = '#ffd0ce'
        offcanvas.style.borderLeftColor = '#ffd0ce'
        offcanvas.style.borderLeftStyle = "solid"; 
        offcanvas.style.borderLeftWidth = "0.5px";
        sideMenu.style.borderRightColor = '#ffd0ce'
        sideMenu.style.borderRightStyle = 'solid'
        sideMenu.style.borderRightWidth = "0.1px";

        faIcons.forEach((fa)=>{
            fa.style.color = '#ffd0ce'
        })
        faReg.forEach((fag)=>{
            fag.style.color = '#ffd0ce'
        })
        allElements.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        spanName.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        circles.forEach((all)=>{
            all.style.color = ''
        })
        pTexts.forEach((all)=>{
            all.style.color = '#ffd0ce'
        })
        search.forEach((all)=>{
            all.style.backgroundColor = ''
            all.style.border = ''
        })
        darkTexts.forEach((all)=>{
            all.style.color = '#383838'
        })
        itemTexts.forEach((list)=>{
            list.style.color = '#383838'
        })
        headerImage.forEach((all)=>{
            all.style.border = '1px solid #ffd0ce'
        })
        whiteDiv.forEach((all)=>{
            all.classList.remove('bg-white')
            all.classList.add('bg-light')
        })
        tableRows.forEach((all)=>{
            all.classList.add('table-light')
        })
        clearTaskButtons.forEach((all)=>{
            all.style.color = ''
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
        days.forEach((all)=>{
            all.style.color = '';
        })
        
    }else{
        todoList.classList.replace('pt-1', 'pt-2')
        todoList.classList.remove('pb-1')
        todoList.classList.remove('px-2')
        modes1.classList.replace('fa-moon', 'fa-sun')
        modes2.classList.replace('fa-moon', 'fa-sun')
        modes3.classList.replace('fa-moon', 'fa-sun')

        nameDiv.classList.add('border-end')
        nameDiv.classList.add('border-start')
        nameDiv.style.borderLeftColor = ''
        nameDiv.style.borderLeftStyle = ''
        nameDiv.style.borderLeftWidth = "";
        nameDiv.style.borderRightColor = ''
        nameDiv.style.borderRightStyle = ''
        nameDiv.style.borderRightWidth = "";
        body.style.backgroundColor = ''
        header.style.backgroundColor = ''
        todoList.style.backgroundColor = ''
        logoText.style.color = ''
        logoIcon.style.color = ''
        mBody.style.backgroundColor = ''
        offcanvas.style.backgroundColor = ''
        offcanvas.style.borderLeftColor = ''
        offcanvas.style.borderLeftStyle = ''; 
        navbarToggler.style.color = ''
        sideMenu.style.borderRightColor = ''
        sideMenu.style.borderRightStyle = ''
        sideMenu.style.borderRightWidth = '';


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
        circles.forEach((all)=>{
            all.style.color = ''
        })
        darkTexts.forEach((all)=>{
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
    }

}



// HIDE SIDE-MENU ON CLICK OF THE MENU BUTTON ON SMALL SCREENS
const menuIcon = document.querySelector('#menu-icon')
const mainRow = document.querySelector('#main-row')
const mainBody = document.querySelector('#main-body')
const logoColumn = document.querySelector('#logo-column')


menuIcon.addEventListener('click', hideFirstColumn)
function hideFirstColumn(e){
    if (e.target.classList.contains('open')) {
        menuIcon.classList.replace('open', 'close')
        sideMenu.classList.add('d-none')
        sideMenuSmall.classList.add('d-xxl-block')
        sideMenuSmall.classList.add('d-xl-block')
        sideMenuSmall.classList.add('d-md-block')
        sideMenuSmall.classList.add('d-lg-block')
        mainBody.parentElement.classList.remove('col-md-9')
        mainBody.parentElement.classList.add('col-md-12')
        mainBody.classList.remove('d-none')
    }else{
        menuIcon.classList.replace('close', 'open')
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
        logoColumn.classList.replace('w-25', 'ps-2')
        mainBody.parentElement.classList.remove('col-md-9')
        mainBody.parentElement.classList.add('col-md-11')
    }else{
        e.target.parentElement.classList.replace('close', 'open')
        sideMenu.classList.remove('d-none')
        sideMenuSmall.classList.remove('d-xxl-block')
        sideMenuSmall.classList.remove('d-xl-block')
        sideMenuSmall.classList.remove('d-md-block')
        sideMenuSmall.classList.remove('d-lg-block')
        logoColumn.classList.replace('ps-2', 'w-25')
        mainBody.parentElement.classList.remove('col-md-11')
        mainBody.parentElement.classList.add('col-md-9')
    }
}



// TO CHOOSE BETWEEN TO-DO AND CHATS IN OFFCANVAS
const offCanvasChat = document.querySelector('.offCanvasChat')
const todo = document.querySelector('.todo')
const offcanvasChat = document.querySelector('#chats')
const offcanvasTodo = document.querySelector('#todo-list')
const offcanvasToggle = document.querySelector('#offcanvasToggle')

offcanvasToggle.addEventListener('click', dimHeaderTextColor)
function dimHeaderTextColor(){
    if (offcanvasChat.classList.contains('d-none')) {
        offCanvasChat.style.color = '#d5d3d3'
    }else{
        offCanvasChat.style.color = 'white'
    }
}

offCanvasChat.addEventListener('click', showChats)
function showChats(){
    offcanvasChat.classList.remove('d-none')
    offcanvasTodo.classList.add('d-none')
    todo.style.color = '#d5d3d3'
    offCanvasChat.style.color = 'white'
}

todo.addEventListener('click', showTodo)
function showTodo(){
    offcanvasChat.classList.add('d-none')
    offcanvasTodo.classList.remove('d-none')
    offCanvasChat.style.color = '#d5d3d3'
    todo.style.color = 'white'
}

// OFF-CANVAS TODO LIST
const submitBtn = document.querySelector('#addTask')
const inputDiv = document.querySelector('#inputDiv')
const input = document.querySelector('#todoInput')
const itemList = document.querySelectorAll('.itemText')
const checkboxes = document.querySelectorAll('.checkbox')
// const clearTaskButtons = document.querySelectorAll('.clearTask') //declared above
const list = document.querySelector('.todoList')

// ADD TASK
submitBtn.addEventListener('click', addTask);
function addTask(e) {
    if (input.value === '') {
        showAlert('Please add a task', 'danger');
    }else{
        // create list
        const parentDiv = document.createElement('div')
        parentDiv.classList = 'd-flex my-3 pb-2 border-bottom justify-content-between align-items-center'
        list.appendChild(parentDiv)
    
        const div1 = document.createElement('div')
        div1.classList = 'd-flex gap-3 align-items-center'
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
const input2 = document.querySelector('#todoInput2')
const itemList2 = document.querySelectorAll('.itemText2')
const checkboxes2 = document.querySelectorAll('.checkbox2')
const list2 = document.querySelector('.todoList2')
const todoList2 = document.querySelector('#todo-list2')

// ADD TASK
submitBtn2.addEventListener('click', addTask2);
function addTask2(e) {
    if (input2.value === '') {
        showAlert2('Please add a task', 'danger');
    }else{
        // create list
        const parentDiv = document.createElement('div')
        parentDiv.classList = 'd-flex my-3 pb-4 border-bottom justify-content-between align-items-center'
        list2.appendChild(parentDiv)
    
        const div1 = document.createElement('div')
        div1.classList = 'd-flex gap-3 align-items-center'
        div1.innerHTML = '<input type="checkbox" name="checkboxes" class="checkbox2">'
        const span = document.createElement('span')
        span.className = 'itemText'
        span.textContent = input2.value
        div1.appendChild(span)
        parentDiv.appendChild(div1)
    
        const div2 = document.createElement('div')
        div2.innerHTML = '<i class="fa-regular fa-circle-xmark clearTask2"></i>'
        parentDiv.appendChild(div2)
    
        input2.value = ''              
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


// ------------------------CHARTS------------------------
// BAR-CHART
const ctx1 = document.getElementById('barchart');

new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['China', 'Usa', 'Uk', 'France'],
    datasets: [{
      label: 'Number of Sales',
      data: [8, 19, 10, 5,],
      borderWidth: 1,
      backgroundColor: [
        '#a32d29',
        '#e93f3a',
        '#ffa2a0',
        '#ffd1cf',
      ],
      borderColor: [
        '#a32d29',
        '#e93f3a',
        '#ffa2a0',
        '#ffd1cf',
      ],
      borderWidth: 1    
    }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


// DOUGHNUT CHART
const ctx2  = document.getElementById('piechart');
new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Searches', 'Clicks', 'Bookmarks', 'To-do'],
    datasets: [{
      data: [40, 30, 19, 11],
      borderWidth: 2,
      backgroundColor: [
        '#a32d29',
        '#ffa2a0',
        '#e93f3a',
        '#ffd1cf',
      ],
      borderColor: [
        '#a32d29',
        '#ffa2a0',
        '#e93f3a',
        '#ffd1cf',
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    options: {
        animation: false
    }
  }
});


// LINE CHART
new Chart(document.getElementById("line-chart"), {
    type : 'line',
    data : {
        labels : [ 1500, 1600, 1700, 1750, 1800, 1850,
            1900, 1950, 1999, 2050 
        ],
        datasets : [
        {
            data : [  2809, 3947, 4402, 3700, 5267,
                2191, 3133, 3221, 4783, 5478 
            ],
            label : "China",
            borderColor : "#a32d29",
            fill : false
        },
        {
            data : [ 1282, 2635, 2411, 2502, 1350,
                3947, 2809, 4402, 3700, 3287 
            ],
            label : "Usa",
            borderColor : "#e93f3a ",
            fill : false
        },
        {
            data : [ 1282, 1350, 2411, 2502, 2635,
                8970, 3947, 4402, 3700, 5267 
            ],
            label : "France",
            borderColor : "#ffa2a0",
            fill : false
        },
        {
            data : [ 186, 205, 1321, 1516, 2107,
                2809, 1839, 3820, 3700, 7639 
            ],
            label : "Uk",
            borderColor : "#ffd1cf",
            fill : false
        },
    ]
    },
    options : {
        title : {
            display : true,
            text : 'Chart JS Multiple Lines Example'
        }
    }
});
