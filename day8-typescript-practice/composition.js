function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
// 'Define individual classes that define behaviour'
// 'instead of trying to encapsulate everything in single class'
var CanSayHi = /** @class */ (function () {
    function CanSayHi() {
    }
    CanSayHi.prototype.sayHi = function () {
        return "Hello " + this.name;
    };
    return CanSayHi;
}());
var HasSuperPower = /** @class */ (function () {
    function HasSuperPower() {
    }
    HasSuperPower.prototype.superpower = function () {
        return this.heroName + " lit";
    };
    return HasSuperPower;
}());
// 'Now we are going to implement multiple classes'
var SuperHero = /** @class */ (function () {
    function SuperHero(name) {
        this.name = name;
        this.heroName = "SUPER " + name;
    }
    return SuperHero;
}());
applyMixins(SuperHero, [CanSayHi, HasSuperPower]);
var ts = new SuperHero('TypeScript');
console.log(ts.superpower());
