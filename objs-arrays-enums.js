"use strict";
var User;
(function (User) {
    User[User["ADMIN"] = 0] = "ADMIN";
    User[User["READ_ONLY"] = 1] = "READ_ONLY";
    User[User["AUTHOR"] = 2] = "AUTHOR";
})(User || (User = {}));
;
const person = {
    name: 'Jéssica',
    age: 31,
    hobbies: ['Sports', 'Cooking', 'Play games'],
    role: [1, 'QA'],
    user: User.ADMIN
};
console.log(person.user);
