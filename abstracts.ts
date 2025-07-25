// in typescript, an abstract class is a class that cannot be instantiated directly
// it is meant to be extended by other classes
// abstract classes can have abstract methods, which must be implemented by subclasses
abstract class Animal {
    abstract makeSound(): string; // abstract method

    move(): string {
        return "Moving...";
    }
}

// we can create a subclass that extends the abstract class
class Dog extends Animal {
    makeSound(): string {
        return "Woof!";
    }
}

// we can create an instance of the subclass
let myDog = new Dog();
console.log(myDog.makeSound()); // Output: Woof!
console.log(myDog.move()); // Output: Moving...

// we cannot create an instance of the abstract class directly
// let myAnimal = new Animal(); // This will throw an error 

// abstract classes can also have properties and methods
abstract class Vehicle {
    abstract wheels: number; // abstract property

    start(): string {
        return "Vehicle started";
    }
}

// we can create a subclass that implements the abstract property
class Car4 extends Vehicle {
    wheels: number = 4; // implementing the abstract property

    start(): string {
        return "Car started with " + this.wheels + " wheels";
    }
}   

// whenever the class is extended, the abstract methods and properties must be implemented and 
// the subclass should call super() to call the constructor of the abstract class if it has one



abstract class A {
    constructor(public name: string) {}
    abstract greet(): string; // abstract method
}

class B extends A {
    constructor(name: string) {
        super(name); // calling the constructor of the abstract class
    }
    greet(): string {
        return `Hello, ${this.name}`;
    }
}
// the following are some properties of abstract classes:
// 1. abstract classes can have both abstract and non-abstract methods
// 2. abstract classes can have properties
// 3. abstract classes can be extended by other classes
// 4. abstract classes cannot be instantiated directly
// 5. abstract classes can have constructors
// 6. abstract classes can have static methods and properties
// 7. abstract classes can implement interfaces
// 8. abstract classes can be used as base classes for other classes
// 9. abstract classes can have access modifiers (public, private, protected)