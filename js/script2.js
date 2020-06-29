class Person {
    constructor(name, lastname, age, height) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.height = height;
    }
    sayHi(fn) {
        var { name, lastname } = this;
        console.log(`hi mi name is ${this.name} ${this.lastname} and a im ${this.age} years old and my height is ${this.height}`);
        if (fn) {
            fn(this.name, this.lastname);
        }
    }
    istall() {
        if (this.height > 1.80) {
            console.log('Yes, i am tall');
        } else {
            console.log('Fuck, i am not tall but a can sleep better in the car');
        }
    }
}


class Developer extends Person {
    constructor(name, lastname, age, heaight) {
        super(name, lastname, age, heaight);
    }

    sayHi(fn) {
        console.log('Hola soy dessarrolador');
        if (fn) {
            fn(this.name, this.lastname, true);
        }
    }
}

function respondHi(name, lastname, isDev) {
    console.log(`Buen dia ${name} ${lastname}`);
    if (isDev) {
        console.log(`Eres desarrollador nice`);
    }
}

var armando = new Person("Armando", "chindoy", "20", 1.90);
var juan = new Developer("Juan", "luna", "22", 1.70);

// console.log(armando.sayHi());
// console.log(armando.istall());