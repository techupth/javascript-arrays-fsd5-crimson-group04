const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
let employees_3 = {
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Reading novels"],
};

let employees_4 = {
  name: "Kody",
  age: 19,
  hobbies: ["Computer games", "Wakeboard"],
};

employees.push(employees_3, employees_4);

console.log(employees);
