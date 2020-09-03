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

  function readlah(){
    var task= firebase.database().ref("kuncikuis/");
    task.orderByChild("nama").on("child_added",function(data){
      taskvalue = data.val(); 
        if(taskvalue.nilai==0){
        document.getElementById("namaTR").innerHTML+=`
        <tr class="trnilai">
        <td class="trnilai">${taskvalue.kuis}</td>
        <td class="trnilai">
       
        
          <input type="button" style="width: 100%;" class="btn btn-danger" value="kunci" onclick="update('${taskvalue.kuis}','${taskvalue.nilai}')">
          
      
        
      </td>
        </tr>
        `
        }else{
            document.getElementById("namaTR").innerHTML+=`
        <tr class="trnilai">
        <td class="trnilai">${taskvalue.kuis}</td>
        <td class="trnilai">
        
        
        <input type="button"  style="width: 100%;" class="btn btn-success" value="buka" onclick="update('${taskvalue.kuis}','${taskvalue.nilai}')">
        
       
        
      </td>
        </tr>
        `


        }
    });
    } 

function update(kuis,nilai){
if(nilai == 0){
    nilaibaru = 1;
}else{
    nilaibaru = 0;
}

var taskupdate = {
    kuis: kuis,
    nilai: nilaibaru
}

let db = firebase.database().ref("kuncikuis/"+ kuis)
db.set(taskupdate);
window.location="kunci.html"
}
    