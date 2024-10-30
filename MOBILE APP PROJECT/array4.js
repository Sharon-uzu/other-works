var arr = [4, 2, 3, 1, 6, 7, 8, 9];

// const result = arr.reduce((accumulator, currentValue) => {
//     return accumulator.concat(currentValue*2);
//   }, []);
//   console.log(result);

  // Flattening an array of arrays with the Reduce Method In JavaScript​​
// We can use reduce to flatten nested amounts into a single array.

// We set the initial value to an empty array and then concatenate the current value to the total.

 

 arr.reduce((accumulator, currentValue, index) =>
     arr[index] = arr[index] * 2
, []);
console.log(arr)
