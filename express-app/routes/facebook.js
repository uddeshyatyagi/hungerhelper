const express = require('express');
const router = express.Router();
// const admin = require('../config/firebase-config-admin');
const firebase = require('../config/firebase-config-client');

// router.get('/', (req, res) => {
//     res.render('facebook',{ user: user });
//   });

router.get('/', (req, res) => {
    let unsubscribe = firebase.auth().onAuthStateChanged(user => {
      res.render('facebook', { user: user });
    });
  
    unsubscribe();
  });

  router.post('/logout', (req, res) => {
    firebase
      .auth()
      .signOut()
      .catch(error => {
        res.render('facebook', { errorMessage: error });
      });
  
    res.redirect('/');
  });
// router.get('/', (req, res) => {

//     let unsubscribe = firebase.auth().onAuthStateChanged(async user => {
//         if (!user) {
//           res.redirect('/');
//         }
//         else{
//       res.render('facebook',{ user: user });
//         }
//     });

module.exports = router;