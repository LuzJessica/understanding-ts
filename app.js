"use strict";
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
const numberStorage = new DataStorage();
const objectStorage = new DataStorage();
textStorage.addItem('Jéssica');
numberStorage.addItem(1);
objectStorage.addItem({ role: 'QA' });
console.log(textStorage.getItems());
console.log(numberStorage.getItems());
console.log(objectStorage.getItems());
