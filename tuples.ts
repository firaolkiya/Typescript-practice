// in typescript, tuples are a fixed-size array that can contain elements of different types
// they are defined using the `[]` syntax with specific types for each element
// for example, a tuple that contains a string and a number can be defined as follows:

type StringNumberTuples = [string, number];
// in the above code, we create a type alias for a tuple that contains a string and a number
let myTuples: StringNumberTuple = ["Hello", 42]; // this is valid
// myTuple = [42, "Hello"]; // this is invalid, as the order
// of the elements is important
// myTuple = ["Hello", 42, true]; // this is invalid, as the
// tuple can only contain two elements

// we can also create a tuple with multiple elements of different types
type MixedTuple = [string, number, boolean];
let myMixedTuple: MixedTuple = ["Hello", 42, true]; // this is valid
// myMixedTuple = [42, "Hello", true]; // this is invalid,
// as the order of the elements is important

// we can also use tuples to represent a fixed-size array of elements
type FixedSizeArray = [number, number, number];
let myFixedSizeArray: FixedSizeArray = [1, 2, 3];

// we can also use tuples to represent a pair of values
type Pair<T, U> = [T, U];
let myPair: Pair<string, number> = ["John", 30]; // this is valid
// myPair = [30, "John"]; // this is invalid, as the order
// of the elements is important 

// we can also use tuples to represent a function that returns multiple values
type FunctionReturnType = [string, number];
function getUserInfo(): FunctionReturnType {
    return ["John", 30]; // this is valid
}

// we can also use tuples to represent a function that takes multiple arguments
type FunctionArguments = [string, number];
function logUserInfo(...args: FunctionArguments): void {
    console.log(`Name: ${args[0]}, Age: ${args[1]}`);
}