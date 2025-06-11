// TODO: Create a multiline string using template literals
let songs = `Best songs:
1.Lu+Fi - reason
2.Jimin - Who(Rock Remix)
3.TXT - Lo$ER=LOVER
`
console.log(songs);

// TODO: Create a function that uses template literals for HTML generation
let title = "Welcome";
let HTML = `<h1>${title}</h1>`;
console.log(HTML);

// TODO: Convert regular functions to arrow functions
function add(a, b){
    return a + b;
}
const addArrow = (a, b) => a + b;

function calc(x, y){
    const sum = x + y;
    return sum * 2;
}
const calcArrow = (x, y) => {
    const sum = x + y;
    return sum * 2;
}

// TODO: Use arrow functions with array methods
let number = [1, 2, 3, 4, 5];
let evenNumber = number.filter(number => number % 2 === 0);
console.log(evenNumber);

let names = ["Stacey-Lee", "Zoe", "Farah"]
name.forEach(name => console.log(name));
