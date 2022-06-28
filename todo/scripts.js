let todos = localStorage.getItem("todos")


try{
    todos = JSON.parse(todos)
    todos = todos.length ? todos : null;
}
catch {
    todos = null
}

if (!todos){
    todos = [
        {content : "shopping" , status : true},
        {content : "watching" , status : true},
        {content : "like" , status : true}
    ]
    localStorage.setItem("todos",JSON.stringify(todos))
}
    

function createTodos(todos){
    let todosList = document.querySelector("#todos-list")
    todosList.innerHTML = ""
    todos.forEach((todo , index) => {
        let li = document.createElement("li")
        li.className = "list-group-item"
        let content = document.createElement("span")
        content.textContent = todo.content
        content.style.textDecoration = todo.status ? "initial" : "line-through"
        let deleteBtn = document.createElement("img")
        deleteBtn.src = "del.png"
        deleteBtn.align = "right"
    
        li.append(content)
        li.append(deleteBtn)
    
        todosList.append(li)

        deleteBtn.addEventListener("click" , e => {
            todos.splice(index , 1)
            localStorage.setItem("todos" , JSON.stringify(todos))
            createTodos(todos)
        })

        content.addEventListener("click" , e => {
            todos[index].status = !todos[index].status
            localStorage.setItem("todos" , JSON.stringify(todos))
            createTodos(todos)
        })
    });
}


createTodos(todos);


let actions = document.querySelector("#actions")
let formWrapper = document.querySelector("#form-wrapper")


Array.from(actions.children).forEach(action => {
    if (action.dataset.action == "add") {
        action.addEventListener("click", e =>{
            formWrapper.innerHTML = `
            <form id="add">
                <input class="form-control" name="add" placeholder="Add ...">
            </form>
            `
        })
    }
    else if (action.dataset.action == "search") {
        action.addEventListener("click", e =>{
            formWrapper.innerHTML = `
            <form id="search">
            <input class="form-control" name="search" placeholder="search ...">
            </form>
            `
        })
    } 
})