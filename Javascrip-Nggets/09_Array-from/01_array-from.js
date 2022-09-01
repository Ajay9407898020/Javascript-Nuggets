// Array from - NOT ON PROTOTYPE   --- important

// from - return Array object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodelist, set

const udemy = 'udemy';
console.log(Array.from(udemy));


const text = document.querySelectorAll('.text');
// console.log(text);  //Here we cant use find method even if we are getting array result of nodelist 

// We can use array.from() method here
const newText = Array.from(text);
console.log(newText);
const person = newText.find((item) =>  item.textContent === 'person');
console.log(person);


// New thing to learn
let items = Array.from({length: 50});
console.log(items);  //array having 50 items and the value is undefined

// Array.from take another argument as callback function
items = Array.from( { length : 120 }, (_, index) => {
    return index;
} );
console.log(items);


// Array.from is used in pagination IMPORTANT
const itemsPerPage = 9;  //In one page there should be 14 items
const pages = Math.ceil(items.length / itemsPerPage);  // How many pages will be generate  => 120/9 and round the value with ceil

const newArray = Array.from({ length : pages }, (_, index) => {
    let start = index * itemsPerPage;
    const templates =  items.slice(start, start + itemsPerPage);
    return templates
});
console.log(newArray);