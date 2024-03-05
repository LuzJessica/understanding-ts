"use strict";
console.log("Learning TypeScript!");
function add1(n1, n2, phrase, showResult) {
    const result = n1 + n2;
    if (result) {
        console.log(resultPhrase + result);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 3.5;
const printResult = true;
const resultPhrase = "Result is: ";
add1(number1, number2, resultPhrase, printResult);
