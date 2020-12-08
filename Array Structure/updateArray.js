//Array 
let arrOne = new Array(10);
console.log(arrOne,arrOne.length);

for(let i = 0;i < arrOne.length;i++){
    arrOne[i] = false;
}
console.log(arrOne,arrOne.length);

//Fill BuiltIn Function
let arrTwo = new Array(10);
console.log(arrTwo,arrTwo.length);
arrTwo.fill('Md Tazri');
console.log(arrTwo,arrTwo.length);

//Tic Toc Tie
let arrTic = new Array(9);
arrTic.fill(undefined);
console.log(arrTic,arrTic.length);
for(let i = 0;i < arrTic.length;i++){
    let randomNumber = Math.floor(Math.random()*10+1);
    arrTic[i] = randomNumber < 5 ? 'X':'O';
}

console.log(arrTic);

//Name Array Update
let namesArray = [
    'Md Tazri',
    'Md Meraz',
    'Sami',
    'Miskat',
    'Ammo'
]

function updateArray(array){
    for(let i = 0; i < array.length;i++){
        array[i] = `${i+1}. ${array[i]}`
    }
    return array;
}

console.log(namesArray);
let updatedArray = updateArray(namesArray);
console.log(namesArray);
console.log(updatedArray);
console.log(namesArray === updatedArray);