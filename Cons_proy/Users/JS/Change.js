

  function eliminar() {
    var user = firebase.auth().currentUser;
    user.delete().then(function () {
      alert("Se ha borrado el usuario");
      location.reload();
    }).catch(function (error) {
      alert("Error no hay nadie");
    });
  }
  var user = firebase.auth().currentUser;
if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}
function Update_name(){
  var user = firebase.auth().currentUser;
  var name =document.getElementById("Name_Update").value;
  user.updateProfile({
    displayName: name
  }).then(function() {
    location.reload();
    alert("Nombre del usuario: "+name);
    // Update successful.
  }).catch(function(error) {
    location.reload();
    alert("Error no se pudo realizar el cambio");
    // An error happened.
  });
}
function generatePasswordRand(length,type) {
  switch(type){
      case 'num':
          characters = "0123456789";
          break;
      case 'alf':
          characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
      case 'rand':
          //FOR ↓
          break;
      default:
          characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          break;
  }
  var pass = "";
  for (i=0; i < length; i++){
      if(type == 'rand'){
          pass += String.fromCharCode((Math.floor((Math.random() * 100)) % 94) + 33);
      }else{
          pass += characters.charAt(Math.floor(Math.random()*characters.length));   
      }
  }
  return pass;
}
function showw(){
document.getElementById("pass_update").style.display = 'inline'; 
document.getElementById("password_update").style.display = 'none'; 
document.getElementById("sujerido").innerHTML=`Contraseña sujerida: ${generatePasswordRand(4,"alf")+generatePasswordRand(4,"num")}`;
}

function Update_password1(){

  var con1=document.getElementById("Password1").value;
  var con2=document.getElementById("Password2").value; 
  var user = firebase.auth().currentUser;
  if(user.Password==con1){

    
    user.updatePassword(con2).then(function() {
      alert("Contraseña cambiada exitosamente");
      location.reload();
      // Update successful.
    }).catch(function(error) {
      alert("Error al realizar el cambio");
      location.reload();
      // An error happened.
    });

  }
}
function Update_email(){
  var emailAddress =document.getElementById("Email_Update").value;
  var user = firebase.auth().currentUser;
  user.updateEmail(emailAddress).then(function() {
    location.reload();
    alert("Nueva dirección: "+emailAddress);

    // Update successful.
  }).catch(function(error) {
    location.reload();
    alert("Error no se pudo realizar el cambio");
    // An error happened.
  });
}

