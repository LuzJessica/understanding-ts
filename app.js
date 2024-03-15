"use strict";
// const add = (a:number, b: string) => string;
// const add = (a:string, b: number) => string;
// const add = (a:string, b: string) => string;
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
