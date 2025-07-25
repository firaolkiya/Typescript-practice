// in typescript there are several ways to define functions
// 1. function declaration
function greet(name: string): string {
    return `Hello, ${name}!`;
}   

// 2. function expression
const greetExpression = function(name: string): string {
    return `Hello, ${name}!`;
}

// 3. arrow function
const greetArrow = (name: string): string => {
    return `Hello, ${name}!`;
}

// 4. function with optional parameters
function greetOptional(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    }
    return `Hello, ${name}!`;
}

// 5. function with default parameters
function greetDefault(name: string, age: number = 30): string {
    return `Hello, ${name}! You are ${age} years old.`;
}

// 6. function with rest parameters
function greetRest(name: string, ...otherInfo: string[]): string {
    return `Hello, ${name}! Other info: ${otherInfo.join(", ")}`;
}   

// 7. function with type annotations
function greetTyped(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
}

// 8. function with return type annotation
function greetReturnType(name: string): string {
    return `Hello, ${name}!`;
}
// 9. function with callback
function greetWithCallback(name: string, callback: (message: string) => void): void {
    const message = `Hello, ${name}!`;
    callback(message);
}

// Example usage
console.log(greet("Alice"));
console.log(greetExpression("Bob"));
console.log(greetArrow("Charlie"));
console.log(greetOptional("David"));
console.log(greetDefault("Eve"));
console.log(greetRest("Frank", "loves coding", "is 25 years old"));
console.log(greetTyped("Grace", 28));
greetWithCallback("Hannah", (message) => {
    console.log(message);
});