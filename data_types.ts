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
// number can only represent upto 9007199254740991
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
// symbol is a type that represents a unique identifier, it is used to create unique object properties
let mySymbol: symbol = Symbol("mySymbol");
let myAnotherSymbol: symbol = Symbol("mySymbol"); // different symbol, even with the

// same description
// bigint
// bigint is a built-in primitive type used to represent very large integers—numbers
//  that are too large to be represented by the regular number type (which uses 64-bit 
// floating point under the hood and can only safely represent 
// integers between -(2^53 - 1) and 2^53 - 1).
let myBigInt: bigint = 1234567890123456789012345678901234567890n; // bigint literal
let myBigIntFromString: bigint = BigInt("1234567890123456789012345678901234567890"); // from string

// object
// object is a type that represents any non-primitive value, it is used to create objects
let myObject = { name: "John", age: 30 };

console.log(myObject.name); // accessing object property
