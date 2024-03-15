//Option 1 of casting type
const userInputElement1 = <HTMLInputElement>document.getElementById('user-input1')!;
userInputElement1.value = 'Hi there 1...';
//Option 2
const userInputElement2 = document.getElementById('user-input2')! as HTMLInputElement;
userInputElement2.value = 'Hi there 2...';