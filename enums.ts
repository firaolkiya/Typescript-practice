// in typescript, enums are a way to define a set of named constants
// they can be defined using the `enum` keyword
// for example, an enum for colors can be defined as follows:

enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

// we can also define numeric enums
enum Status {
    Active = 1,
    Inactive = 2,
    Pending = 3
}

// we can use enums in switch statements
function getColorMessage(color: Colors): string {
    switch (color) {
        case Colors.Red:
            return "The color is Red.";
        case Colors.Green:
            return "The color is Green.";
        case Colors.Blue:
            return "The color is Blue.";
        default:
            return "Unknown color.";
    }
}   

// we can also use enums in functions
function getStatusMessage(status: Status): string {
    switch (status) {
        case Status.Active:
            return "The status is Active.";
        case Status.Inactive:
            return "The status is Inactive.";
        case Status.Pending:
            return "The status is Pending.";
        default:
            return "Unknown status.";
    }
}

// we can also use enums to define a set of named constants for a specific purpose
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

// we can also not give values to enums, in which case they
//  will be assigned numeric values starting from 0
enum Directions {
    North,
    South,
    East,
    West
}

// we can also assign different types to enum members
enum MixedEnum {
    StringMember = "STRING",
    NumberMember = 42,
    BooleanMember 
}