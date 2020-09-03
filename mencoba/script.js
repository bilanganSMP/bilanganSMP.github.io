 
 var simpanan=["gg","huh"];
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



var namatugas;

function readlah(){ 
  var simpanid=[];
var task= firebase.database().ref(namatugas);
task.orderByChild("nama").on("child_added",function(data){
  taskvalue = data.val(); 
  if(carikelas==taskvalue.kelas){
    document.getElementById("namaTR").innerHTML+=`
    <tr class="trnilai">
    <td class="trnilai">${taskvalue.sekolah}</td>
    <td class="trnilai">${taskvalue.nama}</td>
    <td class="trnilai">${taskvalue.kelas}</td>
    <td class="trnilai">${taskvalue.nilai}</td>
    <td class="trnilai">${taskvalue.waktu}</td>
    <td class="trnilai"><button class="tombolsoal" onclick="mauhapus(${taskvalue.id})">delete</button></td>
    </tr>
    `
    simpanid.push(taskvalue.id)
    }
    

  
    
    
});

simpanan = simpanid;
console.log(simpanan);
}


function hapussemua(){
  console.log(simpanan);
  var yakin = confirm("Apakah kamu yakin menghapus data?");

  if (yakin) {
      deletetasksemua(simpanan);
  } else {
      
  }
}

function deletetasksemua(simpanan){
  console.log(simpanan);
  for (let i = 0; i< simpanan.length; i++){
  var task= firebase.database().ref(namatugas+simpanan[i]);
  task.remove();}
  reset();
}

function cari(){
  document.getElementById("namaTR").innerHTML="";
  carikelas = document.getElementById("kelas").value
  namatugas = document.getElementById("tugas").value
  console.log(carikelas)
  readlah();
}

function mauhapus(id){
  var yakin = confirm("Apakah kamu yakin menghapus data?");

        if (yakin) {
            deletetask(id);
        } else {
            
        }
}

function deletetask(id){
  
  var task= firebase.database().ref(namatugas+id);
  task.remove();
  reset();
}

function reset(){
document.getElementById("namaTR").innerHTML=""; 
readlah(); 
}

function unduh(){

  var data_type = 'data:application/vnd.ms-excel';
 var table_div = document.getElementById('don');
 var table_html = table_div.outerHTML.replace(/ /g, '%20');

var a = document.createElement('a');
 a.href = data_type + ', ' + table_html;
 a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
 a.click();
}