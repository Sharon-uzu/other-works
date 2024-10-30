var arr = [5,2, ,1,4];

var sum ;
for (var i = 1; i < arr.length; i++)
    for (var j = 0; j < i; j++)
    // sum += arr[j];
        if (arr[i] < arr[j]) {
            var x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }

console.log(arr);
 
        
// for (let i = 1; i < 5; i++) {
//     if (i== "") {
//       arr.push(i);
//     }
//   };
  
  
  
  
  
//   for (let j = 1; j <= arr.length; j++){
//     sum += arr[j];
//     console.log(sum)
//   };
        // console.log(arr.forEach(function(i) { 
        //     sum += i; 
        //  }));
        //  console.log(arr);


// console.log(arr.sort(function(a,b){return a-b}));

