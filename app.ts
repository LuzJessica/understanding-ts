class Department {
    name: string;

    constructor (n: string){
        this.name = n;
    }
}

const hr = new Department('Human Resources');
console.log(hr);