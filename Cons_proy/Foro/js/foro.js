firebase.initializeApp({
    apiKey: "AIzaSyBWsT6XTVMGd2cZnBiFYACCbihuGyVlHcU",
    authDomain: "aux22052020.firebaseapp.com",
    databaseURL: "https://aux22052020.firebaseio.com",
    projectId: "aux22052020",
    storageBucket: "aux22052020.appspot.com",
    messagingSenderId: "558046425728",
    appId: "1:558046425728:web:b3dfcb3f6884642f5fac65",
    measurementId: "G-K12FRW1C39",
});
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
      console.log("Esta logueado "+ user.email);
    } else {
      console.log("No hay nadie logueado");
      // User is signed out.
      // ...
    }
  });

var db = firebase.firestore();

var providerGoogle = new firebase.auth.GoogleAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();

var foto = document.getElementById("avatar");
var nombre = document.getElementById("root");

$('#btn1').click(function() {

    var email = document.getElementById("email").value;

    var password = document.getElementById("pass").value;

    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(result) {
            document.getElementById("email").value = "";
            document.getElementById("pass").value = "";
            document.getElementById("email").focus();
            guardarDatosE(result.user);
        })
        .catch(function(error) {
            alert("Ocurrio un problema de inicio de sesión...");
            var errorCode = error.code;
            var errorMessage = error.message;
        });
});

$('#btn2').click(function() {

    var email = document.getElementById("email").value;

    var password = document.getElementById("pass").value;

    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function(result) {
            document.getElementById("email").value = "";
            document.getElementById("pass").value = "";
            document.getElementById("email").focus();
            guardarDatosE(result.user);
        })
        .catch(function(error) {
            alert("Ocurrio un problema de resgistro...");
            var errorCode = error.code;
            var errorMessage = error.message;
        });
});

$('#loginGoogle').click(function() {
    firebase.auth()
        .signInWithPopup(providerGoogle)
        .then(function(result) {
            console.log(result.user);
            document.getElementById("email").value = "";
            document.getElementById("pass").value = "";
            document.getElementById("email").focus();
            guardarDatos(result.user);
        });
});

$('#loginFacebook').click(function() {
    firebase.auth()
        .signInWithPopup(providerFacebook)
        .then(function(result) {
            console.log(result.user);
            document.getElementById("email").value = "";
            document.getElementById("pass").value = "";
            document.getElementById("email").focus();
            guardarDatos(result.user);
        });
});

function cerrarSesion() {
    window.location.replace("../../Public/Main.html");
}

function verificarUsuario() {

    firebase.auth().onAuthStateChanged(function(user) {

        if (user) {

            if (user.displayName === null) {

                nombre1 = user.email;
                foto1 = 'https://cdn.iconscout.com/icon/free/png-512/apple-mail-493152.png';
                id1 = user.uid;
                email1 = user.email;
            } else {

                nombre1 = user.displayName;
                foto1 = user.photoURL;
                id1 = user.uid;
                email1 = user.email;
            }



            mostrarP(id1);
            mostrarR(id1);

            nombre.textContent = nombre1;
            foto.setAttribute('src', foto1);
        }
    });
}

function guardarDatos(user) {

    db.collection("Usuarios").doc(user.uid).set({
            Nombre: user.displayName,
            Email: user.email,
            Foto: user.photoURL,
            UserId: user.uid,
        })
        .then(function() {

            Swal.fire({

                title: "Bienvenido!",

                icon: "success",

                html: '<p>' + user.displayName + '</p><br><button type="button" class="btn-ghostB roundB" onclick="toForo()">Continuar</button>',

                showConfirmButton: false,

                allowOutsideClick: false,

                allowEscapeKey: false,

                allowEnterKey: false,

                stopKeydownPropagation: false

            });
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

function guardarDatosE(user) {

    db.collection("Users").doc(user.uid).set({
            Nombre: user.email,
            Email: user.email,
            Foto: 'https://cdn.iconscout.com/icon/free/png-512/apple-mail-493152.png',
            UserId: user.uid
        })
        .then(function() {

            Swal.fire({

                title: "Bienvenido!",

                icon: "success",

                html: '<p>' + user.email + '</p><br><button type="button" class="btn-ghostB roundB" onclick="toForo()">Continuar</button>',

                showConfirmButton: false,

                allowOutsideClick: false,

                allowEscapeKey: false,

                allowEnterKey: false,

                stopKeydownPropagation: false

            });
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

function toForo() {
    window.location.replace("http://localhost:8887/foro.html");
}

function getHora() {

    var fecha = new Date(),
        horas = fecha.getHours(),
        ampm,
        minutos = fecha.getMinutes();

    if (horas >= 12) {
        horas = horas - 12;
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    if (horas == 0) {
        horas = 12;
    }

    if (minutos < 10) { minutos = "0" + minutos; }

    horaT = horas + ":" + minutos + " " + ampm;

    return horaT;
}

function getFecha() {

    var fecha = new Date(),
        diaSemana1 = fecha.getDay(),
        dia1 = fecha.getDate(),
        mes1 = fecha.getMonth(),
        year = fecha.getFullYear();

    var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    var diaSemana2 = semana[diaSemana1],
        meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    mes2 = meses[mes1];
    fechaT = diaSemana2 + " " + dia1 + " de " + mes2 + " del " + year;

    return fechaT;
}

function guardarR(pregunta) {

    var user = firebase.auth().currentUser;

    var respuesta = document.getElementById("dato").value;

    var nombre1 = user.displayName,
        foto1 = user.photoURL;

    fecha = getFecha();

    hora = getHora();

    if (respuesta.length == 0) {

        Swal.fire({

            title: "Campo vacio",

            text: "Ingresa la respuesta...",

            icon: "warning",

            allowOutsideClick: false,

            allowEscapeKey: false,

            allowEnterKey: false,

            stopKeydownPropagation: false

        });
    } else {

        if (user.displayName === null) {

            nombre1 = user.email;
            foto1 = 'https://cdn.iconscout.com/icon/free/png-512/apple-mail-493152.png';

        } else {

            nombre1 = user.displayName;
            foto1 = user.photoURL;
        }

        db.collection("Foro").doc(pregunta).collection("Respuestas").add({
                Nombre: nombre1,
                Email: user.email,
                Foto: foto1,
                UserId: user.uid,
                Respuesta: respuesta,
                Fecha: fecha,
                Hora: hora
            })
            .then(function() {
                document.getElementById("dato").value = "";
                Swal.fire({

                    title: "Excelente!",

                    text: "Respuesta añadida exitosamente...",

                    icon: "success",

                    allowOutsideClick: false,

                    allowEscapeKey: false,

                    allowEnterKey: false,

                    stopKeydownPropagation: false
                });
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                alert("Ocurrio un error...")
            });
    }
}

function guardarP() {

    var user = firebase.auth().currentUser;

    var pregunta = document.getElementById("dato").value;

    var nombre1 = user.displayName,
        foto1 = user.photoURL;

    fecha = getFecha();

    hora = getHora();

    if (pregunta.length == 0) {
        Swal.fire({

            title: "Campo vacio",

            text: "Ingresa la pregunta...",

            icon: "warning",

            allowOutsideClick: false,

            allowEscapeKey: false,

            allowEnterKey: false,

            stopKeydownPropagation: false

        });
    } else {

        if (user.displayName === null) {

            nombre1 = user.email;
            foto1 = 'https://cdn.iconscout.com/icon/free/png-512/apple-mail-493152.png';

        } else {

            nombre1 = user.displayName;
            foto1 = user.photoURL;
        }

        db.collection("Foro").doc(pregunta).set({
                Nombre: nombre1,
                Email: user.email,
                Foto: foto1,
                UserId: user.uid,
                Pregunta: pregunta,
                Fecha: fecha,
                Hora: hora
            })
            .then(function() {
                document.getElementById("dato").value = "";
                Swal.fire({

                    title: "Excelente!",

                    text: "Pregunta añadida exitosamente...",

                    icon: "success",

                    allowOutsideClick: false,

                    allowEscapeKey: false,

                    allowEnterKey: false,

                    stopKeydownPropagation: false

                });
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                alert("Ocurrio un error...")
            });

    }
}

function mostrarP(id1) {

    var espacioPregunta = document.getElementById("pregunta");

    db.collection("Foro").onSnapshot((querySnapshot) => {

        espacioPregunta.innerHTML = '';

        querySnapshot.forEach((doc) => {

            if (id1 === doc.data().UserId) {

                espacioPregunta.innerHTML += `
                            <div id = "${doc.data().Pregunta}" class="list-group margen">
                                <a id = "espacioP" class="list-group-item list-group-item-action active">
                                    <div class="d-flex w-100 justify-content-start">
                                        <img src="${doc.data().Foto}" class="rounded-circle imguserP">
                                        <h5 class="textuser">Yo</h5>
                                        <small class="fecha">a las ${doc.data().Hora} del día ${doc.data().Fecha}</small>
                                    </div>
                                    <p class="mb-1 pregunta">${doc.data().Pregunta}</p>
                                    <small id="btnRe" onclick='verificarPeticion("${doc.data().Pregunta}",0)' class="respuser"><b>PARA RESPONDER HAZ CLICK AQUI...</b></small>
                                    <button class="btn btn-danger buttonEl" onclick='eliminarP("${doc.id}")'>Eliminar</button>
                                </a>
                            </div>
                            <div id = "R->${doc.data().Pregunta}" class="list-group margen2">
                            </div>
                            `
            } else {

                espacioPregunta.innerHTML += `
                            <div id = "${doc.data().Pregunta}" class="list-group margen">
                                <a id = "espacioP" class="list-group-item list-group-item-action active" onclick='verificarPeticion("${doc.data().Pregunta}",0)'>
                                    <div class="d-flex w-100 justify-content-start">
                                        <img src="${doc.data().Foto}" class="rounded-circle imguserP">
                                        <h5 class="textuser">${doc.data().Nombre}</h5>
                                        <small class="fecha">a las ${doc.data().Hora} del día ${doc.data().Fecha}</small>
                                    </div>
                                    <p class="mb-1 pregunta">${doc.data().Pregunta}</p>
                                    <small id="btnRe" class="respuser"><b>PARA RESPONDER HAZ CLICK AQUI...</b></small>
                                </a>
                            </div>
                            <div id = "R->${doc.data().Pregunta}" class="list-group margen2">
                            </div>
                            `
            }
        });
    });
}

function mostrarR(id1) {

    db.collection("Foro").onSnapshot((querySnapshot) => {

        querySnapshot.forEach((doc1) => {

            id2 = "R->" + doc1.data().Pregunta;

            var espacioRespuestas = document.getElementById(id2);

            db.collection("Foro").doc(doc1.data().Pregunta).collection("Respuestas").onSnapshot((querySnapshot) => {

                espacioRespuestas.innerHTML = '';

                querySnapshot.forEach(function(doc2) {

                    if (id1 === doc2.data().UserId) {

                        espacioRespuestas.innerHTML += `
                                <a class="list-group-item list-group-item-action">
                                    <div class="d-flex w-100 justify-content-start">
                                        <img src="${doc2.data().Foto}" class="rounded-circle imguser">
                                        <h5 class="textuser">Yo</h5>
                                        <small class="fecha">a las ${doc2.data().Hora} del día ${doc2.data().Fecha}</small>
                                    </div>
                                    <p class="mb-1 pregunta">${doc2.data().Respuesta}</p>
                                    <button class="btn btn-danger buttonEl" onclick='eliminarR("${doc1.data().Pregunta}","${doc2.id}")'>Eliminar</button>
                                    <button id = "btnEd" class="btn btn-warning buttonEd" onclick='editarR("${doc1.data().Pregunta}","${doc2.id}")'>Editar</button>
                                </a>
                                `
                    } else {

                        espacioRespuestas.innerHTML += `
                                <a class="list-group-item list-group-item-action">
                                    <div class="d-flex w-100 justify-content-start">
                                        <img src="${doc2.data().Foto}" class="rounded-circle imguser">
                                        <h5 class="textuser">${doc2.data().Nombre}</h5>
                                        <small class="fecha">a las ${doc2.data().Hora} del día ${doc2.data().Fecha}</small>
                                    </div>
                                    <p class="mb-1 pregunta">${doc2.data().Respuesta}</p>
                                </a>
                                `
                    }
                });
            });

        });
    });
}

function eliminarP(id) {

    db.collection("Foro").doc(id).delete().then(function() {
        Swal.fire({

            title: "Excelente!",

            text: "Pregunta eliminada exitosamente...",

            icon: "success",

            allowOutsideClick: false,

            allowEscapeKey: false,

            allowEnterKey: false,

            stopKeydownPropagation: false

        });
    }).catch(function(error) {
        Swal.fire({

            title: "Error",

            text: "Ocurrio un error eliminando la pregunta...",

            icon: "error",

            allowOutsideClick: false,

            allowEscapeKey: false,

            allowEnterKey: false,

            stopKeydownPropagation: false

        });
        console.error("Error removing document: ", error);
    });
}

function eliminarR(idP, idR) {

    db.collection("Foro").doc(idP).collection("Respuestas").doc(idR).delete().then(function() {
        Swal.fire({

            title: "Excelente!",

            text: "Respuesta eliminada exitosamente...",

            icon: "success",

            allowOutsideClick: false,

            allowEscapeKey: false,

            allowEnterKey: false,

            stopKeydownPropagation: false

        });
    }).catch(function(error) {
        Swal.fire({

            title: "Error",

            text: "Ocurrio un error eliminando la respuesta...",

            icon: "error",

            allowOutsideClick: false,

            allowEscapeKey: false,

            allowEnterKey: false,

            stopKeydownPropagation: false

        });
        console.error("Error removing document: ", error);
    });
}

function editarR(idP, idR) {

    var boton1 = document.getElementById("boton");
    boton1.innerHTML = "Editar";

    var text2 = document.getElementById("dato");

    fecha = getFecha();

    hora = getHora();

    boton.onclick = function() {

        if (text2.value === "") {

            Swal.fire({

                title: "Campo vacio",

                text: "Ingresa la respuesta...",

                icon: "warning",

                allowOutsideClick: false,

                allowEscapeKey: false,

                allowEnterKey: false,

                stopKeydownPropagation: false

            });
        } else {

            var updateRef = db.collection("Foro").doc(idP).collection("Respuestas").doc(idR);

            return updateRef.update({
                    Respuesta: text2.value,
                    Fecha: fecha,
                    hora: hora
                })
                .then(function() {
                    boton.innerHTML = "Preguntar";
                    document.getElementById("dato").value = '';
                    Swal.fire({

                        title: "Excelente!",

                        text: "Respuesta editada exitosamente...",

                        icon: "success",

                        allowOutsideClick: false,

                        allowEscapeKey: false,

                        allowEnterKey: false,

                        stopKeydownPropagation: false

                    });
                    console.log("Document successfully updated!");
                })
                .catch(function(error) {
                    Swal.fire({

                        title: "Error",

                        text: "Ocurrio un error editando la respuesta...",

                        icon: "error",

                        allowOutsideClick: false,

                        allowEscapeKey: false,

                        allowEnterKey: false,

                        stopKeydownPropagation: false

                    });
                    console.error("Error updating document: ", error);
                });
        }
    }
}

function verificarPeticion(info, b) {

    var boton2 = document.getElementById("boton");

    var text2 = document.getElementById("dato");

    if (info === "") {

        boton2.textContent = "Preguntar";

        text2.setAttribute('placeholer', "Escribe la pregunta...");

        if (b == 1) {

            if (text2.length > 130) {

                Swal.fire({

                    title: "Demasiado texto!",

                    text: "Solo puedes ingresar 150 caracteres...",

                    icon: "warning",

                    allowOutsideClick: false,

                    allowEscapeKey: false,

                    allowEnterKey: false,

                    stopKeydownPropagation: false
                });
            } else {

                guardarP();

                boton2.setAttribute('onclick', 'verificarPeticion("",' + 1 + ')');
            }
        }

    } else {

        boton2.textContent = "Responder";

        text2.setAttribute('placeholer', "Escribe la respuesta...");

        if (b == 1) {

            if (text2.length > 130) {

                Swal.fire({

                    title: "Demasiado texto!",

                    text: "Solo puedes ingresar 150 caracteres...",

                    icon: "warning",

                    allowOutsideClick: false,

                    allowEscapeKey: false,

                    allowEnterKey: false,

                    stopKeydownPropagation: false
                });

            } else {

                guardarR(info);

                boton2.textContent = "Preguntar";

                text2.setAttribute('placeholer', "Escribe la pregunta...");

                boton2.setAttribute('onclick', 'verificarPeticion("",' + 1 + ')');

            }

        } else {

            boton2.setAttribute('onclick', 'verificarPeticion("' + info + '",' + 1 + ')');
        }
    }
}

function setButton() {

    var boton1 = document.getElementById("boton").setAttribute("onclick", 'verificarPeticion("",' + 1 + ')');
}