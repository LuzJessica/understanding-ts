function add(n1, n2) {
    return n1 + n2;
}
function addString(str) {
    return str;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combinedValues;
combinedValues = add;
combinedValues = addString; /* It returns error because the function
addString doesn't match the function defined for the variable
combinedValue. It has only one parameter and it's a string. And the variable
expect 2 parameters and both should be numbers*/
console.log(combinedValues(9, 8));
addAndHandle(20, 20, function (result) {
    console.log(result);
    return result;
});
