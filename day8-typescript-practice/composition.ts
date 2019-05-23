function applyMixins(derivedCtor: any, baseCtors: any[]){
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

// 'Define individual classes that define behaviour'
// 'instead of trying to encapsulate everything in single class'

class CanSayHi {
  name;

  sayHi() {
    return `Hello ${this.name}`;
  }
}

class HasSuperPower {
  heroName;

  superpower() {
    return `${this.heroName} lit`;
  }
}

// 'Now we are going to implement multiple classes'
class SuperHero implements CanSayHi, HasSuperPower {

  heroName;
  constructor(public name) {
    this.heroName = `SUPER ${name}`;
  }

  sayHi: () => string;
  HasSuperPower: () => string;
}

applyMixins(SuperHero, [CanSayHi, HasSuperPower]);

const ts = new SuperHero('TypeScript');

console.log(ts.superpower());
