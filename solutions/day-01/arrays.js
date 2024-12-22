let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// Remove punctuation
let textWithoutPunctuation = text.replace(/[^\w\s]|_/g, "");

// Convert string to array
let words = textWithoutPunctuation.split(/\s+/);

console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (shoppingCart.indexOf("Meat") == -1) shoppingCart.unshift("Meat");

if (shoppingCart.indexOf("Sugar") == -1) shoppingCart.push("Sugar");

let arr = shoppingCart.filter((x) => x !== "Honey");
console.log(arr);

let arr2 = shoppingCart;
console.log(arr2);

console.log(arr2.splice(3, 1, "Green Tea"));
console.log(arr2);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];


if(countries.indexOf('India') == '-1'){
	countries.push('India')
	console.log(countries);
}else{
	console.log('India');
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages)
let sortedAges = ages.sort()
console.log(ages.sort())

console.log(sortedAges[0])
console.log(sortedAges[sortedAges.length - 1])
console.log(sortedAges[sortedAges.length / 2])
console.log(sortedAges)
let avg = 0;
let avg3 = 0;

for (let index = 0; index < sortedAges.length; index++) {
	avg += sortedAges[index];
	avg3 =+ sortedAges[index];
}
console.log(avg, '+=')
console.log(avg3, '-=')

const avg2 = sortedAges.reduce((a, b) => a + b, 0) / sortedAges.length;
console.log(avg2)

console.log(avg/ sortedAges.length)