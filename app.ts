function merge <T extends object, U extends Object>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Jéssica', hobbies:['Sports'] },{age:32});
console.log(mergeObj);