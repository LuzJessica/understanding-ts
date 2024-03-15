type Combinable = string | number;


function add(a:number, b: number):number;
function add(a:number, b: string):string;
function add(a:string, b: number):string;
function add(a:string, b: string):number;
// const add = (a:number, b: string) => string;
// const add = (a:string, b: number) => string;
// const add = (a:string, b: string) => string;
function add(a:Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a+b;
}
