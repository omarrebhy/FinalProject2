let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskData");
let noTasks = document.getElementById("noTasks");
let allTasks = document.getElementById("allTasks");



let addTask = () => {
    let taskData = taskInput.value;
    if (taskData.trim() == "") {
        alert('please Enter Valid Data');
    } else {
        noTasks.remove();
        allTasks.innerHTML += `
        <div class = 'alert alert-info'>
        ${taskData}
        <button id="btnDelete" class="btn btn-danger float-right delete">Delete </button>
        </div>
        `
        taskInput.value = "";
        
    }
}
addBtn.addEventListener('click', addTask);
document.addEventListener('click', function (e) {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }


})




