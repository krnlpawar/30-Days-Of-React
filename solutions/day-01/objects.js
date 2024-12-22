// Create an empty object called dog
let dogs = {}

// Print the the dog object on the console
console.log(dogs)

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dogs.name = 'Kru'
dogs.legs = 4
dogs.color = 'black'
dogs.age = 27
dogs.bark = () => 'woof woof';

// Get name, legs, color, age and bark value from the dog object
console.log(dogs)
console.log(dogs.name)
console.log(dogs.legs)
console.log(dogs.color)
console.log(dogs.age)
console.log(dogs.bark())

// Set new properties the dog object: breed, getDogInfo
dogs.breed = 'human'
dogs.getDogInfo = () => 'i just a dog'
console.log(dogs.getDogInfo())

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let skillCount = 0
let highestSkillUser = null

Object.keys(users).forEach((x) => {
  let len = users[x].skills.length
  if(len >= skillCount){
    skillCount = users[x].skills.length
    highestSkillUser = x
  }
})

console.log(skillCount)
console.log(highestSkillUser)


let countLoggedIn = 0
let count50Plus = 0

for(let user in users){
  console.log(user)
  if(users[user].isLoggedIn){
    countLoggedIn++
  }

  if(users[user].points >= 50){
    count50Plus++
  }
}

console.log(countLoggedIn)
console.log(count50Plus)

const mernStackSkills = ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'];

let mernStackDevelopers = [];

for (const user in users) {
  if (mernStackSkills.every(skill => users[user].skills.includes(skill))) {
    mernStackDevelopers.push(user);
  }
}

console.log(`MERN stack developers: ${mernStackDevelopers.join(', ')}`);

for (const user in users) {
  console.log(Object.keys(users[user]))
  console.log(Object.values(users[user]))
}



const personAccount = {
  firstName: '',
  lastName: '',
  incomes: new Map(),
  expenses: new Map(),

  // Method to calculate total income
  totalIncome() {
    let total = 0;
    for (const [amount, description] of this.incomes) {
      total += amount;
    }
    return total;
  },

  // Method to calculate total expense
  totalExpense() {
    let total = 0;
    for (const [amount, description] of this.expenses) {
      total += amount;
    }
    return total;
  },

  // Method to display account information
  accountInfo() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Method to add income
  addIncome(amount, description) {
    this.incomes.set(amount, description);
  },

  // Method to add expense
  addExpense(amount, description) {
    this.expenses.set(amount, description);
  },

  // Method to calculate account balance
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
};

// Example usage
personAccount.firstName = 'John';
personAccount.lastName = 'Doe';

personAccount.addIncome(1000, 'Salary');
personAccount.addIncome(500, 'Freelance work');

personAccount.addExpense(500, 'Rent');
personAccount.addExpense(200, 'Utilities');

console.log(`Account holder: ${personAccount.accountInfo()}`);
console.log(`Total income: $${personAccount.totalIncome()}`);
console.log(`Total expense: $${personAccount.totalExpense()}`);
console.log(`Account balance: $${personAccount.accountBalance()}`);

const newusers = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]