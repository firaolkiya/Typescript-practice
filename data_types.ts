// there are mant data types in typescript. let use introduce some of them

// any
// any is a type that can be anything, it is not recommended to use it




let myAny: any = "Hello, World!";
myAny = 42;
myAny = true;
myAny = { name: "John", age: 30 };




// unknown
// unknown is a type that can be anything, but you need to check the type before using
let myUnknown: unknown = "Hello, World!";
myUnknown = 42;
myUnknown = true;
myUnknown = { name: "John", age: 30 };
if (typeof myUnknown === "string") {
    console.log(myUnknown.toUpperCase());
}   


// never
// never is a type that represents a value that never occurs, it is used for functions that
// always throw an error or never return
function throwError(message: string): never {
    throw new Error(message);
}



// void
// void is a type that represents the absence of a value, it is used for functions that
// do not return a value
function logMessage(message: string): void {
    console.log(message);
}   


// number
let myNumber: number = 42;
let myHex: number = 0x2a; // hexadecimal
let myBinary: number = 0b101010; // binary
let myOctal: number = 0o52; // octal


// string
let myString: string = "Hello, World!";
let myTemplateString: string = `Hello, ${myString}`; // template string


// boolean
let myBoolean: boolean = true;
let myFalseBoolean: boolean = false;


// symbol
let mySymbol: symbol = Symbol("mySymbol");
let myAnotherSymbol: symbol = Symbol("mySymbol"); // different symbol, even with the