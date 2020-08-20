"use strict";

const numberButtons = document.querySelectorAll('.number'); //numbers
const operationButtons = document.querySelectorAll('.operator'); //operators
const result = document.querySelector('#result'); // equals button
const displayCurrent = document.querySelector('.input'); //input/output
const clear = document.querySelector('#clear'); //clear
const delete1 = document.querySelector('#clear');
//let numberArray = [];
//let inputArray = [];
//let operatorArray = [];

let numberOperatorArray = [];



// Numbers
numberButtons.forEach(function (number) {
    number.addEventListener('click', function(event) {
       numberOperatorArray.push(this.innerHTML)
        console.log(numberOperatorArray);
        displayCurrent.innerHTML += this.innerHTML;
    })
})

//Operators
operationButtons.forEach(function(operator) {
    operator.addEventListener('click', function(event) {
    numberOperatorArray.push(this.innerHTML);
    console.log(numberOperatorArray);
    displayCurrent.innerHTML += this.innerHTML;
    })
})

delete1.addEventListener("click", function(event)  {
    numberOperatorArray.pop()
    remove = [,]
    numberOperatorArray = numberOperatorArray.filter((element) => !remove.includes(element))
    displayCurrent.innerHTML = numberOperatorArray.join('');
    
})

// Equals
result.addEventListener("click", function(){
    let numbersStringHolder = "";
    let equalFunctionArray = [];
    for(let char of numberOperatorArray) {
        let numReg = /\d/;
        if (numReg.test(char) || char === '.') {
        numbersStringHolder += char;

        } else {
            equalFunctionArray = [...equalFunctionArray, Number(numbersStringHolder), char]
            numbersStringHolder = ""
        }
    }   
         equalFunctionArray = [...equalFunctionArray, Number(numbersStringHolder)];
        
        let multiply = equalFunctionArray.indexOf("*");
        while (multiply !== -1) {
            equalFunctionArray.splice(multiply -1, 3, equalFunctionArray[multiply -1] * equalFunctionArray[multiply + 1]);
            multiply = equalFunctionArray.indexOf("*");
        }

        let divide = equalFunctionArray.indexOf("/");
        while (divide !== -1) {
            equalFunctionArray.splice(divide -1, 3, equalFunctionArray[divide -1] / equalFunctionArray[divide + 1]);
            divide = equalFunctionArray.indexOf("/");
        }





        let add = equalFunctionArray.indexOf("+");
        while (add !== -1) {
            equalFunctionArray.splice(add-1, 3, equalFunctionArray[add-1] + equalFunctionArray[add + 1]);
            add = equalFunctionArray.indexOf("+");
            
        }
    
        let subtract = equalFunctionArray.indexOf("-");
        while (subtract !== -1) {
            equalFunctionArray.splice(subtract -1, 3, equalFunctionArray[subtract - 1] - equalFunctionArray[subtract + 1]);
            subtract = equalFunctionArray.indexOf("-");
            
        }
        numberOperatorArray = [...equalFunctionArray]
        input.innerHTML = numberOperatorArray[0].toFixed(4);


    });










//Clear
clear.addEventListener("click", function(clear) {
    displayCurrent.innerHTML = "";
    numberOperatorArray = [];
});