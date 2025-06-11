// TODO: Create a function that validates user input
function validateUserInput() {
  let input = window.prompt("Enter a number");
  let number = Number(input);
  if (typeof number !== "number") throw new Error("Only enter a number");
  console.log("Number recieved!");
}
validateUserInput();
// TODO: Create a function that demonstrates multiple error types
function employeeiD(id){
    try{
        if (typeof id !== "number") throw new Error("Employee ID is not valid");

        let employees = {1:"Stacey-Lee", 2:"Zoe", 3:"farah"}
        if (!employee[id]) throw new Error("Employee not found");
        console.log(employee[id]); 
    }catch(e){
        console.error(`Error found: ${emessage}`);
    }
}
employeeiD("two");
employeeiD(4);
employeeiD(2);
// TODO: Create a collection of helper functions for string manipulation
let StringManipulationHelpers = {
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    lowercase: function(str) {
        return str.toLowerCase();
    },
    reverse: function(str) {
        return str.split("").reverse().join("");
    },
    wordcount: function(str) {
        return str.trim().split(/\s=/).length;
    }
}
// export default StringManipulationHelpers;
// TODO: Create helper functions for array operations
let ArrayOperationsHelpers = {
    push: function(arr, value) {
        arr.push(value);
        return arr;
    },
    pop: function(arr) {
        const removed = arr.pop();
        return {updatedArray: arr, removed};
    },
    shift: function(arr) {
        const removed = arr.shift();
        return {updatedArray: arr, removed};
    },
    slice: function(arr,start,end) {
        return arr.slice(start, end);
    },
    splice: function(arr, start, deleteCount, ...itemsToAdd) {
        const removedItems = arr.splice(start, deleteCount, ...itemsToAdd);
        return {updatedArray: arr, removedItems};
    }
}
// export default ArrayOperationsHelpers
