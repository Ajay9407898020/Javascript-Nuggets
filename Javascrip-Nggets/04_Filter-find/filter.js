// Filter => returns a new array, can manipulate the size of new array (unlike map), returns based on condtion
// Find => returns single instance (object), returns first match if no match - undefined

const people = [
    {
        name: 'bob', age: 20, postion: 'developer',
    },
    {
        name: 'peter', age: 24, postion: 'designer',
    },
    {
        name: 'susy', age: 30, postion: 'the boss',
    },
    {
        name: 'anna', age: 33, postion: 'intern',
    },
];

// Filter
const youngPeople = people.filter((person) => person.age < 25);
console.log(youngPeople);

// Not matched
const notMathched = people.filter((person => person.postion == 'Tester'));  //Return empty array [];
console.log(notMathched);


// Find
const peter = people.find((emp) => emp.name == 'peter');
console.log(peter);

// Notmatched
const ajayNotMatched = people.find((emp) => emp.name == 'Ajay');
console.log(ajayNotMatched) //undefined
