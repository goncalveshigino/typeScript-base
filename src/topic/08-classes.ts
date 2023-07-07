


export class Person {

    constructor( 
        public firstName: string, 
        public lastName: string,
        private address?: string
    ){}

}


// export class Hero extends Person{

//     constructor(
//         public alterEgo: string, 
//         public age: number, 
//         public readlName: string
//     ){
//         super(readlName, 'New York');
//     }
    
// }

export class Hero {

  

    constructor(
        public alterEgo: string, 
        public age: number, 
        public readlName: string, 
        public person: Person,
    ){}
    
}


const tony = new Person('Tony','Start','New York');


const ironman = new Hero('Ironman',45,'Tony', tony); 

console.log(ironman);


