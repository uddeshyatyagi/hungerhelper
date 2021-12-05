const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyBKdcjAy11rZ8ekg-GXJl0i2omqoHcZdWM",
  authDomain: "hungerhelpers-ed73c.firebaseapp.com",
  databaseURL: "https://hungerhelpers-ed73c-default-rtdb.firebaseio.com",
  projectId: "hungerhelpers-ed73c",
  storageBucket: "hungerhelpers-ed73c.appspot.com",
  messagingSenderId: "311737556096",
  appId: "1:311737556096:web:76fe60178f70ee9ee65a65",
  measurementId: "G-9SR7YBX8CL"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
