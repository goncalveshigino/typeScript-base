

function classDecorators<T extends { new (...args:any[]): {} }>(
    constructor: any
){
    return class extends constructor {
        newProperty = 'New roperty'; 
        hello = 'override';
    }
}

//@classDecorators()
export class SuperClass {

    public myProperty: string = 'Abc123';

    print() {
        console.log('Hello world');
    }
} 


console.log( SuperClass ); 

const myClass = new SuperClass();
console.log(myClass);