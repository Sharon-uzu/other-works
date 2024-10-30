let fruits = ['mango', 'apple', 'guava', 'banana', 'pawpaw', 'pineaple', 'coacoa', 'grape', 'avocado', 
'kiwi', 'cherry', 'coconut', 'orange', 'pear' ,' watermelon'];



// 1. SPLICE
// replace 5 element from index 0

let spliced = fruits.splice(0, 5, 'texas', 'new york', 'lagos', 'london', 'abuja');

    console.log(spliced);
    console.log(fruits);
    
    
// 2. UNSHIFT
// add "JavaScript" at the beginning of the array

fruits.unshift("JavaScript", 'corn');

console.log(fruits);



// 3. splice() for middle
var middle = (fruits.length/2);
// console.log(middle);
let r = fruits.splice(middle, 1);
console.log(r);


console.log(fruits);


// console.log(shifted);
// console.log(fruits);


// 4. slice()

let sliced = fruits.slice(9, 16)
// let sliced = fruits.slice(6,15);
console.log(sliced); 




