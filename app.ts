interface AddFn{
    (a:number, b:number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1+n2;
};

interface Named{
    readonly name:string;
}

interface Greetable extends Named{
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