//Object Array
let persons = [
    {
        name : 'Tazri',
        id : 12,
        color : 'blue'
    },
    {
        name : 'Meraz',
        id : 23,
        color: 'Green'
    },
    {
        name: 'Sami',
        id:20,
        color: 'Yellow'
    }
]

console.log(persons);

//Multi Dainmontional Array

let Pointer = [
    [2,3],
    [34,43],
    [2,35],
    [345,32],
    [32,76],
    [34,3]
]

for(let i = 0;i < Pointer.length;i++){
    console.log(`Pointer ${i}.X = ${Pointer[i][0]} Y = ${Pointer[i][1]}`)
}
console.log('\n\n\n')
//Multi Traverse
for(let i = 0;i < Pointer.length;i++){
    for(let j = 0; j < 2;j++){
        console.log(`${i} pointer X = ${Pointer[i][j]} Y=${Pointer[i][j]}`)
    }
}

//Matrix Sum
let matrixA = [
    [2,2],
    [1,0],
    [2,3]
]

let matrixB = [
    [1,3],
    [3,2],
    [1,3]
]

function sumMatrix(matrixOne,matrixTwo){
    let result = [];
    for(let i = 0 ; i < matrixOne.length;i++){
        let row = [];
        for(let j = 0 ; j <2;j++){
            row.push(matrixOne[i][j]+matrixTwo[i][j]);
        }
        result.push(row);
    }
    return result;
}

console.log('\n\n\n\n')

//Now sum
let addMatrixResult = sumMatrix(matrixA,matrixB);
console.log('matrixA = ',matrixA);
console.log('matrixB = ',matrixB);
console.log('addMatrixResult = ',addMatrixResult);