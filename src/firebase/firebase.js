import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
//
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
//
// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })
//
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });
//
// database.ref('expenses').on('value', (snapshot) => {
//   console.log(snapshot.val());
// })
//
// const expenses = [{
//   description: 'Rent',
//   note: '',
//   amount: 125000,
//   createdAt: 200000
// }, {
//   description: 'Cable',
//   note: '',
//   amount: 20000,
//   createdAt: 300000
// }, {
//   description: 'Phone',
//   note: '',
//   amount: 12500,
//   createdAt: 450000
// }]
// database.ref('expenses').push(expenses[0]);

// database.ref('notes/-KzPNiTrS2gkjAp5SOnQ').remove();

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React native, angular, python'
// });

// database.ref('notes').set(firebaseNotes);
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
// }, (e) => {
//   console.log('Error fetching data', e);
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   })



// database.ref().set({
//   name: 'William McDermott',
//   age: 44,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Austin',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('data is saved!');
// }).catch((e) => {
//   console.log('This failed', e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Google',
//   'location/city': 'Seattle'
// });

// database.ref().remove().then(() => {
//   console.log('remove successful');
// }).catch((e) => {
//   console.log('This didn\'t work', e);
// })
