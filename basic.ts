
type User = {
    readonly id:number,
    name:string, 
    age:number,
    email?:string,
    address?:{
        street:string,
        city:string,
        zip:string
    }
};


type CardNumber = string & { readonly brand: "Visa" | "MasterCard" | "Amex",
    cardnumber: string & { readonly length: 16 | 19 }

};
type CardDate = string & { readonly format: "MM/YY" | "MM/YYYY" };
type CardDetails = CardNumber & CardDate & {
    cvv: string & { readonly length: 3 | 4 }
};

let myCard: CardDetails = {
    cardnumber: "1234567812345678" ,
    brand: "Visa",
    format: "MM/YY",
    cvv: "123"
} as CardDetails;

console.log("Hello, World!");
// arryay, let myarray: number[] = [1, 2, 3, 4, 5];
// let myarray: Array<number> = [1, 2, 3, 4, 5];
// let myarrya: (string | number)[] = [1, "two", 3, "four", 5];
// let myarray: number[][] = [[1, 2], [3, 4], [5, 6]];
// id:"abdi" | "ali" | "mohamed" | "ahmed"
// enum is a way to define a set of named constants
// interface for a function that takes a User and returns a string

interface UserFunction {
    (user: User): string;
}

// interface can be inherited
interface ExtendedUserFunction extends UserFunction {
    (user: User, additionalInfo: string): string;
}

/*

⭐️ Contents ⭐️
⌨️ (0:00:00) Why to learn TypeScript
⌨️ (0:07:08) TypeScript is not what you think
⌨️ (0:15:25) How to install TypeScript
⌨️ (0:27:33) Your first intro to TypeScript docs
⌨️ (0:39:21) Number, boolean, and type inference
⌨️ (0:39:21) Number, boolean, and type inference
⌨️ (0:46:52) Don't use ANY
⌨️ (0:51:30) Do you really know functions
⌨️ (1:02:55) A better way to write function
⌨️ (1:15:38) Bad behavior of objects
⌨️ (1:25:14) Type Aliases
⌨️ (1:32:28) READONLY and optional
⌨️ (1:42:13) Array
⌨️ (1:50:03) Union Types in TS
⌨️ (2:04:46) Tuples
⌨️ (2:14:33) Enums
⌨️ (2:24:03) interface
⌨️ (2:33:52) Interface vs Type
⌨️ (2:39:08) How to setup Typescript for real projects
⌨️ (2:53:44) Classes
⌨️ (3:02:06) Private Public
⌨️ (3:08:12) Getters and Setters
⌨️ (3:15:25) Protected
⌨️ (3:19:34) Why Interface is important
⌨️ (3:26:05) Abstract class
⌨️ (3:35:36) Generics
⌨️ (3:47:58) Generics in Array and Arrow functions
⌨️ (3:56:07) Generic Classes
⌨️ (4:07:16) Type Narrowing
⌨️ (4:17:04) The in operator narrowing
⌨️ (4:22:17) Instanceof and Type Predicates
⌨️ (4:31:35) Discriminated Union and Exhaustiveness Checking with never
⌨️ (4:42:54) TypeScript End

*/