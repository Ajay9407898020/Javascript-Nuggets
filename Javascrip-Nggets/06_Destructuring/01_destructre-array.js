const fruits = ['oranges', 'banana', 'lemon'];
const friends = ['john', 'peter', 'parker', 'Tony', 'steve'];

const fruits1 = fruits[0];
const fruits2 = fruits[1];
const fruits3 = fruits[2];

console.log(fruits1, fruits2, fruits3);

// First three item of array displayed 
const [var1, var2, var3] = friends;
console.log(var1, var2, var3);

// What if we want 1, 3 and 5 element of array
const [variable1, , variable3, , variable5] = friends;
console.log(variable1,variable3,variable5);

// It helps in swaping of two element without using temp varible
let first = 'Ajay';
let last = 'wanjari';
[last, first] = [first, last];
console.log(first, last);

