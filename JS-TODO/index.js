(function() {
  'use strict';

let lastId = 0;
let tasklist = document.getElementById("tasklist");
let addButton = document.getElementById("addButton");
let removeIcon;
let updateIcon;
let taskList;

  function init() {

    if (!!(window.localStorage.getItem('taskList'))) {
      taskList = JSON.parse(window.localStorage.getItem('taskList'));
    } else {
      taskList = [];
    }
    addButton.addEventListener('click', saveTask);
    showList();
  }



  //CRUD OPERATION

  function showList() {

    if (!!taskList.length) {
      getLastTaskId();
      for (var item in taskList) {
      let task = taskList[item];
        addTaskToList(task);
      }
      syncEvents();
    }
    
  }

  function saveTask(event) {

  let task = {
      taskId: lastId,
      taskDes: document.getElementById("alltasks").value,
    };
    taskList.push(task);
    syncTask();
    addTaskToList(task);
    syncEvents();
    lastId++;
  document.getElementById("alltasks").value="";
  }

  function addTaskToList(task) {

  let removeIcon = document.createElement('span');
  let element = document.createElement('li');
  let updateIcon = document.createElement('span');

    removeIcon.innerHTML = "&#10008";
    removeIcon.className = "remove_item clickeable";
    removeIcon.setAttribute("title", "Remove");

    updateIcon.innerHTML = "&#10000";
    updateIcon.className = "update_icon clickeable";
    updateIcon.setAttribute("title", "Update");


    element.appendChild(removeIcon);
    element.appendChild(updateIcon);
    element.setAttribute("id", task.taskId);
    element.innerHTML += task.taskDes;
    tasklist.appendChild(element);
  }

  function updateTask(event) {

  let taskTag = event.currentTarget.parentNode;
  let taskId = taskTag.id;
  let taskToUpdate = findTask(taskId).task;
  let position = findTask(taskId).position;
    if (!!taskToUpdate) {
    let yourtask = prompt("Update Your Tasks", taskToUpdate.taskDes);
      taskToUpdate.taskDes = yourtask;
      taskList[position] = taskToUpdate;
      taskTag.lastChild.textContent = taskToUpdate.taskDes;
      syncTask();
    }
  }

  function removeTask(event) {

  let taskToRemove = event.currentTarget.parentNode;
  let taskId = taskToRemove.id;
    tasklist.removeChild(taskToRemove);
    taskList.forEach(function(value, i) {
      if (value.taskId == taskId) {
        taskList.splice(i, 1);
      }
    })

    syncTask();
  }

  // End CRUD



  function syncTask() {

    window.localStorage.setItem('taskList', JSON.stringify(taskList));
    taskList = JSON.parse(window.localStorage.getItem('taskList'));
  }

  function getLastTaskId() {
  let lastTask = taskList[taskList.length - 1];
    lastId = lastTask.taskId + 1;
  }

  function syncEvents() {

    updateIcon = document.getElementsByClassName("update_icon");
    removeIcon = document.getElementsByClassName("remove_item");
    if (!!removeIcon.length) {
      for (var i = 0; i < removeIcon.length; i++) {
        removeIcon[i].addEventListener('click', removeTask);
      }
    }
    if (!!updateIcon.length) {
      for (var j = 0; j < updateIcon.length; j++) {
        updateIcon[j].addEventListener('click', updateTask);
      }
    }
  }

  function findTask(id) {

  let response = {
      task: '',
      position: 0
    };
    taskList.forEach(function(value, i) {
      if (value.taskId == id) {
        response.task = value;
        response.position = i;
      }
    });

    return response;
  }




  init();


})();