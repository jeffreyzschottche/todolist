"use strict";
// create array or look if array already exists
window.addEventListener('load', function (event) {
    if (localStorage.getItem('tasks')) {
        // alert('array is err');
        console.log('array is geladen');
    }
    else {
        var taskArr_1 = [];
        localStorage.setItem('tasks', JSON.stringify(taskArr_1));
    }
});
// Add Task 2 Local storage if button is clicked
document.getElementById('addTask').addEventListener('click', function () {
    addTask();
});
// also run addTask function if enter is pressed
function enterKeyPressed(event) {
    if (event.keyCode == 13) {
        addTask();
        return true;
    }
    else {
        return false;
    }
}
function addTask() {
    var newTask = document.querySelector('.newTask');
    var taskArr = localStorage.getItem('tasks');
    var newTaskArr = JSON.parse(taskArr);
    newTaskArr.push(newTask.value);
    localStorage.setItem('tasks', JSON.stringify(newTaskArr));
    // set value empty and refresh page 
    newTask.value = ' ';
    window.location.reload();
}
var taskArr = localStorage.getItem('tasks');
var newTaskArr = JSON.parse(taskArr);
var taskList = document.querySelector('.taskList');
newTaskArr.forEach(function (task) {
    var newListItem = document.createElement('li');
    newListItem.textContent = task;
    var deleteButton = document.createElement('button');
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
function deleteTask() {
    var taskArr = localStorage.getItem('tasks');
    var newTaskArr = JSON.parse(taskArr);
    newTaskArr.splice(newTaskArr.indexOf(this.id), 1);
    localStorage.setItem('tasks', JSON.stringify(newTaskArr));
    window.location.reload();
}
