interface errorContainer{
    [prop:string]:string;
}

const errorBag = {
    email: 'Not a valid email',
    username: 'Must start with uppercase letter',
    password: 'Must include letters, numbers and special characters'
};

console.log(errorBag.email);
console.log(errorBag.username);
console.log(errorBag.password);