let arr = [2,3,4,56,-34,445,-3,445,111,445,-34,76,6,5];

//simple traverse array
for(let i = 0;i < arr.length;i++){
    console.log(arr[i]);
}

//sum and avg
sum =0;
for(let i = 0 ;i < arr.length;i++){
    sum+= arr[i];
}
console.log('sum = ',sum);
console.log('avg = ',sum/arr.length);
//larger number

//Random Number Array
// let arr = [2,3,4,56,-34,445,-3,445,111,445,-34,76,6,5];

//Think arr[0] is biggest and smallest Number of arr
let biggestNumber = arr[0];
let smallestNumber = arr[0];

//Find out biggest number of arr
for(let i = 1;i<arr.length;i++){
    //find out biggest number
    biggestNumber = biggestNumber<arr[i]?arr[i]:biggestNumber;
    //find out smallest number
    smallestNumber = smallestNumber < arr[i]?smallestNumber:arr[i];
}

//decleare secoundBiggestNumber and secoundSmallest Number 
let secoundBiggestNumber = null;
let secoundSmallestNumber = null;
for(let i = 0;i < arr.length;i++){
    //Set any value secoundBiggestNumber and skip biggest value from array
    if(arr[i] != biggestNumber){
        secoundBiggestNumber = arr[i];
    }
    //Set any value secoundSmallestNumber and skip smallest value from array
    if(arr[i] !=smallestNumber){
        secoundSmallestNumber = arr[i];
    }
}

//Find out secound biggest and smallest number from array
for(let i = 0;i < arr.length;i++){
    //Find out secound biggest number
    if(arr[i] != biggestNumber){
        console.log('test',arr[i]);
        secoundBiggestNumber = secoundBiggestNumber < arr[i]?arr[i]:secoundBiggestNumber;
    }
    //Find out secound smallest number
    if(arr[i] != smallestNumber){
        secoundSmallestNumber = secoundSmallestNumber < arr[i]?secoundSmallestNumber:arr[i];
    }
}

//Print out
console.log('First Biggest Number = ',biggestNumber);
console.log('Secound Biggest Number = ',secoundBiggestNumber);
console.log('First Smallest Number = ',smallestNumber);
console.log('Secound Smallest Number = ',secoundSmallestNumber);


