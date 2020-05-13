
var firebaseConfig = {
  apiKey: "AIzaSyBWsT6XTVMGd2cZnBiFYACCbihuGyVlHcU",
  authDomain: "aux22052020.firebaseapp.com",
  databaseURL: "https://aux22052020.firebaseio.com",
  projectId: "aux22052020",
  storageBucket: "aux22052020.appspot.com",
  messagingSenderId: "558046425728",
  appId: "1:558046425728:web:b3dfcb3f6884642f5fac65",
  measurementId: "G-K12FRW1C39",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function enviar() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  }); email - password.html
  //password=document.getElementById("password").value='';
  //email=document.getElementById("email").value='';
}
function Salir() {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
    document.getElementById("login").innerHTML = "No hay nadie Logueado";

  }).catch(function (error) {
    // An error happened.
  });
}
function acceso() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
    // ...
  });
  password=document.getElementById("password").value='';
  email=document.getElementById("email").value='';
}
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    document.getElementById("login").innerHTML = `Se ha logueado ${user.email}`;
  } else {
    document.getElementById("login").innerHTML = "No hay nadie Logueado";
    // User is signed out.
    // ...
  }
});
