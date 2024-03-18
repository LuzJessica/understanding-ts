class DataStorage<T>{
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        if(this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
const numberStorage = new DataStorage<number>();
const objectStorage = new DataStorage<object>();

textStorage.addItem('Jéssica');
numberStorage.addItem(1);
objectStorage.addItem({role: 'QA'});

console.log(textStorage.getItems());
console.log(numberStorage.getItems());
console.log(objectStorage.getItems());
