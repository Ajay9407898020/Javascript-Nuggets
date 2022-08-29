// Rest Operator ...
// gather/collects items
// destructring, function
// placement important, careful with same name
// rest when declare function, spread when invoke the function

// Array
const fruits = ['apple', 'orange', 'lemon', 'banana'];
const [first, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);
// We can find the specific name of an array using find method 
const specificFruit = restOfTheFruits.find((fruitName) => fruitName == 'lemon');
console.log(specificFruit);

// Objects
const person = {name: 'john', lastname: 'devolte', age: 23, postion: 'Developer'};
const {name, ...restOfObject} = person;
console.log(name, restOfObject);


// Function
const getAvg = (name, ...score) => {  //rest operator example
    console.log(name);
    console.log(score);
    const avg = score.reduce((total, item) => {
        return total += item
    }, 0)/score.length;
    console.log(avg);
}
getAvg(person.name, 343,393,342,232);  // Here all rest value is gathering in function defination
let testScore = [34,43,54,67] 
getAvg(person.name, ...testScore); //spread operator example   


// NOTE: Rest operator is when we defined function which means it gather or collect items
// Spread operator is when we invoke function which means it spread items from an array
