interface Greetable{
    readonly name:string;
    greet(phrase:string):void;
}

class Person implements Greetable{
    name:string;
    age = 32;

    constructor (n:string){
        this.name = n;
    }

    greet(phrase: string) {
        console.log(phrase+ ' ' + this.name);
    }
}

let user: Greetable;
user = new Person('Jéssica'); 
console.log(user);
user.greet('Welcome');