// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply
/*all 3 numbers together. Note: The argument passed must NOT be the same number.*/
function multiply(num1,num2,num3) {
    return num1 * num2 * num3;
}

// console.log(multiply(2, 3, 4)); // Output: 24
// TODO: Create a function expression called ‘convertToSeconds’ that takes in a
/*number of minutes as an argument and returns the amount in seconds. ***Do not
use a console.log() inside of the function*** */
const convartToSeconds = function(minutes){
    return minutes * 60;
}
//console.log(convartToSeconds(5)); // Output: 300
// TODO: Create a function called fahrenheitToCelsius that takes the temperature as
/*an parameter and returns the equivalent temperature in Celsius. ***Do not use a
console.log() inside of the function*** */
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
//console.log(fahrenheitToCelsius(32)); // Output: 0
// TODO: Create a function that takes a string as a parameter and returns the reverse
/*of the string. ***Do not use a console.log() inside of the function *** */
function reverseString(str) {
    return str.split('').reverse().join('');
}
//console.log(reverseString("hello")); // Output: "olleh"
// TODO: Create a function that takes in a string and returns the number of Vowels in
/*the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a
console.log() inside of the function*** */
function countVowels(sentence) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of sentence) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
//console.log(countVowels("Javascript")); // Output: 3
// TODO: Create a “isPrime” function that takes a number as a parameter and returns
/*true if the number is prime, and false otherwise. Make sure to test your code with 4
numbers*/
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
//console.log(isPrime(2)); // Output: true
//why isnt this code showing up on console

