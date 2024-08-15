// 'use strict'; 

// let hasDriversLicense = false;
// const passTest = true; 

// if (passTest) hasDriversLicense = true; 
// if (hasDriversLicense) console.log('I can drive :D'); 

// function logger() {
//     console.log('My nanme is Nani');
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apple, oranges) {
//     const juice = `Juice with ${apple} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor (5, 0);
// console.log(appleJuice);

// const appleOrangeJice = fruitProcessor (2, 4); 
// console.log(appleOrangeJice);


// function calAge1(birthYear) {
//     return 2024 - birthYear; 
// }
// const age1 = calAge1(1989);

// // Function expression// 

// const calAge2 = function(birthYear) {
//     return 2024 - birthYear;
// }

// const age2 = calAge2(1989);
// console.log(age1, age2);

// //Arrow Function 

// const calAge3 = birthYear => 2037 - birthYear; 
// const age3 = calAge3(1991); 
// console.log (age3); 

// // const yearsUntilRetirement = birthYear => {
// //     const age = 2037 - birthYear; 
// //     const retirement = 65 - age; 
// //     return retirement; 
// // }

// // console.log ( yearsUntilRetirement (1991)); 


// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear; 
//     const retirement = 65 - age; 
//     return `${firstName} retires in ${retirement} years`; 
// }

// console.log(yearsUntilRetirement(1991, "Nani")); 

// // 

// function fruitProcessor(apple, oranges) {
//    const juice = `Juice with ${apple} apples and ${oranges} oranges.`;
//    return juice;
// }

const cutPieces = function (fruit) {
    return fruit * 4; 
};

const fruitProcessor = function (apples, oranges) {

    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces (oranges); 

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
    return juice; 
};

console.log(fruitProcessor (2,3)); 



