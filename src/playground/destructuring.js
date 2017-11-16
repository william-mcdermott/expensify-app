// const person = {
//   age: 43,
//   location: {
//     city: 'Austin',
//     temp: 84
//   }
// };
//
// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher
//
// console.log(publisherName);


// Array destructuring

// const address = ['56 Wilshire Road', 'Vernon', 'Connecticut', '06066'];
//
// const [, city, state = 'New York'] = address
//
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , medPrice] = item;

console.log(`A medium ${itemName} costs ${medPrice}`);
