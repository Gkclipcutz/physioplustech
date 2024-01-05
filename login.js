import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyA70NWQsEqXbEz818Yg57K9rcXtEp6QjJ0",
  authDomain: "sampleauth-a295f.firebaseapp.com",
  projectId: "sampleauth-a295f",
  storageBucket: "sampleauth-a295f.appspot.com",
  messagingSenderId: "242349552732",
  appId: "1:242349552732:web:5b6a445dcf180eefa66299",
  measurementId: "G-5X5YE58QKG"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();
function login() {
  let email=document.getElementById('email').value
  let password=document.getElementById('password').value
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("New user added successfully");
    console.log("user id created");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
function signin() {
  let email=document.getElementById('email').value
  let password=document.getElementById('password').value
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  const user = userCredential.user;
  alert("valid user!");
  console.log("successfully signed in");
})
.catch((error) => {
    alert("incorrect email/password");
  const errorCode = error.code;
  const errorMessage = error.message;
});
}
module.login=login
module.signin=signin