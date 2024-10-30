var arr = [[1, 4, 3, 6, 8], [2, 0, 8, 10, 12], ['state', '14', '15', ' ', {name: 'joy', number1: '0', number2: '21', number3: '30', number4: '40' }, 9]];

var result = arr.flat(2);


var result2 = result.splice(13, 1, 'hello');
console.log(result)

