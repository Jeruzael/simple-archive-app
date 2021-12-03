import {initializeApp} from 'firebase/app';
import {signupMe} from "/js/signup.js";

//****-----------------------   v  DECLARE DOM OBJECTS HERE v  -----------------------****
let signup = new signupMe("346840654106540");
let email = document.querySelector('.email');
let fn = document.querySelector('.firstname');
//let mn = document.querySelector('.middlename');
let ln = document.querySelector('.lastname');
let pass = document.querySelector('.pass');
let rePass = document.querySelector('.retypePass');
let signupBtn = document.querySelector('.signup-Btn');
let studId = document.querySelector('.studId');
let yrSec = document.querySelector('.yrSec');

//****-----------------------  ^   DECLARE DOM OBJECTS HERE ^  -----------------------****


//signup.sample();
signupBtn.addEventListener('click', ()=>{
  signup.signupNewUser(email, pass, rePass, fn, ln, yrSec, studId);
  
});
//signup.signupNewUser(email, pass, fn, '', ln, yrSec, studId);
