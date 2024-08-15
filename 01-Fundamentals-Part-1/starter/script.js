/*
let  js = "amazing";
console.log(40+8+23-10);

console.log("Joanas");
console.log(23); 

let firstName = "Jonas";
console.log(firstName);

let javascriptIsFun = true;
console.log(javascriptIsFun);
*/


// // Math Operators // 
// const now = 2037;
// const ageJonas = now - 1991; 
// const ageSarah = now - 2018; 
// console.log (ageJonas, ageSarah);

// console.log(ageJonas * 2, ageSarah/ 10, 2**3)

// const firstName = 'Jonas';
// const lastName = 'Smith';
// console.log(firstName + ' ' + lastName);

// // Assignment Operatos // 
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25 
// x *= 4; // x = x * 4 = 100
// x ++; // x = x + 1  
// x --; 
// console.log(x); 


// //Comparison Operators// 
// console.log(ageJonas > ageSarah); // >, <, <=, >=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018); 


// const now = 2037;
// const ageJonas = now - 1991; 
// const ageSarah = now - 2018; 

// console.log(now - 1991 > now - 2018); 

// let x, y; 
// x = y = 25 - 10 - 5; 
// console.log (x, y); 

// const avergageAge = (ageJonas + ageSarah) / 2;
// console.log( ageJonas, ageSarah, avergageAge); 


// const massMark = 78; 
// const heightMark = 1.69;
// const BMIMark = massMark / (heightMark * heightMark);

// const massJohn = 92; 
// const heightJohn = 1.95; 
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn; 
// console.log(markHigherBMI); 

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037; 

// const Jonas = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;

// console.log(Jonas); 

// console.log(`just a regular string... `);

// console.log(`String 
// multiple 
// lines`); 
 
// const age = 15; 

// if (age >= 18){
//     console.log('Sarah can start driving licsence'); 
// } else {
//     const yearsLeft = 18 - age; 
//     console.log( `Sarah is too young. Wait another ${yearsLeft} years :)`);
// }
// /*constrolled structure 
// if(){

// } else { 

// }
// */ 
// const birthYear = 2012; 

// let century; 
// if( birthYear <= 2000) {
//     century = 20; 
// } else {
//     century = 21; 
// }
// console.log(century); 
// // 

// // Type Convertion 
// const inputYear = '1991'; 
// console.log(Number(inputYear)+18);

// // Type coercion 
// console.log ('I am' + 23 + 'years old'); 
// console.log ('23' - '10' - 3); 
// console.log ('23' * '2'); 

// //Example 
// let n = '1' + 1; //'11' 
// n = n - 1; 
// console.log(n);

// // // 5 Falsy Values: 0, '', undefined, null, NaN
// console.log(Boolean (0)); 
// console.log(Boolean (undefined)); 
// console.log(Boolean ('Jonas')); 
// console.log(Boolean ({})); 
// console.log(Boolean ('')); 

// const money = 0; 
// if (money){ 
//     console.log ( "Don't spend it all");
// } else {
//     console.log( 'You should get a job!'); 
// }

// const age = 18; 
// if (age === 18) console.log('You just became an adult! '); 

// const favourite = Number (prompt ("what is your favourite number?"));
// console.log(favourite); 

// if(favourite ===7) {
//     console.log('Cool! 7 is an amazing number!');
// } else(favourite === 23) 
//     console.log(' 23 is also a cool number');

// if (favourite !== 7) console.log ('That is also a Cool number!'); 

// LOGIC OPERATORS //

// const hasDriversLicense = true; //A 
// const hasGoodVision = true; // B 

// console.log(hasDriversLicense && hasGoodVision); // True (&& is for and)

// const hasDriversLicense = true; //A 
// const hasGoodVision = false; // B

// console.log(hasDriversLicense && hasGoodVision); // false 

// const hasDriversLicense = true; //A 
// const hasGoodVision = false; // B
// const isTired = true; // C

// console.log(hasDriversLicense || hasGoodVision); // true (|| is for or)
// console.log(!hasDriversLicense); // false (! is for not)

// // if(hasDriversLicense && hasGoodVision) {
// //     console.log('Sarah is able to drive');
// // } else {
// //     console.log('Someone else should drive...');
// // }

// console.log( hasDriversLicense || hasGoodVision || isTired); 


// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...');
// }

// switch Statment// 

// const day = 'monday'; 

// switch (day) { 
//     case 'monday': // day === 'monday' 
//     console.log('Hockey Practice');
//     console.log('At Guaymaral'); 
//     break;
//     case 'tuesday':
//         console.log('Practice Hockey');
//     break;
//     case 'wednesday':
//     case 'thursday': 
//     console.log('Catequesis');
//     break
//     case 'friday': 
//     console.log('Hockey again');
// }

// conditional operato - does not work for long conditions// 

// const age = 23; 
// // age >= 18 ? console.log('I want wine please!') : console.log('I want water please'); 

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`);

// const bill = 275; 
// const tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill *0.2; 

// console.log(`The bill was ${bill}, the tip was ${tip}, and the value ${ bill + tip}`); 

// console.log(jonas[ 'lastName' + 'firstName']); 

const jonas = {
    firstName: 'Jonas',
    lastName: 'Galvez', 
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael','Lulu','Rex'],
    hasDriversLicense: true, 

calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age; 
},

getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's License.`;
    }
};

console.log(jonas.getSummary()); 
