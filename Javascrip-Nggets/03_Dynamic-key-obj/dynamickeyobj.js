// We can set key dyanmically using square bracket notation
// How just observe the below code

// Simple example of object
const person = {
    name: 'john'
}
console.log('******************* Simple Object **********************')
console.log(person.name);
console.log(person);

// We can not access object key having hyphen or space with dot notation
console.log('******************* (.) oprator not works in Space or hiphon in key **********************')
const body = {
    'ear organ': 'working',
    'Heart-beat': 'Not working'
}
console.log(body["Heart-beat"]); // There is not . here

// Same We can replace the key of object or we can create new key as well using square bracket
console.log('******************* (.) oprator not works in Space or hiphon in key **********************')
let Cricket = 'Hockey'
const sports = {
    [Cricket]: 'Our National Sport'
}
console.log(sports);


// Here it the functoion which take args key and value and update or create key of object
console.log('******************* createUpdateKeyObj **********************')

function createUpdateKeyObj(key, value, obj) {
    obj[key] = value;
}
createUpdateKeyObj('name', 'Ajay', sports);  //Created the key inside sport object
console.log(sports)
createUpdateKeyObj('Hockey', 'Updated value', sports);
console.log(sports)