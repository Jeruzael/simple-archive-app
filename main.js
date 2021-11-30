import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase, ref, set, onValue, child, get, push, update} from "firebase/database";

let email = document.querySelector(".email");
let password = document.querySelector(".password");
let passRetype = document.querySelector(".retypePass");
let signupBtn = document.querySelector(".signupBtn");
let readValue = document.querySelector(".reader");
let readValOnce = document.querySelector(".readValOnce");
let container = document.querySelector(".container");
let signup = document.querySelector(".signUp");
let home = document.createElement('div');
let postCont = document.createElement('div');
let testBtn = document.querySelector('.testBtn');
let signin = document.querySelector('.signinPanel');

let btnCont = document.createElement('div');
let createTabBtn = document.createElement('div');

const firebaseConfig = {
  apiKey: "AIzaSyDd0PTOLxQr3_KHMH7IcfTsfTfNHa1C5l8",
  authDomain: "simple-archive-app.firebaseapp.com",
  projectId: "simple-archive-app",
  storageBucket: "simple-archive-app.appspot.com",
  messagingSenderId: "183155358943",
  appId: "1:183155358943:web:03dd0f37e13ffa1dcf7d6a",
  databaseURL: "https://simple-archive-app-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbRef = ref(db);
const auth = getAuth();


//Set function inside is the way of how to write data to data,
//but be carefull because this will overwrite the data inside your database
/*signupBtn.addEventListener('click', function(){  
  set(ref(db, 'Users/user1'), {
    username: email.value,
    password: password.value
  });
  password.value = "";
  email.value = "";

  //tatanggalin natin yung signup which is the child of the container
  container.removeChild(signup);  
  home.className = "homePage";
  container.appendChild(home);
  postCont.className = "postCont";
  home.appendChild(postCont);
  
  btnCont.className = "btnCont";
  home.appendChild(btnCont);
  createTabBtn.className = "createTabBtn";
  btnCont.appendChild(createTabBtn);
}); */

btnCont.addEventListener('click', ()=>{
  let post = document.createElement('div');
  postCont.appendChild(post);
  post.className = "post";
  console.log("btnWork");
});

function homePg(){
   //tatanggalin natin yung signup which is the child of the container
  container.removeChild(signup);  
  home.className = "homePage";
  container.appendChild(home);
  postCont.className = "postCont";
  home.appendChild(postCont);
  
  btnCont.className = "btnCont";
  home.appendChild(btnCont);
  createTabBtn.className = "createTabBtn";
  btnCont.appendChild(createTabBtn);
}

function checkEmail(emailx){
  let emLeng = emailx.length;
  let emAtIndex = emailx.indexOf('@');
  let emProvider = emailx.slice(emAtIndex);
  
  //console.log(emLeng, "index of @: ", emAtIndex, "sliced: ", emProvider);
  if(emProvider != '@gmail.com'){
    console.log('please use valid email');
  }else{
    return true;
  }
}

function passCheck(pass){ 
  if(pass == passRetype.value){
    return true;
  }else{
    return false;
  }
}

signupBtn.addEventListener('click', ()=>{
  let emailSignupKey = false;
  let passwordSignupKey = false;
  let uid = "ARC000";

  const newAcc = {};

  if(checkEmail(email.value) == true){
    emailSignupKey = true;
    newAcc['email'] = email.value;
    console.log(newAcc);
  }else{
    email.value = "";
    alert("invalid email");
  }

  if(passCheck(password.value) == true){
    passwordSignupKey = true;
    newAcc['password'] = password.value;
    console.log(newAcc);
  }else{
    alert('password don\'t match, like u and your crush');
  }

  if(emailSignupKey && passwordSignupKey == true){
    set(ref(db, '/Users/Student/' + uid + 2), newAcc);
    homePg();
  }
 
});

//this function is use to check the existing user
function showUsers(){
  const checkId = ref(db, 'Users/Student');
  onValue(checkId, (data)=>{
    const d = data.val();
    for(let x in d){
      console.log(x);
    }
  });
}

testBtn.addEventListener('click', function(){
  showUsers();
  
});


//signin button v
signin.addEventListener('click', ()=>{
  
});
//signin button^


//Masmadaling kumuha ng user data gamit tong function nato
//Pero masSafe yung readValOnce function kase it catch errors.
//this function will only show the property name not the values
readValue.addEventListener('click', function (){
  const startCountRef = ref(db, 'Users/Student');
  onValue(startCountRef, (snapshot) => {
    const data = snapshot.val();
    //updateStartCount(postElement, data);
    for(let x in data){
     console.log(x); 
    }
    //console.log(data);
  });
});

//ichecheck nang function nato kung nasa database ba yung value na hinahanap natin
readValOnce.addEventListener('click', () => {
  get(child(dbRef, 'Users/Student/user1/email')).then((snapshot)=>{
    if(snapshot.exists()){
      console.log(snapshot.val());
    }else{
      console.log("No data available");
    }
  }).catch((error)=>{
    console.error(error);
  });
});


//updating or deleting data
function addBook(title, author, description){
  const bookData = {
    title: title,
    author: author,
    description: description
  };
  //get a key for a new book
  const newBookKey = push(child(dbRef, 'ThesisBooks')).key;

  //update new book data simultaneously in the book list and the author's book list.
  const updates = {};
  updates['/ThesisBooks/' + newBookKey] = bookData;

  return update(dbRef, updates);
}

const armagedonDes = "The end is near, the signs are clear"+
                     "We clearly saw that all that what is written"+
                     "is happened and continuously happening";

//addBook('armagedon', 'joms', armagedonDes);

function updateSpec(updateKey){
  const upData = {
    title: updateKey
  };

  const updates = {};//Sinubukan kong gawing string yung updata. then napalitan yung author value ng 'upData'. 
  updates['ThesisBooks/book1/author'] = updateKey;
  update(dbRef, updates);
}

//updateSpec('kalma');

