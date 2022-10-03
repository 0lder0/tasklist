const form = document.querySelector('form')
const taskInput = document.querySelector('#task')

const taskList = document.querySelector('ul')
const deleteAllTasks = document.querySelector('#del-tasks')


form.addEventListener('submit', addTask)
taskList.addEventListener('click', deleteTask)
deleteAllTasks.addEventListener('click', delAllTasks)


function addTask(e){
    //create list item
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskInput.value))
    li.className = 'collection-item'
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken-2 secondary-content'
    a.setAttribute('href', '#')
    li.appendChild(a)
    //add to list
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    taskInput.value = ''
    e.preventDefault()
}

function deleteTask(e){
    if (e.target.textContent == 'X'){
        if (confirm('Are you sure you want to delete this task?')){
            e.target.parentElement.remove()
        }
    }
    e.preventDefault()
}

function delAllTasks(e){
    //taskList.innerHTML = ''
    if (confirm('Are you sure you want to delete all tasks?')) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild)
        }
    }
}
