//constructor
let array = [];
let arrayOne = new Array();

console.log(array,arrayOne,array.length,arrayOne.length);

let arrayTwo = new Array(5);
console.log(arrayTwo,arrayTwo.length);
console.log(arrayTwo[3],arrayTwo[39]);
console.log(array[34]);

let arrayThree = new Array(1,2,3,4,5);
console.log(arrayThree,arrayThree.length);
//factory function
let arrOne = Array(5);
console.log(arrOne,arrOne.length);
let arrTwo = Array(1,2,3,4,5,6);
console.log(arrTwo,arrTwo.length);

//what really do factory and constructor function
let constArr = new Array(3);
let facArr = Array(3);

console.log(constArr.__proto__.constructor);
console.log(facArr.__proto__.constructor);
