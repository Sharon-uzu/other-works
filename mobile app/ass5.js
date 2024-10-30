// //create an ATM console app
// const prompt = require("prompt-sync")({ sigint: true });
// const { log } = require("console");
// const fs = require('fs');


// (function () {
//     console.log("Welcome to Group 2 ATM console app");
// }());

// const userDetails = JSON.parse(fs.readFileSync('database.json'));

// let details = {
//     fullName : "",
//     gender : "",
//     dateOfBirth : "",
//     phoneNumber: "",
//     homeAddress: "",
//     emailAddress : "",
//     password : "",
//     availableBal : 0,
//     airtime : 0,
//     data : 0,
//     dailyWithdrawal : 0,
//     dateWithdrawal : "",
//     dailyTransfer : 0,
//     accountNumber : 0,
//     bankStatement : [],
//     isLoggedIn : false
// };


// SignInSignUp()
// function SignInSignUp() {
//     console.log("Press 1 to signup or\nPress 2 to signin");
//     let num = parseInt(prompt("What's your choice? : "));
//     num == 1 ? group2Bank() : num == 2 ? login() : tryAgainInUp();
// }
    
    
// function tryAgainInUp(){
//     console.clear();
//     console.log("Please select either 1 or 2");
//     SignInSignUp();
// }



// function group2Bank() {
//     console.clear();
//     console.log("Welcome to Group 2 Bank\nEnter your user details to create an account");
//     doItRightFullName();
//     function doItRightFullName() {
//         let fullName = prompt("Enter your full name : ").toUpperCase();
//         if(fullName == ''){ 
//             console.log("Your full name input cannot be EMPTY!");   
//             doItRightFullName();                                      
//         }
//         else if(/\d/.test(fullName)){
//             console.log("Your full name input cannot contain Number(s)!"); 
//             doItRightFullName();
//         }
//         else if(/[`!@#$%^&()_+\-=\[\]{};';"\\|,.<>\/?~]/.test(fullName)){
//             console.log("Your full name input cannot contain Symbol(s)!"); 
//             doItRightFullName();
//         }
//         else
//             details.fullName = fullName;
//     }

//     doItRightGender();
//     function doItRightGender() {
//         console.log("Press 'm' for 'male' or\nPress 'f' for 'female'");
//         let gender = prompt("Enter here : ").toUpperCase();
//         if(gender == 'M'){ 
//             details.gender = "Male";                                      
//         }
//         else if(gender == 'F'){ 
//             details.gender = "Female";                                      
//         }
//         else{
//             console.log("invalid input");
//             doItRightGender()
//         }
//     }

//     doItRightDateOfBirth();
//     function doItRightDateOfBirth() {
//         console.log("Your DOB should take this format dd/mm/yyyy e.g. 05/12/1990");
//         let dateOfBirth = prompt("Enter here : ");
//         if(/\s/.test(dateOfBirth)){
//             console.log("Your date of birth input cannot contain Space(s)!");   
//             doItRightDateOfBirth();                                      
//         }
//         else if(dateOfBirth == ''){
//             console.log("Your date of birth input cannot be EMPTY!");   
//             doItRightDateOfBirth();                                      
//         }
//         else if(dateOfBirth.length != 10){
//             console.log("Pless enter your DOB in the correct format");
//             doItRightDateOfBirth();
//         }
//         else 
//             details.dateOfBirth = dateOfBirth;  
//     }

//     doItRightPhoneNumber();
//     function doItRightPhoneNumber() {
//         let phoneNumber = prompt("Enter your phone number : ");
//         let confirm = userDetails.find(info => info.phoneNumber == phoneNumber);
//         if (confirm){
//             console.log('Sorry phone number has been taken,try a different phone number');
//             doItRightPhoneNumber();
//         }
//         else if(isNaN(phoneNumber) || phoneNumber == ''){
//         console.log("It's either you didn't enter a VALID NUMBER or you left the FIELD BLANK");       
//         doItRightPhoneNumber();                                       
//         }
//         else if(phoneNumber.length != 11){ 
//         console.log("You have to enter an 11-digit number");
//         doItRightPhoneNumber();
//         }
//         else if(/\s/.test(phoneNumber)){
//             console.log("Your phone number input cannot contain Space(s)!"); 
//             doItRightPhoneNumber();   
//         }
//         else if(/[`!@#$%^&()_+\-=\[\]{};';"\\|,.<>\/?~]/.test(phoneNumber)){
//             console.log("Your phone number input cannot contain Symbol(s)!"); 
//             doItRightPhoneNumber();   
//         }
//         else
//             details.phoneNumber = phoneNumber;
//     }

//     doItRightHomeAddress();
//     function doItRightHomeAddress() {
//         let homeAddress = prompt("Enter your home address : ").toUpperCase();
//         if(homeAddress == ''){
//             console.log("Your home address input cannot be EMPTY!");   
//             doItRightHomeAddress();                                      
//         }
//         else
//             details.homeAddress = homeAddress;
//     }

//     doItRightEmailAddress();
//     function doItRightEmailAddress() {
//         let emailAddress = prompt("Enter your email address : ").toUpperCase();
//         let atSymbol = '@';
//         let dotCom = '.COM';
//         let confirm = userDetails.find(info => info.emailAddress == emailAddress);
//         if (confirm){
//             console.log('Sorry email adrees has been taken,try a different email');
//             doItRightEmailAddress();
//         }
//         else{
//             if (emailAddress.includes(atSymbol) && emailAddress.includes(dotCom))
//             details.emailAddress = emailAddress;
//         else if(emailAddress == ''){
//             console.log('Your email address input cannot be EMPTY!');    
//             doItRightEmailAddress();                                      
//         }
//         else if(/\s/.test(emailAddress)){
//             console.log('Your email address input cannot contain Space(s)!');    
//             doItRightEmailAddress();                                      
//         }
//         else{
//             console.log(`Your email address did not contain ${atSymbol} or ${dotCom}`);
//             doItRightEmailAddress();
//         }
//         }
//     }


//     doItRightPassword();
//     function doItRightPassword() {
//         let password = prompt("enter a 4-digit password : ");
//         if(isNaN(password) || password == ''){
//             console.log("It's either you didn't enter a VALID NUMBER or you left the FIELD BLANK");       
//             doItRightPassword();                                       
//         }
//         else if(password.length != 4){ 
//             console.log("You have to enter a 4-digit number password");
//             doItRightPassword();
//         }
//         else if(/\s/.test(password)){ 
//             console.log("Your password input cannot contain Space(s)!");
//             doItRightPassword();
//         }
//         else
//             details.password = password;
//     }


//     confirmation();
//     function confirmation(){
//         console.clear();
//         console.log("Please confirm your details below")
//         console.log(`Name : ${details.fullName}`);
//         console.log(`Gender : ${details.gender}`);
//         console.log(`Date of birth : ${details.dateOfBirth}`);
//         console.log(`Phone Number : ${details.phoneNumber}`);
//         console.log(`Home Address : ${details.homeAddress}`);
//         console.log(`Email Address : ${details.emailAddress}`);
//         console.log(`Password : ${details.password}`);
//         let choice = prompt("Press 1 to finalize or 2 to re-register : ");
//         if (choice == 1)
//             finalize();
//         else if(choice == 2)
//             group2Bank();
//         else{
//             console.log("You didn't enter a valid input");
//             confirmation();
//         }
//     }


//     function finalize(){
//         console.clear();
//         let accountNumber = "0" + gtbNumber(100000000, 999999999);
//         function gtbNumber(min, max) {
//             let random = Math.floor(Math.random() * max + min);
//             while(random > max){
//             random = Math.floor(Math.random() * max + min);    
//             }
//             return random;
//         }
//         let confirm = userDetails.find(info => info.accountNumber == accountNumber);
//         if (confirm){
//             console.log('Sorry account number has been taken,try a different account number');
//             finalize();
//         }
//         else {
//             details.accountNumber = accountNumber;
//         }   
//         console.log(`Congratulations! ${details.fullName}, your Group 2 account has been successfully created.\nYour Account Number is ${details.accountNumber}`);
//         userDetails.push(details);
//         fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//         loginExit();
//     }    
// }

// function loginExit(){
//     console.log('Press 1 to proceed to login or 2 to exit : ');
//     let num = parseInt(prompt("What's your choice? : "));
//     num == 1 ? login() : num == 2 ? exitReg() : loginExitAgain();
// }

// function exitReg(){
//     console.log(`${details.fullName}, thank you for using Group 2 ATM Good bye!`);
// }

// function loginExitAgain(){
//     console.log("You didn't enter 1 or 2");
//     loginExit();
// }



// function login(){
//     console.clear();
//     let emailInput = prompt("Enter your email address : ").toUpperCase();
//     let passwordInput = parseInt(prompt("Enter your 4-digit password : "));
//     const result = userDetails.find(info => info.emailAddress == emailInput && info.password == passwordInput);
//     if (result){
//         result.isLoggedIn = true;
//         console.log(`WELCOME ${result.fullName}!`);
//         performOperation();
//     }
//     else {
//         console.clear();
//         console.log("Wrong Password or Email, you have THREE more attempts!");
//         let emailInput = prompt("Enter your email address : ").toUpperCase();
//         let passwordInput = prompt("Enter your 4-digit password : ");
//         const result = userDetails.find(info => info.emailAddress == emailInput && info.password == passwordInput);
//         if (result){
//             console.clear();
//             result.isLoggedIn = true;
//             console.log(`WELCOME ${result.fullName}!`);
//             performOperation();
//         }
//         else {
//             console.clear();
//             console.log("Wrong Password or Email, you have TWO more attempt!");
//             let emailInput = prompt("Enter your email address : ").toUpperCase();
//             let passwordInput = prompt("Enter your 4-digit password : ");
//             const result = userDetails.find(info => info.emailAddress == emailInput && info.password == passwordInput);
//             if (result){
//                 console.clear();
//                 result.isLoggedIn = true;
//                 console.log(`WELCOME ${result.fullName}!`);
//                 performOperation();
//             }
//             else {
//                 console.clear();
//                 console.log("Warning!, this is your final attempt and  will be logged out if wrong");
//                 let emailInput = prompt("Enter your email address : ").toUpperCase();
//                 let passwordInput = prompt("Enter your 4-digit password : ");
//                 const result = userDetails.find(info => info.emailAddress == emailInput && info.password == passwordInput);
//                 if (result){
//                     console.clear();
//                     result.isLoggedIn = true;
//                     console.log(`WELCOME ${result.fullName}!`);
//                     performOperation();
//                 }
//                 else{
//                     console.clear(); 
//                     console.log("Wrong Email and Password, you have been logged out!");
//                 }
//             }
//         }

//     }

// }


// function performOperation() {
//     console.log(`press 1 to check balance\nPress 2 to withdraw\nPress 3 to deposit\nPress 4 to transfer
// Press 5 for mobile transaction\nPress 6 to check bank statemet\nPress 7 to change password
// Press 8 to check airtime and data balance\nPress 9 to view profile\nPress 0 to logout`);
//     let num = parseInt(prompt("click any digit between 0 and 8 to perform operation : "));
//     return num == 1 ? checkbalance() : num == 2 ? withdraw() : num == 3 ? deposit() : num == 4 ? tranfer() 
//     : num == 5 ? mobileTransaction() : num == 6 ? bankStatement() : num == 7 ? changePassword() 
//     : num == 8 ? airDataBal() : num == 9 ? viewProfile() : num == 0 ? logout() : restartOp();
// }


// function restartOp() {
//     console.log("You didn't enter a number between 0 and 9");
//     performOperation();
// }


// function logout() {
//     console.clear();
//     const user = userDetails.find(info => info.isLoggedIn == true);
//     if (user) {
//         console.log(`${user.fullName} are you sure you want to logout?`);
//         let exitContinue = parseInt(prompt("Click 0 to logout or 9 for menu: "));
//         if (exitContinue == 9)
//             performOperation();
//         else if (exitContinue == 0){
//             console.clear();
//             user.isLoggedIn = false;
//             fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//             console.log(`${user.fullName}, goodbye`);
//         }
//         else{
//             console.log("You did not enter either 0 or 9");
//             logout();
//         }             
//     }
// }



// function checkbalance() {
//     console.clear();
//     const user = userDetails.find(info => info.isLoggedIn == true);
//     if (user) {
//         console.log(`Your Available Balance is ${user.availableBal} Naira`);
//         next();
//     }
//     function next() {
//         console.log("Press 1 to return to main menu or\nPress 2 to logout");
//         let num = parseInt(prompt("what's your choice? : "));
//         if (num == 1) {
//             console.clear();
//             performOperation();
//         } 
//         else if (num == 2)
//             logout();
//         else {
//             console.log("You didn't enter 1 or 2");
//             next();
//         }
//     }
    
// }



// function withdraw() {
//     console.clear();
//     const user = userDetails.find(info => info.isLoggedIn == true);
//     if (user) {
//         console.log("Your daily withdrawal limit is 50000 naira");
//         console.log("The highest amount you can withdraw at a time is 10000 naira and you can't withdraw less than 500 naira");
//         let amountWithdraw = parseFloat(prompt("How much do you want to withdraw? : "));
//         dateWithdrawal()
//         function dateWithdrawal() {
//             let lastWithrawDate = user.dateWithdrawal;
//             let todaysDate = new Date().toLocaleDateString('en-GB');
//             if (todaysDate != lastWithrawDate) {
//                 user.dailyWithdrawal = 0;
//                 fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//             }
//         }
//         if (user.dailyWithdrawal >= 0 && user.dailyWithdrawal < 50000) {
//             if (user.dailyWithdrawal + amountWithdraw > 50000) {
//                 console.log("You have exceeded your daily withdrawal limit");
//                 next();
//             }
//             else if (amountWithdraw <= 10000 && amountWithdraw >= 500){
//                 if (amountWithdraw <= user.availableBal){
//                     user.dateWithdrawal = new Date().toLocaleDateString('en-GB');
//                     userDetails.push(user.dailyWithdrawal += amountWithdraw);
//                     userDetails.push(user.availableBal -= amountWithdraw);
//                     userDetails.push(user.bankStatement.push(`You withdrew ${amountWithdraw} Naira. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                     fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                     console.log(`You withdrew ${amountWithdraw} Naira, now your updated account balance is ${user.availableBal} Naira`);
//                     next();
//                 }
//                 else {
//                     console.log("You have insufficient funds!");
//                     next();
//                 }
//             }
//             else if(amountWithdraw > 10000){
//                 console.log("You can't withdraw more than 10000 at once");
//                 next();
//             }
//             else {
//                 console.log("You did not enter a valid number");
//                 next();
//             }
//         }        
//         else {
//             console.log("You have exceeded your daily withdrawal limit");
//             next();
//         }
//     }
        
        
//     function next() {
//         console.log("Press 0 to withdraw again or\nPress 1 to return to main menu or\nPress 2 to logout");
//         let num = parseInt(prompt("what's your choice? : "));
//         if (num == 0) {
//             console.clear();
//             withdraw(); 
//         }
//         else if (num == 1) {
//             console.clear();
//             performOperation();
//         } 
//         else if (num == 2)
//             logout();
//         else {
//             console.log("You didn't enter 0, 1 or 2");
//             next();
//         }
//     }
// }       



// function mobileTransaction() {
//     console.clear();
//     let user = userDetails.find(info => info.isLoggedIn == true);
//     if (user) {
//         console.log("Press 1 for airtime transaction or\nPress 2 for data transaction");
//         let choice = parseInt(prompt("What's your choice? : "));
//         if (choice == 1)
//             airtimeTransaction();
//         else if (choice == 2) 
//             dataTransasction();
//         else{
//             console.clear();
//             console.log("You didn't enter 1 or 2");
//             mobileTransaction();   
//         }
//     }
//     function airtimeTransaction(){
//         console.clear();
//         console.log("Press 1 for airtime purchase or\npress 2 for airtime transfer");
//         let choice = parseInt(prompt("What's your choice? : "));
//         if (choice == 1){
//             airtimePurchase();
//             function airtimePurchase(){
//                 console.log("You can purchase atleast 50 naira airtime")
//                 let purchase = parseFloat(prompt("How much do you want to purchase? : "));
//                 if (purchase > user.availableBal){
//                     console.log("You have insufficient money to purchace airtime");
//                     next();
//                 }
//                 else if (purchase <= user.availableBal && purchase >= 50){
//                     userDetails.push(user.airtime += purchase);
//                     userDetails.push(user.availableBal -= purchase);
//                     userDetails.push(user.bankStatement.push(`You bought ${purchase} Naira airtime. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                     fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                     console.log(`You bought ${purchase} Naira airtime, now your updated account balance is ${user.availableBal} Naira`);
//                     next();
//                 }
//                 else {
//                     console.log("Invalid input, try again!");
//                     airtimePurchase()
//                 }
//             }
//         }    
//         else if (choice == 2) {
//             console.clear();
//             airtimeTransfer();
//             function airtimeTransfer(){
//                 console.log("You can transfer atleast 50 naira airtime")
//                 let foreignPhoneNumber = parseInt(prompt("Enter recipient's phone number : "));
//                 let foreignUser = userDetails.find(info => info.phoneNumber == foreignPhoneNumber && info.isLoggedIn == false );
//                 if (foreignUser){
//                     console.log(`user ${foreignUser.fullName} with phone number ${foreignUser.phoneNumber} found!`);
//                     let airtimeTransfer = parseFloat(prompt("Enter airtime to transfer : "));
//                     if (airtimeTransfer > user.airtime){
//                         console.log("You have insufficient airtime");
//                         next();
//                     }
//                     else if (airtimeTransfer <= user.airtime && airtimeTransfer >= 50){
//                         userDetails.push(foreignUser.airtime += airtimeTransfer);
//                         userDetails.push(user.airtime -= airtimeTransfer);
//                         userDetails.push(user.bankStatement.push(`You transfered ${airtimeTransfer} Naira airtime to ${foreignUser.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                         userDetails.push(foreignUser.bankStatement.push(`You recieved ${airtimeTransfer} Naira airtime from ${user.fullName}.Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                         fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                         console.log(`You transfered ${airtimeTransfer} Naira airtime to ${foreignUser.fullName}, now your updated airtime is ${user.airtime} Naira`);
//                         next();
//                     }
//                     else {
//                         console.log("Invalid input, try again!");
//                         next();
//                     }
//                 }
//                 else {
//                     console.log("Cannot find any user that matches the phone number!");
//                     airtimeTransfer();
//                 }
//             }
//         }            
//         else{
//             console.log("You didn't enter 1 or 2");
//             airtimeTransaction()   
//         }
//     }
//     function dataTransasction(){
//         console.clear();
//         console.log("Press 1 for data purchase\npress 2 for data transfer");
//         let choice = parseInt(prompt("What's your choice? : "));
//         if (choice == 1){
//             dataPurchase();
//             function dataPurchase(){
//                 console.log('Select a Data Plan');
//                 console.log('Press 1 for 3GB (1 day) at 700 naira');
//                 let payThreeGig = 700;
//                 let threeGig = 3072;
//                 console.log('Press 2 for 2.5GB (2 days) at 500 naira');
//                 let payTwoPointFiveGig = 500;
//                 let twoPointFiveGig = 2560;
//                 console.log('Press 3 for 2GB (7 days) at 1000 naira');
//                 let payTwoGig = 1000;
//                 let twoGig = 2048;
//                 console.log('Press 4 for 1GB (7 days) at 500 naira');
//                 let payOneGig = 500;
//                 let oneGig = 1024;
//                 console.log('Press 5 for 6GB (30 days) at 2500 naira');
//                 let paySixGig = 2500;
//                 let sixGig = 6144;
//                 console.log('Press 6 for 12GB (30 days) at 3500 naira');
//                 let payTwelveGig = 3500;
//                 let twelveGig = 12288;
//                 console.log('Press 7 for 20GB (30 days) at 5000 naira');
//                 let payTwentyGig = 5000;
//                 let twentyGig = 20480; 
//                 let choice = parseInt(prompt("What's your choice? : "));
//                 if (choice == 1){
//                     if (payThreeGig > user.airtime){
//                         console.log("You have insufficient airtime to purchace data from");
//                         next();
//                     }
//                     else {
//                         console.clear();
//                         userDetails.push(user.data += threeGig);
//                         userDetails.push(user.airtime -= payThreeGig);
//                         userDetails.push(user.bankStatement.push(`You bought ${threeGig}KB data for ${payThreeGig} Naira. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                         fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                         console.log(`You bought ${threeGig}KB data for ${payThreeGig} Naira, now your updated airtime is ${user.airtime} Naira`);
//                         next();
//                     }
//                 }
//                 else if (choice == 2){
//                     console.clear();
//                     if (payTwoPointFiveGig > user.airtime){
//                         console.log("You have insufficient airtime to purchace data from");
//                         next();
//                     }
//                     else {
//                         userDetails.push(user.data += twoPointFiveGig);
//                         userDetails.push(user.airtime -= payTwoPointFiveGig);
//                         userDetails.push(user.bankStatement.push(`You bought ${twoPointFiveGig}KB for ${payTwoPointFiveGig} Naira. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                         fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                         console.log(`You bought ${twoPointFiveGig}KB for ${payTwoPointFiveGig} Naira, now your updated airtime is ${user.airtime} Naira`);
//                         next();
//                     }
//                 }
//                 else if (choice == 3){
//                     console.clear();
//                     if (payTwoGig > user.airtime){
//                         console.log("You have insufficient airtime to purchace data from");
//                         next();
//                     }
//                     else {
//                         userDetails.push(user.data += twoGig);
//                         userDetails.push(user.airtime -= payTwoGig);
//                         userDetails.push(user.bankStatement.push(`You bought ${twoGig}KB data for ${payTwoGig} Naira. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                         fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                         console.log(`You bought ${twoGig}KB data for ${payTwoGig} Naira, now your updated airtime is ${user.airtime} Naira`);
//                         next();
//                     }
//                 }
//                 else if (choice == 4){
//                     console.clear();
//                     if (payOneGig > user.airtime){
//                         console.log("You have insufficient airtime to purchace data from");
//                         next();
//                     }
//                     else {
//                         userDetails.push(user.data += oneGig);
//                         userDetails.push(user.airtime -= payOneGig);
//                         userDetails.push(user.bankStatement.push(`You bought ${oneGig}KB data for ${payOneGig} Naira. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                         fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                         console.log(`You bought ${oneGig}KB data for ${payOneGig} Naira, now your updated airtime is ${user.airtime} Naira`);
//                         next();
//                     }
//                 }
//                 else if (choice == 5){
//                     console.clear();
//                     if (paySixGig > user.airtime){
//                         console.log("You have insufficient airtime to purchace data from");
//                         next();
//                     }
//                     else {
//                         userDetails.push(user.data += sixGig);
//                         userDetails.push(user.availableBal -= paySixGig);
//                         userDetails.push(user.bankStatement.push(`You bought ${sixGig}KB data for ${paySixGig} Naira. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                         fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                         console.log(`You bought ${sixGig}KB data for ${paySixGig} Naira, now your updated airtime is ${user.airtime} Naira`);
//                         next();
//                     }
//                 }
//                 else if (choice == 6){
//                     console.clear();
//                     if (payTwelveGig > user.airtime){
//                         console.log("You have insufficient airtime to purchace data from");
//                         next();
//                     }
//                     else {
//                         userDetails.push(user.data += twelveGig);
//                         userDetails.push(user.availableBal -= payTwelveGig);
//                         userDetails.push(user.bankStatement.push(`You bought ${twelveGig}KB at ${payTwelveGig} Naira. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                         fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                         console.log(`You bought ${twelveGig}KB data for ${payTwelveGig} Naira, now your updated airtime is ${user.airtime} Naira`);
//                         next();
//                     }
//                 }
//                 else if (choice == 7){
//                     console.clear();
//                     if (payTwentyGig > user.airtime){
//                         console.log("You have insufficient airtime to purchace data from");
//                         next();
//                     }
//                     else {
//                         userDetails.push(user.data += twentyGig);
//                         userDetails.push(user.availableBal -= payTwentyGig);
//                         userDetails.push(user.bankStatement.push(`You bought ${twentyGig}KB at ${payTwentyGig} Naira. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                         fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                         console.log(`You bought ${twentyGig}KB data for ${payTwentyGig} Naira, now your updated airtime is ${user.airtime} Naira`);
//                         next();
//                     }
//                 }
//                 else{
//                     console.log("You didn't select a number betwen 1 - 7");
//                     dataPurchase();   
//                 }
//             }
//         }
//         else if (choice == 2){ 
//             console.clear();
//             dataTransfer();
//             function dataTransfer(){
//                 let foreignPhoneNumber = parseInt(prompt("Enter recipient's phone number : "));
//                 let foreignUser = userDetails.find(info => info.phoneNumber == foreignPhoneNumber && info.isLoggedIn == false );
//                 if (foreignUser){
//                     console.log(`user ${foreignUser.fullName} with phone number ${foreignUser.phoneNumber} found!`);
//                     let dataTransfer = parseFloat(prompt("Enter data to transfer : "));
//                     if (dataTransfer > user.data){
//                         console.log("You have insufficient data");
//                         next();
//                     }
//                     else if (dataTransfer <= user.data && dataTransfer >= 100){
//                         userDetails.push(foreignUser.data += dataTransfer);
//                         userDetails.push(user.data -= dataTransfer);
//                         userDetails.push(user.bankStatement.push(`You transfered ${dataTransfer}KB data to ${foreignUser.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                         userDetails.push(foreignUser.bankStatement.push(`You recieved ${dataTransfer}KB data from ${user.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                         fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                         console.log(`You transfered ${dataTransfer}KB data to ${foreignUser.fullName}, now your updated data is ${user.data}KB`);
//                         next();
//                     }
//                     else {
//                         console.log("Invalid input, try again!");
//                         next();
//                     }
//                 }
//                 else {
//                     console.log("Cannot find any user that matches the phone number!");
//                     dataTransfer();
//                 }
//             }
//         }
//         else{
//             console.log("You didn't enter 1 or 2");
//             dataTransasction();   
//         }
//     } 
//     function next() {
//         console.log("Press 0 to perform mobile transaction again or\nPress 1 to return to main menu or\nPress 2 to logout");
//         let num = parseInt(prompt("what's your choice? : "));
//         if (num == 0) {
//             console.clear();
//             mobileTransaction(); 
//         }
//         else if (num == 1) {
//             console.clear();
//             performOperation();
//         } 
//         else if (num == 2)
//             logout();
//         else {
//             console.log("You didn't enter 0, 1 or 2");
//             next();
//         }
//     }
    
// }



// function deposit() {
//     console.clear();
//     const user = userDetails.find(info => info.isLoggedIn == true);
//     if (user) {
//         let amountDeposit = parseFloat(prompt("How much do you want to deposit? : "));
//         if (amountDeposit >= 1){
//             userDetails.push(user.availableBal += amountDeposit);
//             userDetails.push(user.bankStatement.push(`You deposited ${amountDeposit} Naira. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//             fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//             console.log(`You deposited ${amountDeposit} Naira, now your updated account balance is ${user.availableBal} Naira`);
//             next();
//         }
//         else{
//             console.log("You did not enter a valid number");
//             next();
//         }
//         function next() {
//             console.log("Press 0 to Deposit again or\nPress 1 to return to main menu or\nPress 2 to logout");
//             let num = parseInt(prompt("what's your choice? : "));
//             if (num == 0) {
//                 console.clear();
//                 deposit(); 
//             }
//             else if (num == 1) {
//                 console.clear();
//                 performOperation();
//             } 
//             else if (num == 2)
//                 logout();
//             else {
//                 console.log("You didn't enter 0, 1 or 2");
//                 next();
//             }
//         }
//     }    
// }


// function tranfer() {
//     console.clear();
//     const user = userDetails.find(info => info.isLoggedIn == true);
//     if (user) {
//         let input = prompt("Enter recipient's Account Number: ");
//         const foreignUser = userDetails.find(checkInput => checkInput.accountNumber == input && checkInput.isLoggedIn == false);
//         if (foreignUser) {
//             console.log(`User ${foreignUser.fullName} with account number ${foreignUser.accountNumber} found!`);
//             actualTransfer();
//             function actualTransfer(){
//                 console.log("Your daily transfer limit is 2000000 Naira");
//                 console.log("The highest amount you can transfer at a time 1000000 Naira");
//                 let amounttransfer = parseFloat(prompt("How much do you want to transfer? : "));
//                 if (amounttransfer <= user.availableBal){
//                     if(user.dailyTransfer + amounttransfer > 2000000){
//                         console.log("You have exceeded your daily transfer limit");
//                         next();
//                     }
//                     else if (amounttransfer > 0 && amounttransfer < 10000){
//                         console.log("You will be charged 10 naira as transfer charges");
//                         let password = prompt("Enter password to make transfer : ");
//                         if (user.password == password){
//                             userDetails.push(user.dailyTransfer += amounttransfer);
//                             userDetails.push(user.availableBal -= 10);
//                             userDetails.push(user.availableBal -= amounttransfer);
//                             userDetails.push(foreignUser.availableBal += amounttransfer);
//                             userDetails.push(user.bankStatement.push(`You where charged 10 naira while transfering ${amounttransfer} Naira to ${foreignUser.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             userDetails.push(foreignUser.bankStatement.push(`You recieved ${amounttransfer} Naira from ${user.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                             console.log(`You transfered ${amounttransfer} Naira to ${foreignUser.fullName}, now your updated account balance is ${user.availableBal} Naira`);
//                             next();      
//                         }
//                         else {
//                             console.log("Incorrect password!");
//                             next();
//                         }
//                     }
//                     else if (amounttransfer >= 10000 && amounttransfer < 50000){
//                         console.log("You will be charged 25 naira as transfer charges");
//                         let password = prompt("Enter password to make transfer : ");
//                         if (user.password == password){
//                             userDetails.push(user.dailyTransfer += amounttransfer);
//                             userDetails.push(user.availableBal -= 25);
//                             userDetails.push(user.availableBal -= amounttransfer);
//                             userDetails.push(foreignUser.availableBal += amounttransfer);
//                             userDetails.push(user.bankStatement.push(`You where charged 25 naira while transfering ${amounttransfer} Naira to ${foreignUser.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             userDetails.push(foreignUser.bankStatement.push(`You recieved ${amounttransfer} Naira from ${user.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                             console.log(`You transfered ${amounttransfer} Naira to ${foreignUser.fullName}, now your updated account balance is ${user.availableBal} Naira`);
//                             next();      
//                         }
//                         else {
//                             console.log("Incorrect password!");
//                             next();
//                         }
//                     }
//                     else if (amounttransfer >= 50000 && amounttransfer < 100000){
//                         console.log("You will be charged 50 naira as transfer charges");
//                         let password = prompt("Enter password to make transfer : ");
//                         if (user.password == password){
//                             userDetails.push(user.dailyTransfer += amounttransfer);
//                             userDetails.push(user.availableBal -= 50);
//                             userDetails.push(user.availableBal -= amounttransfer);
//                             userDetails.push(foreignUser.availableBal += amounttransfer);
//                             userDetails.push(user.bankStatement.push(`You where charged 50 naira while transfering ${amounttransfer} Naira to ${foreignUser.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             userDetails.push(foreignUser.bankStatement.push(`You recieved ${amounttransfer} Naira from ${user.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                             console.log(`You transfered ${amounttransfer} Naira to ${foreignUser.fullName}, now your updated account balance is ${user.availableBal} Naira`);
//                             next();      
//                         }
//                         else {
//                             console.log("Incorrect password!");
//                             next();
//                         }
//                     }
//                     else if (amounttransfer >= 100000 && amounttransfer < 500000){
//                         console.log("You will be charged 100 naira as transfer charges");
//                         let password = prompt("Enter password to make transfer : ");
//                         if (user.password == password){
//                             userDetails.push(user.dailyTransfer += amounttransfer);
//                             userDetails.push(user.availableBal -= 100);
//                             userDetails.push(user.availableBal -= amounttransfer);
//                             userDetails.push(foreignUser.availableBal += amounttransfer);
//                             userDetails.push(user.bankStatement.push(`You where charged 100 naira while transfering ${amounttransfer} Naira to ${foreignUser.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             userDetails.push(foreignUser.bankStatement.push(`You recieved ${amounttransfer} Naira from ${user.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                             console.log(`You transfered ${amounttransfer} Naira to ${foreignUser.fullName}, now your updated account balance is ${user.availableBal} Naira`);
//                             next();      
//                         }
//                         else {
//                             console.log("Incorrect password!");
//                             next();
//                         }
//                     }
//                     else if (amounttransfer >= 500000 && amounttransfer < 1000000){
//                         console.log("You will be charged 150 naira as transfer charges");
//                         let password = prompt("Enter password to make transfer : ");
//                         if (user.password == password){
//                             userDetails.push(user.dailyTransfer += amounttransfer);
//                             userDetails.push(user.availableBal -= 150);
//                             userDetails.push(user.availableBal -= amounttransfer);
//                             userDetails.push(foreignUser.availableBal += amounttransfer);
//                             userDetails.push(user.bankStatement.push(`You where charged 150 naira while transfering ${amounttransfer} Naira to ${foreignUser.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             userDetails.push(foreignUser.bankStatement.push(`You recieved ${amounttransfer} Naira from ${user.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                             console.log(`You transfered ${amounttransfer} Naira to ${foreignUser.fullName}, now your updated account balance is ${user.availableBal} Naira`);
//                             next();      
//                         }
//                         else {
//                             console.log("Incorrect password!");
//                             next();
//                         }
//                     }
//                     else if (amounttransfer == 1000000){
//                         console.log("You will be charged 200 naira as transfer charges");
//                         let password = prompt("Enter password to make transfer : ");
//                         if (user.password == password){
//                             userDetails.push(user.dailyTransfer += amounttransfer);
//                             userDetails.push(user.availableBal -= 200);
//                             userDetails.push(user.availableBal -= amounttransfer);
//                             userDetails.push(foreignUser.availableBal += amounttransfer);
//                             userDetails.push(user.bankStatement.push(`You where charged 200 naira while transfering ${amounttransfer} Naira to ${foreignUser.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             userDetails.push(foreignUser.bankStatement.push(`You recieved ${amounttransfer} Naira from ${user.fullName}. Date : ${new Date().toLocaleDateString('en-GB')} and Time : ${new Date().toLocaleTimeString()}`));
//                             fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                             console.log(`You transfered ${amounttransfer} Naira to ${foreignUser.fullName}, now your updated account balance is ${user.availableBal} Naira`);
//                             next();      
//                         }
//                         else {
//                             console.log("Incorrect password!");
//                             next();
//                         }
//                     }
//                     else {
//                         console.log("You can't transfer more than 1000000 naira at once");
//                         next();
//                     }                           
//                 }
//                 else if (amounttransfer > user.availableBal){
//                     console.log(`You have insufficient funds!`);
//                     next();
//                 }
//                 else {
//                     console.log("You did not enter a valid number");
//                     tranfer();
//                 }
//                 function next() {
//                 console.log("Press 0 to transfer again or\nPress 1 to return to main menu or\nPress 2 to logout");
//                 let num = parseInt(prompt("what's your choice? : "));
//                     if (num == 0) {
//                         console.clear();
//                         tranfer(); 
//                     }      
//                     else if (num == 1) {
//                         console.clear();
//                         performOperation();
//                     } 
//                     else if (num == 2)
//                         logout();
//                     else {
//                         console.log("You didn't enter 0, 1 or 2");
//                         next();
//                     }
//                 }
//             }
//         } 
//         else{
//             console.log("Account number not found!");
//             next();
//             function next() {
//             console.log("Press 0 to transfer again or\nPress 1 to return to main menu or\nPress 2 to logout");
//             let num = parseInt(prompt("what's your choice? : "));
//                 if (num == 0) {
//                     console.clear();
//                     tranfer(); 
//                 }      
//                 else if (num == 1) {
//                     console.clear();
//                     performOperation();
//                 } 
//                 else if (num == 2)
//                     logout();
//                 else {
//                     console.log("You didn't enter 0, 1 or 2");
//                     next();
//                 }
//             }
//         }
        
//     }       
// }


// function bankStatement() {
//     console.clear();
//     const user = userDetails.find(info => info.isLoggedIn == true);
//     if (user) {
//         if (user.bankStatement.length == 0){
//             console.log(`No transaction has been made yet!`);
//             next();
//         }
//         else {
//             console.log(`view your bank statement below`);
//             user.bankStatement.forEach(info => console.log(info));
//             next();
//         }
//     }
//     function next() {
//         console.log("Press 1 to return to main menu or\nPress 2 to logout");
//         let num = parseInt(prompt("what's your choice? : "));
//         if (num == 1) {
//             console.clear();
//             performOperation();
//         } 
//         else if (num == 2)
//             logout();
//         else {
//             console.log("You didn't enter 1 or 2");
//             next();
//         }
//     }
    
// }

// function changePassword() {
//     console.clear();
//     const user = userDetails.find(info => info.isLoggedIn == true);
//     if (user) {
//         let oldPassword = prompt("Enter old password : ");
//         if (oldPassword == user.password){
//             let newPassword = prompt("Enter new 4-digit password : ");
//             if(isNaN(newPassword) || newPassword == ''){
//                 console.log("It's either you didn't enter a VALID NUMBER or you left the FIELD BLANK");       
//                 changePassword();                                       
//             }
//             else if(newPassword.length != 4){ 
//                 console.log("You have to enter a 4-digit number password");
//                 changePassword();
//             }   
//             else{
//                 user.password = newPassword;
//                 userDetails.push(user.password);
//                 console.log("Your password has been successfully changed");
//                 fs.writeFileSync('database.json', JSON.stringify(userDetails, null, 2));
//                 next();
//             }
//         }
//         else {
//             console.log("Your old password is incorrect");
//             next();
//         }
//     }
//     function next() {
//         console.log("Press 1 to return to main menu or\nPress 2 to logout");
//         let num = parseInt(prompt("what's your choice? : "));
//         if (num == 1) {
//             console.clear();
//             performOperation();
//         } 
//         else if (num == 2)
//             logout();
//         else {
//             console.log("You didn't enter 1 or 2");
//             next();
//         }
//     }

// }


// function airDataBal(){
//     console.clear();
//     const user = userDetails.find(info => info.isLoggedIn == true);
//     if (user) {
//         console.log(`Your airtime balance is ${user.airtime} naira\nYour data balance is ${user.data}kb`);
//         next();
//     }
//     function next() {
//         console.log("Press 1 to return to main menu or\nPress 2 to logout");
//         let num = parseInt(prompt("what's your choice? : "));
//         if (num == 1) {
//             console.clear();
//             performOperation();
//         } 
//         else if (num == 2)
//             logout();
//         else {
//             console.log("You didn't enter 1 or 2");
//             next();
//         }
//     }
// }



// function viewProfile(){
//     console.clear();
//     const user = userDetails.find(info => info.isLoggedIn == true);
//     if (user) {
//         console.log("View your profile below");
//         console.log(`Name : ${user.fullName}`);
//         console.log(`Gender : ${user.gender}`);
//         console.log(`Date of Birth : ${user.dateOfBirth}`);
//         console.log(`Phone Number : ${user.phoneNumber}`);
//         console.log(`Home Address : ${user.homeAddress}`);
//         console.log(`Email Address : ${user.emailAddress}`);
//         console.log(`Account Number : ${user.accountNumber}`);
//         next();
//     }
//     function next() {
//         console.log("Press 1 to return to main menu or\nPress 2 to logout");
//         let num = parseInt(prompt("what's your choice? : "));
//         if (num == 1) {
//             console.clear();
//             performOperation();
//         } 
//         else if (num == 2)
//             logout();
//         else {
//             console.log("You didn't enter 1 or 2");
//             next();
//         }
//     }
// }





let a = 2
// a = a + 3
a +=3

console.log(a)



       
    


    










