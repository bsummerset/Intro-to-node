const employees = require("./employees-array.json")
/*
.map() transforms the elements of one array into another array
*/

// const numbers = [1,2,3,4,5];
// const squareItBaby = n => n * n;
// const squaresBaby = numbers.map(squareItBaby);

// console.log(squaresBaby);

// function myMap(arr, callback) {
//     const newArr = []

//     for(let n of arr) {
//         const newVal = callback(n);
//         newArr.push(newVal);
//     }

//     return newArr;
// }
// const squares2 = myMap(numbers, squareItBaby);
// console.log(squares2);

//".map() over" the employees array
//0. declare a function
function summarize(e){
    //1. turn the variable into an argument
    // const e =employees[0];
    const newObj = {
        lastName: e.lastName,
        jobTitle: e.jobTitle
    }
    //2. turn the console.log into a return
    // console.log(newObj);
    return newObj;
}
// console.log(summarize(employees[2]));
// const summaryOfEmployees = employees.map(summarize);
// console.log(summaryOfEmployees);


//filter out anyone with a short last name
//transform their jobTitle UPPERCASE
/*
{
    lastName:'Hermon
    jobTitle: "CHIEF"

}
*/

//helper function returns true if last name longer than 5 chars
// to be used with filter

const isLastNameLong = e => e.lastName.length > 5
// if (isLastNameLong(employees[1])) {
//     console.log('Yep')
// } else {
//     console.log('nope')
// }

function capTitle(e) {
    return {
        // lastName: e.lastName,
        //instead of hard-coded copying, use the "sprinkle" object
        ...e,// more formally, the "spread" operator
        //which copies the key/value pairs from the e variable
        //into out new object
        jobTitle: e.jobTitle.toUpperCase()
    }
}

const emps2 = employees.filter(isLastNameLong);
// console.log(emps2);
const emps3 = emps2.map(summarize)
// console.log(emps3)

// console.table(capTitle(employees[0]));
// const emps4 = emps3.map(capTitle);
// console.table(capTitle(employees[0]));
// console.log(emps4)

