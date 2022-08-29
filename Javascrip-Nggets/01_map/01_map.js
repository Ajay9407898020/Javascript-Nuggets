// MAP Method

const people = [
    {
        name: 'bob',
        age: 21,
        position: 'Developer'
    },
    {
        name: 'anna',
        age: 29,
        position: 'Designer'
    },
    {
        name: 'susy',
        age: 61,
        position: 'The boss'
    },
]

// Only return age of objects
const ages = people.map((perosn) => perosn.age * 2);
console.log(ages)

const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20
    }
});
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('div');
result.innerHTML = names.join('');