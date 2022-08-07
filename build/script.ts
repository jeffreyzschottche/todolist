// create array or look if array already exists
window.addEventListener('load', (event) => {
    if(localStorage.getItem('tasks')){
        // alert('array is err');
        console.log('array is geladen');
    }else{
        let taskArr:Array<string> = [];
        localStorage.setItem('tasks',JSON.stringify(taskArr));
    }
  });   

// Add Task 2 Local storage if button is clicked
document.getElementById('addTask')!.addEventListener('click', function(){
    addTask();
});


// also run addTask function if enter is pressed
function enterKeyPressed(event:any) {
    if (event.keyCode == 13) {
        addTask();
       return true;
    } else {
       return false;
    }
 }



function addTask(){
    let newTask = document.querySelector('.newTask') as HTMLInputElement;
    let taskArr = localStorage.getItem('tasks');
    let newTaskArr = JSON.parse(taskArr!);


    newTaskArr!.push(newTask.value);
    localStorage.setItem('tasks', JSON.stringify(newTaskArr));

    // set value empty and refresh page 
    newTask.value = ' ';
    window.location.reload();
}




let taskArr = localStorage.getItem('tasks');
let newTaskArr = JSON.parse(taskArr!);
let taskList = document.querySelector('.taskList') as HTMLUListElement;

newTaskArr.forEach((task: string) => {
    let newListItem = document.createElement('li');
    newListItem.textContent = task;
    let deleteButton = document.createElement('button') as HTMLButtonElement;
    deleteButton.classList.add('deleteButton');
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.id = task;
    deleteButton.textContent = 'X';
    deleteButton.onclick = deleteTask;
    newListItem.appendChild(deleteButton);
    taskList.appendChild(newListItem);
});



// deleting task by getting ls array, modify it and add new one back
function deleteTask(this: any){
    let taskArr = localStorage.getItem('tasks');
    let newTaskArr = JSON.parse(taskArr!);

    newTaskArr.splice(newTaskArr.indexOf(this.id),1);
    localStorage.setItem('tasks', JSON.stringify(newTaskArr));
    window.location.reload();
}