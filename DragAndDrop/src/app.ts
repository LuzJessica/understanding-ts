interface Validatable{
    value: string | number;
    required?: boolean; // ? means it's boolean or undefined
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
}

function validate(validatableInput: Validatable){
    let isValid = true;
    if(validatableInput.required){
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if(validatableInput.minLength != null && 
        typeof validatableInput.value === 'string'){
        isValid = isValid && validatableInput.value.length > validatableInput.minLength;
    }

    if(validatableInput.minLength != null && 
        typeof validatableInput.value === 'string'){
        isValid = isValid && validatableInput.value.length > validatableInput.minLength;
    }

    if(validatableInput.maxLength != null && 
        typeof validatableInput.value === 'string'){
        isValid = isValid && validatableInput.value.length < validatableInput.maxLength;
    }

    if(validatableInput.min != null &&
        typeof validatableInput.value === 'number'){
            isValid = isValid && validatableInput.value > validatableInput.min;
    }

    if(validatableInput.max != null &&
        typeof validatableInput.value === 'number'){
            isValid = isValid && validatableInput.value < validatableInput.max;
    }
    return isValid;
}

//Bind decorator
function autobind(
    _: any, // the _ meand that I know that this property will not be used but I need to have as parameter
    _2: string,
    descriptor: PropertyDescriptor
){
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get(){
        const boundFunc = originalMethod.bind(this);
        return boundFunc;
    }
  };
  return adjDescriptor; 
}

//Project Input Class
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;

    titleInput: HTMLInputElement;
    descriptionInput: HTMLInputElement;
    peopleInput: HTMLInputElement;

    constructor(){
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as HTMLElement;
        this.element.id = 'user-input';

        this.titleInput = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInput = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInput = this.element.querySelector('#people') as HTMLInputElement;
        this.configure();
        this.attach();

        
    }

private gatherUserInput(): [string, string, number] | void{ // return tuple or void
    
    const enteredTitle = this.titleInput.value;
    const enteredDescription = this.descriptionInput.value;
    const enteredPeople = this.peopleInput.value;

    const titleValidatable: Validatable = {
        value: enteredTitle,
        required: true
    }

    const descriptionValidatable: Validatable = {
        value: enteredDescription,
        required: true,
        minLength: 5
    }

    const peopleValidatable: Validatable = {
        value: +enteredPeople, //+ because enteredPeople is a number
        required: true,
        min: 1,
        max: 5
    }

    if(
        !validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)
        ){
        alert('Invalid input, please try again!');
        return;
        } else {
        return [enteredTitle, enteredDescription, +enteredPeople];// The + converts string in number. We need to do it because tuple is expecting number but .value() always return string
        }
    }

private clearInputs(){
    this.titleInput.value = '';
    this.descriptionInput.value = '';
    this.peopleInput.value = '';
    }

@autobind
private submitHandler(event: Event){
    event.preventDefault();
    const userInput = this.gatherUserInput(); //receives the return of gatherUserInput method. Tuple or void
    if(Array.isArray(userInput)){
        const [title, desc, people] = userInput;//desctructuring arrays concept
        console.log(title,desc,people);
        this.clearInputs();
        }
    }

private configure(){
    this.element.addEventListener('submit',this.submitHandler);
    }

private attach(){
    this.hostElement.insertAdjacentElement('afterbegin',this.element);
    }
}
const projectInput = new ProjectInput();