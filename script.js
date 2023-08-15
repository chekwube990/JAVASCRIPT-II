// *************** Values and Variables **************
console.log("Hello World!");

let firstname = "Guy";

console.log(firstname);


//******************* Variables Naming Conventions ******************
let obinna4 = "Obinna";
let _charles = "Charles";
let $chidubem = "Chidubem";

console.log(obinna4, _charles, $chidubem);


// ******************* Data types ********************

/*
JavaScript has 8 Datatypes
    1.String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object
*/


// Booleans -> True or Fales Values
var javaScriptIsEasy = true;
var lifeIsHard = false;


console.log(typeof lifeIsHard);


// Numbers
let chekwube = 30;
let kingsley = 29.8;

console.log(typeof chekwube);
console.log(typeof kingsley);


// Strings
let message = "Welcome to France";
console.log(typeof message);

let guy ="34";
console.log(typeof guy);

let donald = "24" + 2;
console.log(donald, typeof donald);

//Undefined
let year;
console.log(year, typeof year);

// An empty Value has nothing to do with 'undefined'
let car = '';
console.log(typeof car);

// When adding a number and a string, javaScript will treat the number as a string.
let Vehicle = 16 + 4 + "Volvo";
console.log(Vehicle, typeof Vehicle);

/* Null
     In JavaScript null is nothing. it is supposed to be something that doesn't exist.
     The data type of null of object
     */
    let money = null;
    console.log(money, typeof money);



    /*
    * Difference between undefined and null
    * Typeof undefined is undefined
    * Typeof null is object
    */

    // Similarities 
    console.log(null === undefined);