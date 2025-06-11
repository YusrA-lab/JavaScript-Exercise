// TODO: Create a global variable called globalCount
let globalCount = 0;

// TODO: Create a function that demonstrates local scope
function localScopeDemo() {
    let localCount = 0;
    console.log("Local count inside function:", localCount);
}

// TODO: Create a function that tries to modify both variables
function modifyCounts() {
    globalCount += 1; // Modifying global variable
    // localCount += 1; // This would cause an error since localCount is not defined here
    console.log("Global count after modification:", globalCount);
}

// TODO: Create a Student constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
    this.getDetails = function() {
        return `${this.name}, Age: ${this.age}`;
    };
}

console.log("Initial Global Count:", globalCount);
// Call the local scope demo function


// TODO: Create several student instances
const student1 = new Student("Alice", 20);
const student2 = new Student("Bob", 22);

console.log("Student 1 Details:", student1.getDetails());
console.log("Student 2 Details:", student2.getDetails());


// TODO: Create an object literal with nested properties
const school = {
    name: "Greenwood High",
    address: {
        street: "123 Elm St",
        city: "Springfield",
        zip: "12345"
    },
    students: [student1, student2],
    getSchoolDetails: function() {
        return `${this.name}, located at ${this.address.street}, ${this.address.city}, ${this.address.zip}`;
    }
};
console.log( "School Details:", school.getSchoolDetails());
