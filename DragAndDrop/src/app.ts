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

@autobind
private submitHandler(event: Event){
    event.preventDefault();
    console.log(this.titleInput.value);
    console.log(this.descriptionInput.value);
    console.log(this.peopleInput.value);
}

private configure(){
    this.element.addEventListener('submit', this.submitHandler)
}

private attach(){
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const projectInput = new ProjectInput();