// aliases for TypeScript imports
// type aliases.ts

type MyUser = {
    readonly id: number;
    name: string;
    age: number;
    email?: string;
    address?: {
        street: string;
        city: string;
        zip: string;
    };
};

// know the MyUser type can be used to create a user object. it uses as data types.
function createUser(user: MyUser): MyUser {
    return {
        id: user.id,
        name: user.name,
        age: user.age,
        email: user.email,
        address: user.address
    };
}


// type alias can be inherited through combining two or more types by using the `&` operator
// for example in the following code, we create a type alias for a card number and a card date
// and then we create a type alias for card details that combines both of them
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


// type aliases can also be used to create a union type
type StringOrNumber = string | number;
// in the above code, we create a type alias for a string or number
// this means that the variable can be either a string or a number
let myVar: StringOrNumber = "Hello";
myVar = 42; // this is also valid


// type aliases can also be used to create a tuple type
type StringNumberTuple = [string, number];
// in the above code, we create a type alias for a tuple that contains a string and a number
let myTuple: StringNumberTuple = ["Hello", 42]; // this is valid
// myTuple = [42, "Hello"]; // this is invalid, as the order of the elements is important
// myTuple = ["Hello", 42, true]; // this is invalid, as the tuple can only contain two elements

  