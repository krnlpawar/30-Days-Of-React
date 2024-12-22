// Declare an empty array;
let emptyArray = [];
console.log(emptyArray);

// Declare an array with more than 5 number of elements
let arrayWith6Numbers = Array(6).fill('x')
console.log(arrayWith6Numbers);

// Find the length of your array
console.log(arrayWith6Numbers.length)

// Get the first item, the middle item and the last item of the array
console.log(arrayWith6Numbers[0]);
console.log(arrayWith6Numbers[4]);
console.log(arrayWith6Numbers[5]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [1, '2', {"a": "b"}, 1.43, [1, 2], ['2'], 2]
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length/2)]);
console.log(itCompanies[Math.floor(itCompanies.length - 1)]);

// Print out each company
itCompanies.forEach((el) => {
	console.log(el)
})

itCompanies.map((item, index) => {
	console.log(item)
})

// Change each company name to uppercase one by one and print them out
itCompanies.forEach((el) => {
	console.log(el.toUpperCase())
})

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(' '));

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.indexOf('banana') !== -1){
	console.log('exists');
}else{
	console.log('not exists');
}

if(itCompanies.indexOf('Microsoft') == -1){
	console.log('not exists');
}else{
	console.log('exists');
}

// Filter out companies which have more than one 'o' without the filter method
itCompanies.forEach((item) => {
	if(item.split('').indexOf('o') !== -1){
		console.log(item)
	}
})

const filteredCompanies = itCompanies.filter((company) => company.split('o').length === 1);
console.log(filteredCompanies);

// Sort the array using sort() method
console.log(itCompanies.sort())

// Reverse the array using reverse() method
console.log(itCompanies.reverse())

// Slice out the first 3 companies from the array
console.log(itCompanies);
console.log(itCompanies.slice(0, 3))

// Slice out the last 3 companies from the array
console.log(itCompanies);
console.log(itCompanies.slice(4))

// Slice out the middle IT company or companies from the array
console.log(itCompanies);
console.log(itCompanies.slice(3, 4))

// Remove the first IT company from the array

console.log(itCompanies.shift())

// Remove the middle IT company or companies from the array
console.log(itCompanies)
let arr1 = itCompanies.slice(0,3)
let arr2 = itCompanies.slice(4)
console.log(arr1, arr2)
console.log(arr1.concat(arr2))

// Remove the last IT company from the array
console.log(itCompanies.pop())

// Remove all IT companies
console.log(itCompanies.splice())

// ----

// slice / splice

/*

Both slice and splice are used to extract or remove parts of an array, but they work differently:
Slice
slice is used to extract a part of an array and return it as a new array. It does not modify the original array.
Syntax
arr.slice(start, end)
start: The index where the slice starts (inclusive).
end: The index where the slice ends (exclusive).
Example
JavaScript
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'cherry']

console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
Splice
splice is used to remove or replace elements in an array. It modifies the original array.
Syntax
arr.splice(start, deleteCount, item1, item2, ...)
start: The index where the splice starts.
deleteCount: The number of elements to delete.
item1, item2, ...: The elements to add.
Example
JavaScript
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Remove 2 elements starting from index 1
fruits.splice(1, 2);
console.log(fruits); // Output: ['apple', 'date', 'elderberry']

// Replace 1 element starting from index 1
fruits.splice(1, 1, 'grape');
console.log(fruits); // Output: ['apple', 'grape', 'elderberry']

// Add 2 elements starting from index 2
fruits.splice(2, 0, 'orange', 'mango');
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango', 'elderberry']
Key differences:
slice returns a new array, while splice modifies the original array.
slice does not remove elements, while splice can remove or replace elements.

*/


// Loops

/*
JavaScript provides several methods for looping through arrays. Here are some of the most commonly used methods:
1. for loop
The for loop is a traditional loop that uses a counter variable to iterate through the array.
JavaScript
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
2. for...of loop
The for...of loop is a newer loop that allows you to iterate through the values of an array without needing to keep track of the index.
JavaScript
const arr = [1, 2, 3, 4, 5];

for (const value of arr) {
  console.log(value);
}
3. forEach() method
The forEach() method calls a provided function once for each element in the array.
JavaScript
const arr = [1, 2, 3, 4, 5];

arr.forEach((value) => {
  console.log(value);
});
4. map() method
The map() method creates a new array with the results of applying a provided function to every element in the original array.
JavaScript
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((value) => {
  return value * 2;
});

console.log(newArr); // [2, 4, 6, 8, 10]
5. filter() method
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
JavaScript
const arr = [1, 2, 3, 4, 5];

const newArr = arr.filter((value) => {
  return value > 3;
});

console.log(newArr); // [4, 5]
6. reduce() method
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
JavaScript
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sum); // 15
7. some() method
The some() method tests whether at least one element in the array passes the test implemented by the provided function.
JavaScript
const arr = [1, 2, 3, 4, 5];

const result = arr.some((value) => {
  return value > 3;
});

console.log(result); // true
8. every() method
The every() method tests whether all elements in the array pass the test implemented by the provided function.
JavaScript
const arr = [1, 2, 3, 4, 5];

const result = arr.every((value) => {
  return value > 0;
});

console.log(result); // true


Here are the key differences between the JavaScript array loop methods:
for loop:
Uses a counter variable to iterate through the array.
Can be used to iterate through arrays, objects, and strings.
Can be used to iterate through arrays in reverse order.

for...of loop:
Iterates through the values of an array without needing to keep track of the index.
Can only be used to iterate through arrays and other iterable objects.
Cannot be used to iterate through arrays in reverse order.

forEach() method:
Calls a provided function once for each element in the array.
Returns undefined.
Cannot be used to iterate through arrays in reverse order.

map() method:
Creates a new array with the results of applying a provided function to every element in the original array.
Returns a new array.
Can be used to iterate through arrays in reverse order.

filter() method:
Creates a new array with all elements that pass the test implemented by the provided function.
Returns a new array.
Can be used to iterate through arrays in reverse order.

reduce() method:
Applies a function against an accumulator and each element in the array to reduce it to a single value.
Returns a single value.
Can be used to iterate through arrays in reverse order.

some() method:
Tests whether at least one element in the array passes the test implemented by the provided function.
Returns a boolean value.
Can be used to iterate through arrays in reverse order.

every() method:
Tests whether all elements in the array pass the test implemented by the provided function.
Returns a boolean value.
Can be used to iterate through arrays in reverse order.
In general, the choice of loop method depends on the specific use case and the 

desired outcome:
Use for loop or for...of loop when you need to iterate through an array and perform some action on each element.

Use forEach() method when you need to iterate through an array and perform some action on each element, but you don't need to return a value.

Use map() method when you need to create a new array by applying a transformation to each element in the original array.

Use filter() method when you need to create a new array with only the elements that pass a certain test.

Use reduce() method when you need to reduce an array to a single value by applying a function to each element.

Use some() method or every() method when you need to test whether at least one or all elements in an array pass a certain test.
*/