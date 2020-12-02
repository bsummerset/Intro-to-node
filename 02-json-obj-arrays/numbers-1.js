/*
1. Add up the number of likes.
Eacch number in the array is the numer of likes for a single post.
*/

//require() knows how to import JSON file!!!
// const likes = require('./numbers.json');

// console.log(likes);

// if(Array.isArray(likes)){
//     console.log('Yep that is an array')
// } else {
//     console.log('nope');   
// }

// console.log(likes[0]);


//*********************************** */

// const likes = require('./numbers.json');

// // if(likes[0] % 3) {
// //     console.log("it is odd")
// // } else{
// //     console.log("it is even")
// // }


// // if ( n % 2 == 0) {
// //     return 'true!!!';
// // } else {
// //     return 'false :(';
// // }

// //ternary operator is a short hand if/else
// // return (n % 2)=== 0? 'true!!!' : 'false :(';
// // const isEven = n => (n % 2) === 0;


// // console.log(`likes[0] is even? ${isEven(likes[0])}`);

// // // .fileter to produce a new array, that only contains evens
// // const onlyEvens = likes.filter(isEven)
// // console.log(onlyEvens.length);
// // console.log(likes.length);


// //Activity: how many post over 20000 likes?

// const hasLotsOfLikes = n => n > 20000;
// /*
// runction hasLotsOfLikes(n){
//     return n > 20000;
//     //or:
//     if(n> 20000){
//         return true;
//     } else {
//         return false;
//     }
// }
// */
// const highLikes = likes.filter(hasLotsOfLikes);
// console.log(highLikes.length)








