const myToDoList = {
    "todoList": 
    [
    {
    "taskBlock": "Home", "tasks":
        [
        {"task": "Clean room", "done": false},
        {"task": "Get storage unit", "done": false}
        ]
    },
    {
    "taskBlock": "Work", "tasks":
        [
        {"task": "Analysis", "done": false},
        {"task": "Sorting", "done": false, "subtasks":
            [
            {"task": "Save files", "done": false, "subtasks":
                [
                {"task": "Pull from computer 1", "done": false},
                {"task": "Walk to computer 2", "done": false},
                {"task": "Save on computer 2", "done": false}        
                ]                
            },
            {"task": "Sort files", "done": false},
            {"task": "Plot data", "done": false}  
            ]
        }
        ]
    }       
    ],
};

const parent = document.querySelector("#parent");
var indexItem = 1;

for(let i=0; i<myToDoList.todoList.length; i++){
    let item = document.createElement('div');
    item.className = 'card col-md-5';
    item.setAttribute('id', 'item-'+indexItem+'')
    if(i==0){
        item.innerHTML = `<h1 class="card-title">`+myToDoList.todoList[i].taskBlock+`</h1>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>`+myToDoList.todoList[0].tasks[0].task+`</td>
                        <td><input type="checkbox" class="check-done"></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>`+myToDoList.todoList[0].tasks[1].task+`</td>
                        <td><input type="checkbox" class="check-done"></td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-end"> 
                <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
            </div>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Delete Task</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        Are you sure?
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn border border-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger btn-Confirm" data-bs-dismiss="modal">Confirm</button>
                    </div>
                </div>
            </div>
        </div>`;
    };
    if(i==1){
        item.innerHTML = `<h1 class="card-title">`+myToDoList.todoList[i].taskBlock+`</h1>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col">Subtask</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>`+myToDoList.todoList[1].tasks[0].task+`</td>
                        <td></td>
                        <td><input type="checkbox" class="check-done"></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>`+myToDoList.todoList[1].tasks[1].task+`</td>
                        <td>`+myToDoList.todoList[1].tasks[1].subtasks[0].task+`<br>`+myToDoList.todoList[1].tasks[1].subtasks[1].task+`<br>`+myToDoList.todoList[1].tasks[1].subtasks[2].task+`</td>
                        <td><br><input type="checkbox" class="check-done"><br><input type="checkbox" class="check-done"></td>
                    </tr>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Task</th>
                                <th scope="col">Subtask</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>`+myToDoList.todoList[1].tasks[1].subtasks[0].task+`</td>
                                <td>`+myToDoList.todoList[1].tasks[1].subtasks[0].subtasks[0].task+`<br>`+myToDoList.todoList[1].tasks[1].subtasks[0].subtasks[1].task+`<br>`+myToDoList.todoList[1].tasks[1].subtasks[0].subtasks[2].task+`</td>
                                <td><input type="checkbox" class="check-done"><br><input type="checkbox" class="check-done"><br><input type="checkbox" class="check-done"></td>
                            </tr>
                        </tbody>
                    </table>
                </tbody>
            </table>
            <div class="d-flex justify-content-end"> 
                <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
            </div>
        </div>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Delete Task</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        Are you sure?
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn border border-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-danger btn-Confirm" data-bs-dismiss="modal">Confirm</button>
                    </div>
                </div>
            </div>
        </div>`;
    }
    parent.appendChild(item);
    indexItem++;
}

let btnConfirm = document.querySelectorAll('.btn-Confirm');
for(let i=0; i<btnConfirm.length; i++){
    btnConfirm[i].addEventListener('click', function(){
        let item = document.getElementById('item-'+(i+1)+'');
        parent.removeChild(item);
    });
}

// let checkboxDone = document.querySelectorAll('.check-done');
// for(let i=0; i<checkboxDone.length; i++){
//     checkboxDone[i].addEventListener('click', function(){

//     });
// }