// Javascript Promise

// async await
// consume/use promise

// Pending, Rejected, Fullfilled

// PENDING
const promise = new Promise((resolve, reject) => {
    
});
console.log(promise);  // Pending state


// Fulfilled
const promise1 = new Promise((resolve, reject) => {
    resolve('Hello world');
});
promise1.then((result)=> {
    console.log(result);
})  //Fullfilled but data is undefined

// Rejected
const promise2 = new Promise((resolve, reject) => {
    reject(Error);
});
promise2.then((result)=> {
    console.log(result);
}).catch((error) => {
    console.log(error)
}) //Rejected