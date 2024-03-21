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

//Project List Class - Rendered list in a certain place of application
class ProjectList{
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement; //element which will host other elements inside of it, in this case, the app div
    element: HTMLElement; // the element which will be hosted, in this case the list, in this case, the section element

    constructor(private type: 'active' | 'finished' | 'approved' | 'reproved' | 'toreview' | 'inanalysis'){
        this.templateElement = document.getElementById('project-list')! as  HTMLTemplateElement;//getting access to template
        this.hostElement = document.getElementById('app')! as HTMLDivElement; //getting access to the div 

        const importedNode = document.importNode(this.templateElement.content,true);//importing element 
        this.element = importedNode.firstElementChild as HTMLElement;//storing element (section)
        this.element.id = `${this.type}-projects`; //the id here is dynamic because we will have more than one list of projects
        this.attach();
        this.renderContent();  
    }

    private renderContent(){//for each instance of the class will set id and H2 title for each list
        const listId = `${this.type}-projects-list`;//to inject dynamic content
        this.element.querySelector('ul')!.id = listId;// each list will have its own id with name type + -projects-list, for example active-projects-list
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS ';// list title   

    }

    /**
     This function attach the element inside the host element using as reference the position
     beforebegin, before target element, in this case the target element is div, so it would be before it
     afterbegin, just inside the target element, in this case the div
     beforeend, just inside the target element, after its last child.
     afterend, after the target element ifself
     */
    private attach(){
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
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
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
// const approvedProjectList = new ProjectList('approved');
// const reprovedProjectList = new ProjectList('reproved');
// const toReviewProjectList = new ProjectList('toreview');
// const inAnalysisProjectList = new ProjectList('inanalysis');