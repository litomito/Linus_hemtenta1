const inputTask = document.getElementById("inputText")
const list = document.getElementById("list")
const addBtn = document.getElementById("add-btn")
let taskList = []
let listNum = 0

addBtn.addEventListener("click", () => {
    taskList.push(inputTask.value)
    inputTask.value = ""
    listItems()
})

function listItems() {
    let toDo = ""
    for (let i = 0; i < taskList.length; i++) {
        toDo += ` <li class=" my-3 py-3 shadow list-group-item " id="list${listNum}">
    <div class="row">
    <div class="col-1">
    <input class="" type="checkbox" id="check${listNum}"(${listNum})">
    </div>
    <div class="col-6">
        <span class=" h4" id="text${listNum}"> ${taskList[i]} </span>
    </div>
    <div class="col-4">
            <button class=" btn btn-danger btn-remove"(${listNum})">Delete</button>
            <button class=" btn btn-dark btn-edit"(${listNum})">Edit</button>
    </div>                  
        </div>    
    </li> `;
    };
    list.innerHTML = toDo;

    const removeButtons = document.querySelectorAll('.btn-remove');
    removeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            removetaskList(index);
        });
    });

    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const newName = window.prompt("What would you like to change the name to?");

            if (newName !== null && newName.trim() !== "") {
                taskList[index] = newName;
                listItems();

            }
        });
    });
};

function removetaskList(index) {
    taskList.splice(index, 1);
    listItems();
}