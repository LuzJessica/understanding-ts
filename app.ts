const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number,string] //tuple 
} = {
    name: 'Jéssica',
    age: 31,
    hobbies: ['Sports','Cooking','Play games'],
    role: [1,'QA']
};

console.log(person.role);