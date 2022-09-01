// Callback function : we pass the function as a argument and execute later
// Ex: Array method, setTimeout, event listner etc

function makeUppercase(value) {
    console.log(value.toUpperCase());
}

function reverseString(value) {
    console.log(value.split('').reverse().join(''));
}

function handleName(name, cb) {
    const fullName = `${name} Smith`;
    cb(fullName);

    // You can call again this callback function after some more logic
    // cb(fullName);
    // cb(fullName);
    // cb(fullName);

}

handleName('Peter', makeUppercase);
handleName('Peter', reverseString);