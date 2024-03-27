"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length > validatableInput.minLength;
    }
    if (validatableInput.minLength != null &&
        typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length > validatableInput.minLength;
    }
    if (validatableInput.maxLength != null &&
        typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length < validatableInput.maxLength;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value > validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value < validatableInput.max;
    }
    return isValid;
}
//Bind decorator
function autobind(_, // the _ meand that I know that this property will not be used but I need to have as parameter
_2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFunc = originalMethod.bind(this);
            return boundFunc;
        }
    };
    return adjDescriptor;
}
//Project List Class - Rendered list in a certain place of application
class ProjectList {
    constructor(type) {
        this.type = type;
        this.templateElement = document.getElementById('project-list'); //getting access to template
        this.hostElement = document.getElementById('app'); //getting access to the div 
        const importedNode = document.importNode(this.templateElement.content, true); //importing element 
        this.element = importedNode.firstElementChild; //storing element (section)
        this.element.id = `${this.type}-projects`; //the id here is dynamic because we will have more than one list of projects
        this.attach();
        this.renderContent();
    }
    renderContent() {
        const listId = `${this.type}-projects-list`; //to inject dynamic content
        this.element.querySelector('ul').id = listId; // each list will have its own id with name type + -projects-list, for example active-projects-list
        this.element.querySelector('h2').textContent = this.type.toUpperCase() + ' PROJECTS '; // list title   
    }
    /**
     This function attach the element inside the host element using as reference the position
     beforebegin, before target element, in this case the target element is div, so it would be before it
     afterbegin, just inside the target element, in this case the div
     beforeend, just inside the target element, after its last child.
     afterend, after the target element ifself
     */
    attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);
    }
}
//Project Input Class
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById('project-input');
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleInput = this.element.querySelector('#title');
        this.descriptionInput = this.element.querySelector('#description');
        this.peopleInput = this.element.querySelector('#people');
        this.configure();
        this.attach();
    }
    gatherUserInput() {
        const enteredTitle = this.titleInput.value;
        const enteredDescription = this.descriptionInput.value;
        const enteredPeople = this.peopleInput.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        };
        const peopleValidatable = {
            value: +enteredPeople, //+ because enteredPeople is a number
            required: true,
            min: 1,
            max: 5
        };
        if (!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
            alert('Invalid input, please try again!');
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople]; // The + converts string in number. We need to do it because tuple is expecting number but .value() always return string
        }
    }
    clearInputs() {
        this.titleInput.value = '';
        this.descriptionInput.value = '';
        this.peopleInput.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        const userInput = this.gatherUserInput(); //receives the return of gatherUserInput method. Tuple or void
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput; //desctructuring arrays concept
            console.log(title, desc, people);
            this.clearInputs();
        }
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
__decorate([
    autobind
], ProjectInput.prototype, "submitHandler", null);
const projectInput = new ProjectInput();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
// const approvedProjectList = new ProjectList('approved');
// const reprovedProjectList = new ProjectList('reproved');
// const toReviewProjectList = new ProjectList('toreview');
// const inAnalysisProjectList = new ProjectList('inanalysis');
