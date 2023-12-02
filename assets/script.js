// SWITCH FROM LIGHT TO DARK MODE AND VICE-VERSA
const secondColumn = document.querySelector('#second-column')
const thirdColumn = document.querySelector('#third-column')
const header = document.querySelector('header')
const body = document.querySelector('body')
const faIcons = document.querySelectorAll('.fa-solid')
const faReg = document.querySelectorAll('.fa-regular')
const modes = document.querySelector('#modes')
const lightMode = document.createElement('i')
const offcanvas = document.querySelector('#offcanvasRight')
const allElements = document.querySelectorAll('div')
const listItem = document.querySelectorAll('.list-group-item')



modes.addEventListener('click', switchModes)
function switchModes(e){
    if (e.target.classList.contains('fa-moon')) {
        body.style.backgroundColor = 'black'
        header.style.backgroundColor = 'black'
        offcanvas.style.backgroundColor = 'black'
        offcanvas.style.borderLeftColor = '#d688ff'
        offcanvas.style.borderLeftStyle = "solid"; 
        offcanvas.style.borderLeftWidth = "0.5px";
        topRow.style.borderBottom = "2px solid #d688ff";
        firstColumn.style.borderBottom = "none";
        faIcons.forEach((fa)=>{
            fa.style.color = '#beabc1'
        })
        faReg.forEach((fag)=>{
            fag.style.color = '#beabc1'
        })
        allElements.forEach((all)=>{
            all.style.color = '#beabc1'
        })
        listItem.forEach((list)=>{
            list.style.backgroundColor = 'black'
        })
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
        listItem.forEach((list)=>{
            list.style.backgroundColor = '#fff'
        })

        modes.classList.add('fa-moon')
        modes.classList.remove('fa-sun')    
    }

}



// HIDE PURPLE TEXT ON NAVBAR/SIDE-MENU ON CLICK OF THE MENU BUTTON
const topRow = document.querySelector('#top-row')
const firstColumn = document.querySelector('#first-column')
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
        icon.classList.add('p-0')

        firstColumn.classList.replace('col-md-3', 'col-md-1')
        secondColumn.classList.replace('col-md-5', 'col-md-7')
        sideMenu.classList.add('d-none')
        sideMenuSmall.classList.remove('d-none')
        mainBody.classList.remove('col-md-9')
        mainBody.classList.add('col-md-11')
    }else{
        firstColumn.classList.replace('col-md-1', 'col-md-3')
        secondColumn.classList.replace('col-md-7', 'col-md-5')
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
const offcanvasToggle = document.querySelector('#offcanvasToggle')

offcanvasToggle.addEventListener('click', dimChatText)
function dimChatText(){
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
        const newListItem = document.createElement('li')
        newListItem.className = 'list-group-item'

        const litDiv = document.createElement('div')
        litDiv.className = 'row'

        const col1 = document.createElement('div')
        col1.classList = 'col-md-1 p-0'
        col1.innerHTML = '<input type="checkbox" name="checkboxes" class="checkbox">'
        litDiv.appendChild(col1)
        const col2 = document.createElement('div')
        col2.className = 'col-md-10'
        const inputText = document.createElement('span')
        inputText.className = 'itemText'
        inputText.textContent = input.value
        col2.appendChild(inputText)
        litDiv.appendChild(col2)
        const col3 = document.createElement('div')
        col3.className = 'col-md-1'
        col3.innerHTML = '<i class="fa-regular fa-circle-xmark clearTask"></i>'
        litDiv.appendChild(col3)
        

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
    //   Add an event listener to each checkbox
    checkbox.addEventListener('change', function() {
        // Get the corresponding span element
        const span = checkbox.parentElement.nextElementSibling.querySelector('.itemText');
        // Toggle the 'checked' class based on the checkbox state
        span.classList.toggle('checked', checkbox.checked);
        
        // Get the corresponding icon element
        const icon = checkbox.parentElement.nextElementSibling.nextElementSibling.querySelector('.clearTask');
        
        // Toggle the 'checked' class based on the checkbox state
        icon.classList.toggle('checked-color', checkbox.checked);
    });
});

function showAlert(message, className){
    const alertDiv = document.createElement('div')
    alertDiv.className = `alert alert-${className}`
    alertDiv.appendChild(document.createTextNode(message))
    offcanvasTodo.insertBefore(alertDiv, inputDiv)

    setTimeout(()=> document.querySelector('.alert').remove(), 2000)
}


