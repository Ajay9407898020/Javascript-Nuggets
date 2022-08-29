const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane'
    }
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
// console.log(firstName, lastName, sister);

const {first, last, siblings, city} = bob;
console.log(first, last, siblings, city)  //order does not matter

// What if you want to creplace first with firstName so put : after the real property name and then put the varialbe name you want
const {first: firstName, last: lastName} = bob;
console.log(firstName, lastName)


// Note: whatever ovalue we assign should posses in object otherwise it wont work
const {zip} = bob; //Zip is not the porperty of bob object
console.log(zip);

// Nested object desctructuring
const {siblings: {sister: favrouiteSister}} = bob;
console.log(favrouiteSister);

// It is mainly use in function
function printName({first}) {
    console.log(first)
}
printName(bob);