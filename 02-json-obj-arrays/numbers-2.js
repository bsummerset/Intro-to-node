const likesAsStrings = require('./numbers-as-strings.json');

<<<<<<< HEAD

// transform the array of strings
//into an array of numbers

//Use .map();
//1.Write a function that can transform 1 value (return the new version of the value)
//2. Pass the function as a calback to .map()
//3. Store the result in a new variable
//standard practice to use 10 as second parameter when using parseInt

const stringToNumber = s => parseInt(s, 10);
function strintToNumber(s){
    return parseInt(s, 10);
}
console.log(likesAsStrings[0]);
console.log(typeof stringToNumber(likesAsStrings[0]));

//number 2.
// .map() assigns a new array and so does .filter()
const likes = likesAsStrings.map(stringToNumber);
console.log(likes);

//equivalent of map:
const newArray = [];
for (let i of likes) {
    newArray.push(likesAsStrings(i));
}

console.log()

=======
// transform the array of strings
// into an array of numbers

// Use .map()!
// 1. Write a function that can transform 1 value (return the new version of the value)
// 2. Pass the function as a callback to .map()
// 3. Store the result in a new variable

const stringToNumber = s => parseInt(s, 10); // pass 10 as the second argument
//const stringToNumber = s => +s; // VOODOO!
// function stringToNumber(s) {
//     return parseInt(s, 10);
// }
// console.log(typeof likesAsStrings[0]);
// console.log(typeof stringToNumber(likesAsStrings[0]));
const likes = likesAsStrings.map(stringToNumber);
console.log(likes);

// equivalent of map:
// const newArray = [];
// for (let i of likes) {
//     newArray.push(likesAsStrings(i));
// }
console.log(likesAsStrings);
// map is safe to use because it does not mutate your original
>>>>>>> cbb8b2d2e7811e79ae4f17538a887a2de03ceb34
