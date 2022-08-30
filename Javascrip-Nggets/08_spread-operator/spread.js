// Spread Operator ...
// Allow and iterable to spread/expand individually inside receiver
// Split into single items and COPY them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);


// Spread Operator in Array;
const boys = ['john', 'peter', 'bob'];
const girl = ['susan', 'anna'];
const bestFriend = 'arnold';

const friends = [...boys, bestFriend, ...girl];
console.log(friends);

// Refrence : spred operator copy things that is more important to understand
const array = [1,2,3];
const newArray = array;
newArray[0] = 'Ajay';
console.log(array);
console.log(newArray);
// You can see here both array changed this does not happens with spread operator


// ES2018 ES8 Object
const person = { name: 'john', job: 'Developer' };
const newPerson ={...person };  //Copying the values here not refrence
console.log(newPerson)

// You can overide the existing property present in spred operator object as well add new one
const overridePropertyObj = { ...person, name: 'Ajay', city: 'Chicago' };
console.log(overridePropertyObj);




