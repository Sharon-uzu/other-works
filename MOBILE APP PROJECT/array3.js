let arr = [0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0];

// for(let i=0;i<arr.length-1;i++){
//        for(let j=i+1;j<arr.length;j++)
//             {
//                 if(arr[j] < arr[i])
//                 {
//                     array = arr[j]
//                     arr[j] = arr[i]
//                     arr[i] = array
//                 }
//             }
//         }
//     console.log(arr)



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");



const arraySort = (str) => {
    let zero = [];
    let one = [];
    
    for(let i = 0; i<str.length; i++){
        if(str[i] !==0){
            one.push(str[i])
        }else{
            zero.push(str[i]);
        }
    }
    
    console.log(zero + ',' + one)
}
arraySort(arr);
