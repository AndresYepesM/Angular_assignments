class Animal{
    name: string;

    constructor(name){
        this.name = name
    }
    sayName(){
        return `he/she is ${this.name}`;
    }
}

class Dog extends Animal{
    age: number;
    constructor(name:string, age_aprox:number){
        super(name);
        this.age=age_aprox;
    }
    sayName(){
        return `he/she is ${this.name} and the age aprox is ${this.age}`;
    }
}

let a = new Dog('Sparky', 4);
console.log(a.sayName());