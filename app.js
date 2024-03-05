"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Jéssica';
/* userName = userInput; This line shows error because userInput is a
mutable variable that can receive anything. In this case we can't guarantee
that it'll always be a string and so assing it to another string variable.
To do it we need to do at least one validation fisrt */
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { errorMessage: message, errorCode: code };
}
generateError("Internal error", 500);
