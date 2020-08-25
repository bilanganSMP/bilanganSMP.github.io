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

let kirim = document.getElementById('klik');

  var d = new Date();
  var t = d.getTime();
  var counter = t;

kirim.addEventListener('click', function (e) {
    var nama = document.getElementById("nama").value;
    var kelas = document.getElementById("kelas").value;
    e.preventDefault();
    console.log(nama+kelas);
    createTask(nama,kelas);

})

function createTask(nama,kelas){
    console.log(counter);
    counter+=1;
    console.log(counter);
    var task ={
        nama: nama,
        id:counter,
        kelas:kelas
    }
    let db= firebase.database().ref("nilai/"+counter);
    db.set(task);

}

// function readlah(){
// var task= firebase.database().ref("nilaisubbab8/");
// task.orderByChild("kelas").on("child_added",function(data){
//     var taskvalue = data.val();
//     document.getElementById("namaTR").innerHTML+=`
//     <tr class="trnilai">
//     <td class="trnilai">${taskvalue.sekolah}</td>
//     <td class="trnilai">${taskvalue.nama}</td>
//     <td class="trnilai">${taskvalue.kelas}</td>
//     <td class="trnilai">${taskvalue.nilai}</td>
//     <td class="trnilai">${taskvalue.waktu}</td>
//     </tr>
//     `
    
// });

// }
var carikelas = document.getElementById("kelas").value
carikelas = "";
function readlah(){
var task= firebase.database().ref("nilaisubbab8/");
task.orderByChild("kelas").equalTo(carikelas).on("child_added",function(data){
    var taskvalue = data.val();
    document.getElementById("namaTR").innerHTML+=`
    <tr class="trnilai">
    <td class="trnilai">${taskvalue.sekolah}</td>
    <td class="trnilai">${taskvalue.nama}</td>
    <td class="trnilai">${taskvalue.kelas}</td>
    <td class="trnilai">${taskvalue.nilai}</td>
    <td class="trnilai">${taskvalue.waktu}</td>
    
    </tr>
    `
    
});

}

function cari(){
  document.getElementById("namaTR").innerHTML="";
  carikelas = document.getElementById("kelas").value
  console.log(carikelas)
  readlah();
}
