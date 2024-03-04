function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-string'){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(31,30,'as-number');
console.log(combinedAges);

const combinedNames = combine('Jéssica','Matheus','as-string');
console.log(combinedNames);

const combinedStringAges = combine('31','30','as-number');
console.log(combinedStringAges);