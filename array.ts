// in typescript, array is a collection of elements of the same type
// it can be defined using the `[]` syntax or the `Array<type>` syntax
// for example, an array of numbers can be defined as follows:

// array can be defined in two ways
let myArray: number[] = [1, 2, 3, 4, 5];
let myArray2: Array<number> = [1, 2, 3, 4, 5];

// array can also contain different types of elements using union types
// for example, an array that can contain both strings and numbers can be defined as follows:
let myArray3: (string | number)[] = [1, "two", 3, "four", 5];

// array can also be a multidimensional array
// for example, an array of arrays of numbers can be defined as follows:
let myArray4: number[][] = [[1, 2], [3, 4], [5, 6]];

// we can iterate over an array using a for loop or the forEach method
myArray.forEach((element) => {
    console.log(element);
});

// we can also use the map method to create a new array based on the original array
let myMappedArray = myArray.map((element) => element * 2);

// we can also use the filter method to create a new array based on a condition
let myFilteredArray = myArray.filter((element) => element > 2);

// we can also use the reduce method to create a single value based on the array
let myReducedValue = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// we can also iterate over an array using a for...of loop
for (let element of myArray) {
    console.log(element);
}

// we can also use the for...in loop to iterate over the indices of the array
for (let index in myArray) {
    console.log(`Index: ${index}, Value: ${myArray[index]}`);
}

// we can also use the length property to get the number of elements in the array
console.log(`Length of myArray: ${myArray.length}`);