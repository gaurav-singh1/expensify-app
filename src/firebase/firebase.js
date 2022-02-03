import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAibnt_Xqe4uuJEiz9VVm_dkwaoRsqBcUA",
    authDomain: "expensify-e9c2f.firebaseapp.com",
    databaseURL: "https://expensify-e9c2f-default-rtdb.firebaseio.com",
    projectId: "expensify-e9c2f",
    storageBucket: "expensify-e9c2f.appspot.com",
    messagingSenderId: "953244906398",
    appId: "1:953244906398:web:85131d22a06a3810171c8f",
    measurementId: "G-C5PL162WCJ"
  };

  firebase.initializeApp(firebaseConfig);



const database = firebase.database();

export { firebase, database as default };

// database.ref().set({
//     name: 'momo',
//     age: 26,
//     isSingle: false,
//     location: {
//         city: 'Bengaluru',
//         country: 'India'
//     }
// });


// database.ref('age').set(28);

// database.ref('attributes').set({
//     height: 173,
//     weight: 77
// })

// console.log('made a request to change the data')