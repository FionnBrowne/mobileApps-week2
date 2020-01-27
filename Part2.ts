let myTasks: string[] = [];

function addTask(task: string): number {
    return myTasks.push(task);
    console.log("Item " + task + " has been added to the Array")

    let count: number = myTasks.length;
    return count;

}

function listAllTasks(): void {
    //  for (let i = 0; i < myTasks.length i++) {
    //  }
    console.log("List All Items in Array")
    myTasks.forEach(function (task) {
        console.log(task);
    });


}

addTask("number Three");
addTask("number Two");
let elementCount: number = addTask("Number One");
console.log(elementCount);

listAllTasks();
let x:number = deleteTask("number two");

function deleteTask(task: string): number {
    let index: number = myTasks.indexOf(task);
    if(index > -1){
    myTasks.splice(index,1);
    console.log("Element " + task + " removed from array")
    }else {
        console.log("Element " + task + " removed from array")
    }
    return myTasks.length;
}


