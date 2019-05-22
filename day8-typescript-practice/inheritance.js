class Human {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hello, ${this.name}`;
    }
}
const human1 = new Human('Mayur');
console.log(human1.sayHi());
class SuperHuman extends Human {
    constructor(name) {
        super(name);
        this.heroName = `Hero ${name}`;
    }
    superpower() {
        return `${this.heroName} hits sixes`;
    }
}
const rahul = new SuperHuman("Rahul");
console.log(rahul.superpower());
//Calling method of superclass
console.log(rahul.sayHi());
