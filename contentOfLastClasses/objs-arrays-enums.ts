
enum User {ADMIN, READ_ONLY, AUTHOR};
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string]; //tuple 
    user: User
} = {
    name: 'Jéssica',
    age: 31,
    hobbies: ['Sports','Cooking','Play games'],
    role: [1,'QA'],
    user: User.ADMIN
};

console.log(person.user);