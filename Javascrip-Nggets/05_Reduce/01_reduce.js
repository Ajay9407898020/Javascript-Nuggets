// Reduce:  reduce to a single value - number, array, object
// 1st Parameter ('acc') - total of all calculation
// 2nd - Parameter ('curr') - current iteration/value

const staff = [
    { name: 'bob', age: 20, position: 'developer', salary: 100 },
    { name: 'peter', age: 25, position: 'designer', salary: 200 },
    { name: 'Susy', age: 30, position: 'the boss', salary: 300 },
    { name: 'Mack', age: 28, position: 'intern', salary: 400 },
];

const dailyTotal = staff.reduce((acc, person) => {
    acc += person.salary;
    return acc
}, 0);
console.log(dailyTotal)
