
var prompt = require('prompt-sync')({sigint: true})
    console.log("Welcome to Sharon Scientific calculator");
   

    function selectOperator() {
      let number = prompt('Enter number (1 to add, 2 to substract, 3 to multiply, 4 to divide, 5 for modulus, 6 for sqrt, 7 = sine, 8 = cosine, 9 = tan, 10 = square, 11 = exponential, 12 = pie): ');

      number == 1 ? add() : number == 2 ? sub() : number == 3 ? mul() : number == 4 ? div() : number == 5 ? mod() : number == 6 ? sqrt() : number == 7 ? sine() : number == 8 ? cos() : number == 9 ? tan() : number == 10 ? sqr() : number == 11 ? exp() : number == 12  ? pie()  : ins()
    }

    selectOperator();

    function ins(){
      console.log('Please input a number from 0 - 12');
    }

    function add(){
      let number1 = parseFloat(prompt('Enter first number: '));
      let number2 = parseFloat(prompt('Enter second number: '));
      result =  number1 + number2;
      console.log(result);
      cont();
    }

    function sub(){
      let number1 = parseFloat(prompt('Enter first number: '));
      let number2 = parseFloat(prompt('Enter second number: '));
      result = number1 - number2;
      console.log(result);
      cont();

    }
    function mul(){
      let number1 = parseFloat(prompt('Enter first number: '));
      let number2 = parseFloat(prompt('Enter second number: '));
      result = number1 * number2;
      console.log(result);
      cont();
    }

    function div(){
      let number1 = parseFloat(prompt('Enter first number: '));
      let number2 = parseFloat(prompt('Enter second number: '));
      result = number1 / number2
      console.log(result);
      cont();
    }

    function mod(){
      let number1 = parseFloat(prompt('Enter first number: '));
      let number2 = parseFloat(prompt('Enter second number: '));
      result = number1 % number2
      console.log(result);
      cont();
    }

    function sqrt(){
      let number1 = parseFloat(prompt('Enter number: '));
      result = Math.sqrt(number1);
      console.log(result);
      cont();
    }

    function sine(){
      let number1 = parseFloat(prompt('Enter number: '));
      result = Math.sin(number1);
      console.log(result + " radians");
      cont();
    }

    function cos(){
      let number1 = parseFloat(prompt('Enter number: '));
      result = Math.cos(number1);
      console.log(result + " radians");
      cont();
    }

    


    function tan(){
      let number1 = parseFloat(prompt('Enter number: '));
      result = Math.tan(number1);
      console.log(result + " radians");
      cont();
    }

    function sqr(){
      let number1 = parseFloat(prompt('Enter number: '));
      result = (number1)**2;
      console.log(result);
      cont();
    }

    function exp(){
      let number1 = parseFloat(prompt('Enter first number: '));
      let number2 = parseFloat(prompt('Enter second number: '));
      result = Math.exp(number1, number2);
      console.log(result);
      cont();
    }

    function pie(){
      let number1 = parseFloat(prompt('Enter first number: '));
      result = Math.PI(number1);
      console.log(result);
      cont();

    }

    function cont(){
      contExit = prompt('Click 0 to exit or 13 to continue');
      return contExit == 13 ? selectOperator() : contExit == 0 ? console.log('exit')
      : console('choose 0 or 13')
    }



 