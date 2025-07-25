// in typescript, classes are a way to define a blueprint for creating objects
// they can have properties and methods, and can also inherit from other classes


// classes are defined using the `class` keyword
class Person {
    // properties can be defined using the `propertyName: type` syntax
    name: string;
    age: number;

    // constructor is a special method that is called when an instance of the class is created
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // methods can be defined using the `methodName(): returnType` syntax
    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// we can also define a class attribute within a constructor
class Car {
    constructor( public make: string, private model: string, protected year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

// pupblic, private, and protected are access modifiers
// public means the property or method can be accessed from anywhere
// private means the property or method can only be accessed within the class
// protected means the property or method can be accessed within the class and its subclasses   

// we can create an instance of a class using the `new` keyword
let person = new Person("Alice", 25);
console.log(person.greet()); // Output: Hello, my name is Alice and I am 25 years old.

// we can't access private or protected properties outside the class
// console.log(person.model); // Error: Property 'model' is private and only accessible within class 'Car'.
// console.log(person.year); // Error: Property 'year' is protected and only accessible within class 'Car' and its subclasses.
let car = new Car("Toyota", "Corolla", 2020);
console.log(car.getDetails()); // Output: 2020 Toyota Corolla

// we ca use setter and getter methods to access private properties
class User3 {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = value;
    }
}   

let user = new User3("Bob", 30);
console.log(user.name); // Output: Bob
user.name = "Charlie";
console.log(user.name); // Output: Charlie
console.log(user.age); // Output: 30


// classes can also inherit from other classes using the `extends` keyword
class Employee extends Person {
    // we can add additional properties and methods to the subclass
    position: string;

    constructor(name: string, age: number, position: string) {
        super(name, age); // call the constructor of the parent class
        this.position = position;
    }

    // we can override methods from the parent class
    greet(): string {
        return `${super.greet()} I work as a ${this.position}.`;
    }
}   

// the following are same properties of class in typescript
// 1. public: accessible from anywhere
// 2. private: accessible only within the class
// 3. protected: accessible within the class and its subclasses
// 4. readonly: can only be assigned a value once, either at declaration or in the constructor
// 5. static: belongs to the class itself, not to instances of the class
// 6. abstract: used to define abstract classes and methods that must be implemented by subclasses