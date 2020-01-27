var myTasks = [];
function addTask(task) {
    return myTasks.push(task);
    console.log("Item " + task + " has been added to the Array");
    var count = myTasks.length;
    return count;
}
function listAllTasks() {
    //  for (let i = 0; i < myTasks.length i++) {
    //  }
    console.log("List All Items in Array");
    myTasks.forEach(function (task) {
        console.log(task);
    });
}
addTask("number Three");
addTask("number Two");
var elementCount = addTask("Number One");
console.log(elementCount);
listAllTasks();
var x = deleteTask("number two");
function deleteTask(task) {
    var index = myTasks.indexOf(task);
    if (index > -1) {
        myTasks.splice(index, 1);
        console.log("Element " + task + " removed from array");
    }
    else {
        console.log("Element " + task + " removed from array");
    }
    return myTasks.length;
}
console.log(myTasks);
