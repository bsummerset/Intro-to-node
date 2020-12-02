const employees = require('./employees-array.json');
const employee = employees[0];



/* Notes
key/value pairs are called:
-Objects in JS
-Hashes in Ruby
- Dictionaries in Python
*/

//dot syntax is used 99% of the time
//Use when you know what key you are accessing.
// console.log(employee.jobTitle);

//bracket syntax
// console.log(employee['jobTitle']);

//How do I get all the keys?
// console.log(Object.keys(employee));
// for (let k of Object.keys(employee)) {  //the for loop of the for of will lop through every key of employee
    //console.log(k); // just print the key
    // const theValue = employee[k];  //employee takes on the keys and the [k] takes on the value of the keys in the key/value pair. the for of above loops through the object
    // console.log(theValue);
    // console.log(`${k}: ${theValue}`);
    // console.log(employee[k]); //print value for that key
    //console.log(employee['lastName'])
    //firstName: "Elsie"
    //lastName: "Orn" 
    

// }
// const theKeys = Object.keys(employee);
// console.log(theKeys);
// for (let i = 0; i < theKeys.length; i ++) {
//     let k = theKeys[i];
//     console.log(`${i}: ${k}: ${employee[k]}`)
// }

// let k = 'firstName';
// let theValue =  employee[k];
// console.log(`${k}: ${theValue}`);





//************************************Exercises**************************/

const getValue = (key)=>{
    console.log(employee[key])

}
getValue('lastName')


