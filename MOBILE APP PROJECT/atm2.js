
var prompt = require('prompt-sync')({sigint: true})
var balance = 100.0; //set initial balance.

const fs = require('fs');

var data = [
    {username: 'Sharon', password: 123, pin:234}
]
var str = [];
const text = "text.txt"


function error1() {
    alert('Error: choose 0 for sign up and 9 for sign in.');
    sign();
}

function sign_up() {
    const username = prompt('Choose Username: ');
    const password = prompt('Choose Password: ');
    const pin = (prompt('Choose pin:'));


    if(fs.existsSync(text)){
           
        const contents =fs.readFileSync(text,'utf8')
            const arr = str
            arr.push({username, password, pin});
        fs.appendFileSync(text, JSON.stringify(arr) )
    }

    // data.push({username, password, pin});
    

    // var data_string = JSON.stringify(data);
    // var file = new Blob([data_string], {type:'text'});

    // var anchor = document.createElement("a");
    
    // anchor href = URL.createObjectURL(file)
    // var file = new Blob ([], {type:"text"})
    atm();

    // console.log(file);
}





function sign_in() {
    const username = prompt('Enter Username: ');
    const password = parseInt(prompt('Enter Password: '));
    const pin = parseInt(prompt('Enter pin:'));

    // const {name, pass, pins} = details
    // if(username === details.username){
    //     // return atm();
    //     console.log('hi')
    // } 
    // else{
    //     console.log('invalid details entered');
    //     return sign()
    // }
    atm();
    
}


function sign() {

    var choice = parseInt(prompt('Select a choice 0.) Sign Up 9.) Sign In.'));

    if (choice === 0) {
        sign_up();
    } else if (choice === 9) {
        sign_in();
    } else {
        error1();
    }
}

sign();



// TRANSACTION



function get_balance() {
    console.log('Your current balance is: '+balance);
    atm();
}

function make_deposit() {
    var deposit = parseFloat(prompt('How much would you like to deposit?'));
    if (isNaN(deposit) || deposit === '') {
        console.log('Error: please enter a number!');
        make_deposit();
    } else {
        balance += deposit;
        get_balance();
    }
}

function make_withdrawal() {
    var withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
    if (withdrawal > balance) {
        console.log('insufficient fund!');
        make_withdrawal();
    } else {
        balance -= withdrawal;
        get_balance();
    }
}



function top_up() {
    var network = parseFloat(prompt('Select a network 1.) MTN 2.) AIRTEL 3.) 9MOBILE 4.) GLO'));
    var num = parseFloat(prompt('Enter phone number'));
    var top = parseFloat(prompt('How much airtime?'));
    if (top > balance) {
        console.log('insufficient fund!');
       top_up();
    } else {
        balance -= top;
        get_balance();
    }
}

function transfer() {
    var bank = parseFloat(prompt('Select a bank 1.) UBA 2.) ACCESS 3.) ZENITH 4.) FCMB 5.)FIDELITY '));
    var account = parseFloat(prompt('Enter account number'));
    var send = parseFloat(prompt('Amount?'));
    if (send > balance) {
        console.log('insufficient fund!');
       transfer();
    } else {
        balance -= send;
        get_balance();
    }
}

function error() {
    console.log('Error: accepted numbers are 1 through 4.');
    atm();
}

function exit() {
    var confirm_leave = confirm('You have selected exit.');
    if (confirm_leave) {
        window.close();
    } else {
        atm();
    }
}

function atm() {

    var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Top Up 5.)Transfer 6.)Exit'));

    if (choice === 1) {
        get_balance();
    } else if (choice === 2) {
        make_deposit();
    } else if (choice === 3) {
        make_withdrawal();
    } else if (choice === 4) {
        top_up();
    } else if (choice === 5) {
        transfer();
    } else if (choice === 6) {
        exit();
    } else {
        error();
    }
}

// atm();