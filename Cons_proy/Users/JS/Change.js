function eliminar() {
  var user = firebase.auth().currentUser;
  var db = firebase.firestore();
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var uid = user.uid;
    var user = firebase.auth().currentUser;
    db.collection("Users").doc(uid).delete().then(function() {
      console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
  }
  user.delete().then(function () {
    alert("Se ha borrado el usuario");
    location.href="Users.html";
  }).catch(function (error) {
    alert("Error no hay nadie");
  });
}
function danger(){
  alert("Be careful!");
}
function Update_name() {
  var user = firebase.auth().currentUser;
  var name = document.getElementById("Name_Update").value;
  user.updateProfile({
    displayName: name
  }).then(function () {
    location.reload();
    alert("Nuevo nombre del usuario: [ " + name + " ]");
    // Update successful.
  }).catch(function (error) {
    location.reload();
    alert("Error no se pudo realizar el cambio");
    // An error happened.
  });
}
function generatePasswordRand(length, type) {
  switch (type) {
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
  for (i = 0; i < length; i++) {
    if (type == 'rand') {
      pass += String.fromCharCode((Math.floor((Math.random() * 100)) % 94) + 33);
    } else {
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }
  return pass;
}
function showw() {
  document.getElementById("pass_update").style.display = 'inline';
  document.getElementById("password_update").style.display = 'none';
  document.getElementById("sujerido").innerHTML = `Contraseña sugerida: ${generatePasswordRand(4, "alf") + generatePasswordRand(4, "num")}`;
}

function Update_password1() {

  var con1 = document.getElementById("Password1").value;
  var con2 = document.getElementById("Password2").value;
  var user = firebase.auth().currentUser;

  if (con1 == con2) {
    user.updatePassword(con2).then(function () {
        alert("Contraseña cambiada exitosamente");
        location.reload();
        // Update successful.
      }).catch(function (error) {
        alert("Error al realizar el cambio");
        location.reload();
        // An error happened.
      });
    }else{
      alert("Las contraseñas no son iguales");
      location.reload();     
    }
}
function Update_email() {
  var emailAddress = document.getElementById("Email_Update").value;
  var user = firebase.auth().currentUser;
  user.updateEmail(emailAddress).then(function () {
    location.reload();
    alert("Nueva dirección: " + emailAddress);
    // Update successful.
  }).catch(function (error) {
    location.reload();
    alert("Error no se pudo realizar el cambio");
    // An error happened.
  });
}

