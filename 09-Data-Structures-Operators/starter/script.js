'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Pass an object into a function as an argument and the function distributes the object
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicius pasta wihr ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//OR operator - Use ANY data type, return ANY data type, short-circuiting 
console.log(3 || 'Jonas'); // 3 bc is a true value  
console.log('' || 'Jonas'); // Jonas 
console.log(true || 0); // True 
console.log(undefined || null); // null - undefined is a false value 

console.log(undefined || 0 || '' || 'Helo' || 23 || null); // Helo 

const guests1 = restaurant.numGuests ? restaurant.numGuest :10; 
console.log(guests1); // 10 - since restaurant numGuest is undifined then it goes to the number set 

const guest2 = restaurant.numGuest || 10
console.log(guest2); // 10 since it is undefiend 

//Nulish Coalesing Operator = works with concept of knoweledge values rather than falsy (null and undefined)
const guestCorrect = restaurant.numGuests ?? 10; // 0 real value 

//AND Operator = opposite of the OR, only true if all values are true 

console.log(0 && 'Jonas'); // 0 returs a falsy 
console.log(7 && 'Jonas'); // Jonas when is true it continues to the last value 

console.log('Hello' && 23 && null && 'jonas'); // null it evaluation stops when is not true anymore 

if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom', 'spinach'); 
}
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');  // 



// //passed one agument, one object
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sol 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// //order of elements does not metter
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //variable names diff from properties
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // destructuring the menu & setting a default value
// const { menu = [], starterMenu: starteres = [] } = restaurant;
// console.log(menu, starteres);

// // mutating variables while distructing objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);

// //nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(opne, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Declaring 3 variables at the same time
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCorse] = restaurant.order(2, 0);
// console.log(starter, mainCorse);

// The Spread Operator (...) takes all the elements from array and does not create new variables. Only use it were values are writiing separated by commas. Or passing values into a function

// Create a new array based on this one  with some elements at the begining

const arr = [7, 8, 9];
const badNewArr = [ 1,2 arr[0], arr [1], arr[2]]; // [1,2,7,8,9] 

const newArr = [1, 2, ...arr]; // [1,2,7,8,9] 

// log individual elements of the new array 
console.log(...newArr); // 1 2 7 8 9

//Createa an array w/ one more food item in the old array 
const newMenu = [...restaurant.mainMenu, 'Gnocci']; 

//Create shallow coppies of arrays 
const mainManueCopy = [...restaurant.mainMenu]; 

//Join 2 or more arrays together 
const menu = [...restaurant.mainMenu, ..restaurant.starterMenu]; 

//iterables: are arrays, strings, maps, sets. NOT objects
const str = 'Jonas'; 
const letters =[...str, ' ', 'S.']; 
console.log(letters); // "J" "o""n" "a""s" """S." 
console.log(...str); // J o n a s 

//fucntion accepts multiple arguments and use ... to pass the arguments 
const ingredients = [prompt('Let\'s make pasta! Ingredients 1?'), prompt("Ingredient 2?"), prompt("Ingredient 3?")]; // get ingredients from a promp window (\ escaping the completion of '')   

//Call the order pasta function 
restaurant.orderPasta(...ingredients); /// mushrooms, asparagus, cheese 

// Objects - creating a new 
const newRestaurant = {FoundedIn: 1998...restaurant, founder:'Guisepi'}// All the old restaurant info with the new info 

const restaurantCopy = {...restaurant}; 
restaurantCopy.name = 'Ristorante Roma' // Name changed on the copy not the original restaurant 


// Rest Pattern and Parameters - collect musltiple elements and place them into an array 

//Distructuring 

//SPREAD, b/c on RIGHT side of = 
const arr = [1, 2, 3 ...[3,4]]; 

//REST, b/c on LEFT side of =  it takes the rest of the eelements and place them into a new array, must also be the last element, only one rest 
const [a,b, ...others] = [1, 2, 3, 4, 5]; //1,2,[3,4,5]

const [pizza, , ristto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu] // pizza, rissotto and the rest of elements 

//REST in Objects 
const {sat, ...weekdays} = restaurant.openingHours; // friday and thursday listed 

//Functions 
//Rest peramiters 
const add = function(...numbers) {
  let sum = 0; 
  for(let i=0; i<numbers.length; i++) sum += numbers [i]; 
console.log(numbers); //all the arrays of the numbers bellow 
}

add(2,3)
add(3,5,7,2)

restaurant.orderPizza('mushroom', 'onion', 'pepperoni'); 



// Assignments
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// // Destructuring Arrays
// const [firstBook, secondBook] = books;

// const [, , thirdBook] = books;

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRating, threeStarRatings = 0] = ratingStars;

// //Destructure the books array into two variables called firstBook and secondBook.//
// const [firstBook, secondBook] = books;

// //Destructure the books array into a variable called thirdBook. You must skip the first two books//
// const [, , thirdBook] = books;

// //Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.//
// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;

// // Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.//
// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(ratingStars);

// Destructing Objects

// //Destructure the first book object from the books array into variables called title, author and ISBN.//
// const { title, author, ISBN } = books[0];

// // Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. The tags variable should be assigned with the value of the keywords property.
// const { keywords: tags } = books[0];

// // The seventh book from the books array is missing the programmingLanguage property. Destructure the seventh book object (books[6]) into variables called language and programmingLanguage. Assign the programmingLanguage variable with a default value of 'unknown'.
// const { language, programmingLanguage = 'unknown' } = books[6];

// //NOTES: (:) renamening (=) assigning

// // Below are two variables called bookTitle and bookAuthor. Reassign them with the values of the title and author properties of the first book object from the books array.
// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);

// Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

// {
//   title: 'Algorithms',
//   thirdParty:{
//     goodreads: {
//       rating: 4.41,              // <-- HERE
//       ratingsCount: 1733,
//       reviewsCount: 63,
//       fiveStarRatingCount: 976,
//       oneStarRatingCount: 13
//     }
//   }
// },
// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];

// Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// }); //"Algorithms by Robert Sedgewick, 2011"

// function printBookInfo({ title, author, year = 'year unknown' }) {
//   console.log(`${title} by ${author}, ${year}`);
// }

//The Separator Operator 

// Each book object has the author property, which stores an array of strings (author names) if there are multiple authors, or a single string (author name) if there is just one author.
// Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. The bookAuthors array should have just one level (no nested arrays).

const bookAuthors = [...books[0].author, ...books[1].author];

// Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

function spellWord(JavaScript) { 
  console.log(...JavaScript);
}
