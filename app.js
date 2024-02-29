console.log("Learning TypeScript!");
function add(n1, n2, phrase, showResult) {
    var result = n1 + n2;
    if (result) {
        console.log(resultPhrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 3.5;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, resultPhrase, printResult);
