const likesAsStrings = require('./numbers-as-strings.json');


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

