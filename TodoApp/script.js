const Add = document.querySelector(".Add")
const input = document.querySelector("#inputbox")
const Task = document.querySelector(".Task")

window.addEventListener("load", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((taskText) => {
    createTask(taskText);
  });
});


Add.addEventListener('click',()=>{
    let text = input.value.trim()
    if(text === "") return
    createTask(text)
    saveTaskToLocalStorage(text);
    input.value = ""
})

function createTask(text){
    const taskItem = document.createElement("div")
    taskItem.className = "task-item"
    taskItem.style.margin = '20px'
    console.log(taskItem);
    

    const p =document.createElement('p')
    p.textContent = text
    console.log(p);

    const rem = document.createElement("button")
    rem.textContent = "remove"
    rem.style.marginLeft = "10px"

    taskItem.appendChild(p)
    taskItem.appendChild(rem)

    rem.addEventListener('click',()=>{
        Task.removeChild(taskItem)
        removeTaskFromLocalStorage(text)
    })

    Task.appendChild(taskItem)
}

function saveTaskToLocalStorage(taskItem){
    const tasks = JSON.parse(localStorage.getItem("tasks"))||[]
    tasks = tasks.filter((t)=> t!== taskItem)
    localStorage.setItem("tasks",JSON.stringify(tasks))
}