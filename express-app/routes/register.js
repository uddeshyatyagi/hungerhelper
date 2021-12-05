
// var popup = require('node-popup');
// import {alert} from 'node-popup';
const express = require('express');
const router = express.Router();
const admin = require('../config/firebase-config-admin');
var validator = require('email-validator');


/* GET register page. */
router.get('/', (req, res) => {
  res.render('register');
});

/* POST register page. */
router.post('/', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

// if(validator.validate(email))
// {
//   res.render('login');
// }
// else
// {
//   res.render('index');
// }

// emailExistence.check('email@domain.com', function(err,res){
//   console.log('res: '+res);
// });


  function checkPassword(password) {

    var numbers = password.match(/\d+/g);
    var uppers  = password.match(/[A-Z]/);
    var lowers  = password.match(/[a-z]/);
    var special = password.match(/[!@#$%\^&*\+]/);


    if(password.length<8)
      valid=false;

    if (numbers === null || uppers === null || lowers === null || special === null)
        valid = false;

    if (numbers !== null && uppers !== null && lowers !== null && special !== null)
        valid = true;


    return valid;

}



if(!checkPassword(password))
{
  // alert("Strong password recommended !");

// popup.alert({
//     content: 'Hello!'
// });
// window.alert("Strong password recommended")
// alert('Hello World!');
}
 
  admin
    .auth()
    .createUser({
      uid: username,
      email: email,
      emailVerified: false,
      password: password,
      disabled: false,
    })
    .then(() => {
      res.redirect('login');
    })
    .catch(error => {
      res.render('index', { errorMessage: error });
    });
});

module.exports = router;
