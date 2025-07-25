// in typescript, interfaces are used to define the structure of an object
// they can be used to define the shape of an object, a function, or a class
// for example, an interface for a user can be defined as follows:

interface User4 {
    name: string;
    age: number;
}

// we can use the interface to create a user object
let user4: User4 = {
    name: "Alice",
    age: 25
};

// interfaces can also be used to define a function signature
interface UserFunction {
    (name: string, age: number): User4;
}

// interfaces can also implemented by classes
interface UserClass {
    name: string;
    age: number;
    greet(): string;
}

class User5 implements UserClass {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}


// one class can implement multiple interfaces
interface UserDetails {
    email: string;
    address: string;
}

class User6 implements UserClass, UserDetails {
    name: string;
    age: number;
    email: string;
    address: string;

    constructor(name: string, age: number, email: string, address: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
    }

    greet(): string {
        return `Hello, my name is ${this.name}, I am ${this.age} years old. You can contact me at ${this.email}.`;
    }
}

// the following are some properties of interfaces:
// 1. interfaces can extend other interfaces
// 2. we can create a new interface that extends an existing interface
// 3. we can create instance of an interface
// 4. interfaces can be used to define the structure of a class