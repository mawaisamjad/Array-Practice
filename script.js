// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.
// Questio no 01

let array1 = [
  ["a", "b", "c", "d"],
  ["e", "f"],
  ["g", "h", "i"],
];
multidemionalarray(array1); // call function

// Question no 02
let array2 = [[9, 3, 4],
              [11],
              [42, 100]
];
multidemionalarray(array2); // call function
// Declare function
function multidemionalarray(array1) {
  for (let i = 0; i < array1.length; i++) {
    let row = array1[i];
    for (let j = 0; j < row.length; j++) {
      console.log(row[j]);
    }
  }
}

// Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
// a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.

//Question no 03:-
// Declare function
function makeMatrix(row, column, b) {
  let array4 = [];
  for (let i = 0; i < row; i++) {
    let array5 = [];
    for (let a = 0; a < column; a++) {
      array5.push(b);
    }
    array4.push(array5);
    array5 = [];
  }
  console.log(array4);
}
//call function
makeMatrix(3, 5, "null");
makeMatrix(4, 2, "x");
makeMatrix(2, 2, 0);

// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.
// Qeustion no 04
let array6 = [
  [3, 5, 2],
  [6, 2],
];
let result1 = arrayproduct(array6);
console.log(`The total product of array is:${result1}`);
// Qeustion no 05
let array7 = [
  [4, 6],
  [2, 3],
  [1, 2],
];
let result = arrayproduct(array7);
console.log(`The total product of array is:${result}`);

// Declare function
function arrayproduct(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    let row = array[i];
    for (let j = 0; j < row.length; j++) {
      product = product * row[j];
    }
  }
  return product;
}

// Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
// as arguments. The function should return a 2D array containing all unique pairs of elements that
// sum to the target.

//console.log(twoSumPairs([2, 3, 4, 6, 5], 8)); // [ [2, 6], [3, 5] ]
//console.log(twoSumPairs([10, 7, 4, 5, 2], 12)); // [ [10, 2], [7, 5] ]
//console.log(twoSumPairs([3, 9, 8], 11)); // [ [3, 8] ]
//console.log(twoSumPairs([3, 9, 8], 10)); // [ ]
twoSumPairs([10, 7, 4, 5, 2], 12);
twoSumPairs([2, 3, 4, 6, 5], 8);
twoSumPairs([3, 9, 8], 11);
 // functionn call
function twoSumPairs(d, n){
    
    for(let i =0; i<d.length; i++){
        let c  = []
        for(let j = i+1; j<d.length; j++){
            if(d[i]+d[j] === n){
               c.push(d[i],d[j]); 
               console.log(c);
               console.log(`The total sum is ${n}`)
            }       
        }  
    }
}


// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the 
// same length.

let array11 = ["a", "b", "c", "d"];
let array12 = [-1, -2, -3, -4];
//fuction call
zipper(array11, array12)



let array3 = ["whisper", "talk", "shout"];
let array4 = ["quiet", "normal", "loud"];
// function call
zipper(array3, array4)
 // function decelaration
function zipper(array1, array2){
    let d = []
    for(let i = 0; i<array1.length; i++){
      
        let c = []
        for(let j = i; j<array2.length; j++){
            if(i === j){
             c.push(array1[i], array2[j])
            }
        }
        d.push(c)
    }
    console.log(d);
}
