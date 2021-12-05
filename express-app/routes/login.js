const express = require('express');
const router = express.Router();
const firebase = require('../config/firebase-config-client');

/* GET login page */
router.get('/', (req, res) => {
  res.render('login');
});

/* POST login page */
router.post('/', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const role =req.body.role;
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      res.render('login', { errorMessage: error });
    });
    if(role=='donor'){
  res.redirect('/donation-form');
    }
    else if(role=='recipient')
    {
      res.redirect('./donation-board');
    }
});

module.exports = router;
