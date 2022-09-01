// Callback Hell : It something that makes it harder to handle

// setTimeout(()=> {
//     console.log('Ajay');
// }, 3000);

// setTimeout(()=> {
//     console.log('Shyam');
// }, 1000);

// setTimeout(()=> {
//     console.log('Gaurav');
// }, 2000);

// How can we make it sequence 
setTimeout(() => {
    console.log('Shyam');
    setTimeout(() => {
        console.log('Ajay');
        setTimeout(() => {
            console.log('Gaurav')
        }, 2000)
    }, 1000);
}, 3000);