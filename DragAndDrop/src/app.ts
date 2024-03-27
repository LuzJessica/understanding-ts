//Project Status
enum ProjectStatus { ACTIVE, FINISHED }

//Project Type
class Project{
    constructor(
        public id: string, 
        public title: string, 
        public description: string, 
        public people: number, 
        public status: ProjectStatus){

    }
}

type Listener = (items: Project[]) => void;

//Project State Management
class ProjectState{
    private projects: Project[] = [];//creates an array to receive the projects
    private listeners: Listener[] = []; //it's an array of functions to be executed always something change, in this case, always new project is added
    private static instance: ProjectState;
    
    private constructor(){}

    static getInstance(){
        if(this.instance){
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addListener(listenerFn: Listener){
        this.listeners.push(listenerFn);
    }

    addProject(title: string, description: string, numOfPeople: number){//each position of this array will contain an object with the properties bellow
        const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.ACTIVE);
        this.projects.push(newProject);//adding the object to the array
        for(const listenerFn of this.listeners){
            listenerFn(this.projects.slice());//return a copy of a section of the array, not the original
        }
    }
}

const projectState = ProjectState.getInstance();
  
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
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished' | 'approved' | 'reproved' | 'toreview' | 'inanalysis'){
        this.templateElement = document.getElementById('project-list')! as  HTMLTemplateElement;//getting access to template
        this.hostElement = document.getElementById('app')! as HTMLDivElement; //getting access to the div 
        this.assignedProjects = [];

        const importedNode = document.importNode(this.templateElement.content,true);//importing element 
        this.element = importedNode.firstElementChild as HTMLElement;//storing element (section)
        this.element.id = `${this.type}-projects`; //the id here is dynamic because we will have more than one list of projects
        projectState.addListener((projects: Project[]) => {
            this.assignedProjects = projects;
            this.renderProjects();
        });
        this.attach();
        this.renderContent();  
    }

    private renderProjects(){
        const listEl = document.getElementById(`${this.type}-projects-list`)! as HTMLUListElement;
        for(const prjItem of this.assignedProjects){
            const listItem = document.createElement('li');
            listItem.textContent = prjItem.title;
            listEl.appendChild(listItem);
        }
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
        projectState.addProject(title, desc, people);
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