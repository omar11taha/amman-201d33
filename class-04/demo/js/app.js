'use strict';

// functions

/*

Its block of code that does something 

invoke

why:

-Reusability

-make break it into smaller.


how:

1)function Declaration:
you can use it before it was given a value

function funcName(parameters){

    code..
    return output
}

funcName(arguments);

*/


// function welcomeMessage(userName){
    
//     alert('hello welcome to our page '+userName);
// }

// welcomeMessage('Ahmad');
// welcomeMessage('alaa');

// global scoped variable
// let userInput=prompt('whats your name');

// function getName(userName) {
//     // locally scoped 
//     let output='hello '+ userName;
//     let output2='goodbye';
    
//     return [output ,output2];
    
//     console.log('hello');


// }

// // alert(output);
// console.log('all of the values',getName(userInput)); 
// console.log('first',getName(userInput)[0]); 
// console.log('second',getName(userInput)[1]); 

// alert(sum(3,4));

// function sum(num1,num2) {
//     let result=num1+num2;
//     let squareNum2=num2**2
//     return [num1,num2,result,squareNum2];
// }

// console.log(sum(5,6));

// console.log('first num',sum(5,6)[0]);
// console.log('second num',sum(5,6)[1]);
// console.log('sum',sum(5,6)[2]);

// console.log('square',sum(5,6)[3]);




////////////////////////////////////

// function Expressions
/*
you cant use it before it was given a value
let varName=function(param){
    code..
    return
}

varName(args);

*/


// console.log(getAge(1990)); 

// let getAge=function (year) {
//     let output=2021-year;
//     return output;
// }

// console.log(getAge(2000)); 
// console.log(getAge(1995)); 


// let car='bmw';

// console.log(car);
// var car='bmw';


// Immediatly invoked function

// (function (userName) {
//     console.log('hello '+userName);
// })('ahmad')



// Scopes:

// globaly scoped variable

// let firstName='ahmad';

// function getFullName() {
//     // locally scoped variable 
//     let lastName='jihad';
//     return lastName;

//     // alert('hello '+firstName +lastName);
// }
// let test=getFullName();

// console.log(lastName);

// alert('hello '+test);

