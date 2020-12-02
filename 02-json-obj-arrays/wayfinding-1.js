const us = require('./places.json');


/*
Should I escape or use backticks?
    -use backticks
    -unless you have to write vanilla JS for a rally-really old 
    browser
    */
   //use brackets[] when the string has a space and apostraphies ' in string, otherwise we can use . notation for single names or names joined with the _. ie living_room
   //can switch back and forth from bracket notation[] to . notaton.
console.log(us.Georgia.Atlanta['East Lake']["Chris' House"]);


//************************EXERCISE****** */


const cities = (state)=> Object.keys(state);
console.log(cities(us.Texas));

function getCities(state) {
    console.log(Object.keys(us.Georgia));
}
getCities("Georgia")