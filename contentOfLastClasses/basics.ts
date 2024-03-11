console.log("Learning TypeScript!")

function add1(n1: number, n2: number, phrase: string, showResult: boolean){
    const result = n1+n2;
    if(result){
        console.log(resultPhrase + result);    
    }else {
        return n1+n2;
    }
}

const number1 = 5;
const number2 = 3.5;
const printResult = true;
const resultPhrase = "Result is: ";

add1(number1,number2,resultPhrase, printResult);