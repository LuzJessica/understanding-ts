interface Person{
    name:string;
    age:number;

    greet(phrase:string):void;
}

let user: Person;
user = {
    name: 'Jéssica',
    age: 31,

    greet(phrase:string){
        console.log(phrase + ' ' + this.name);
    }
}

user.greet('Welcome');