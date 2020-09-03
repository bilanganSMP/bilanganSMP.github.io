 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCPusVlafmDrm2ygaGchmOtOtEFTdOrYiM",
    authDomain: "nilaibilangan.firebaseapp.com",
    databaseURL: "https://nilaibilangan.firebaseio.com",
    projectId: "nilaibilangan",
    storageBucket: "nilaibilangan.appspot.com",
    messagingSenderId: "215560965842",
    appId: "1:215560965842:web:4afcc591a1cc058c43a70b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let kirim = document.getElementById('simpanvalidasi');

  var d = new Date();
  var t = d.getTime();
  var counter = t;

kirim.addEventListener('click', function (e) {
    var aspek1 = document.getElementById("aspek1").value;
    var aspek2 = document.getElementById("aspek2").value;
    var aspek3 = document.getElementById("aspek3").value;
    var aspek4 = document.getElementById("aspek4").value;
    var aspek5 = document.getElementById("aspek5").value;
    var aspek6 = document.getElementById("aspek6").value;
    var aspek7 = document.getElementById("aspek7").value;
    var aspek8 = document.getElementById("aspek8").value;
    var aspek9 = document.getElementById("aspek9").value;
    var aspek10 = document.getElementById("aspek10").value;
    var aspek11 = document.getElementById("aspek11").value;
    var aspek12 = document.getElementById("aspek12").value;
    e.preventDefault();
    createTask(aspek1,aspek2,aspek3,aspek4,aspek5,aspek6,aspek7,aspek8,aspek9,aspek10,aspek11,aspek12);
    var a = document.getElementById("simpanvalidasi");
    var b = document.getElementById("ulang");
    a.className = a.className.replace("tombolsoal","hilang");
    b.className = b.className.replace("hilang","tombolsoal");
})

function createTask(aspek1,aspek2,aspek3,aspek4,aspek5,aspek6,aspek7,aspek8,aspek9,aspek10,aspek11,aspek12){
    console.log(counter);
    counter+=1;
    console.log(counter);
    var task ={
        id:counter,
        aspek1:aspek1,
        aspek2:aspek2,
        aspek3:aspek3,
        aspek4:aspek4,
        aspek5:aspek5,
        aspek6:aspek6,
        aspek7:aspek7,
        aspek8:aspek8,
        aspek9:aspek9,
        aspek10:aspek10,
        aspek11:aspek11,
        aspek12:aspek12
    }
    let db= firebase.database().ref("validasi/"+counter);
    db.set(task);
    window.alert("validasi telah disimpan");
}
