document.getElementById("soalp").innerHTML = jsonData[0].soal;

function cekjawabanacak(){
    var a = document.getElementById("buat1");
    var b = document.getElementById("penjelasan");
    var c = document.getElementById("logobujur");
    var d = document.getElementById("logosalah");
    if (a.value==""){
        window.alert("kamu belum memilih jawaban");
    }else{
    if(a.value==jsonData[0].jawaban){
        c.className = c.className.replace("hilang","gasanlogobujursalah");
        d.className = d.className.replace("gasanlogobujursalah","hilang");
        b.innerHTML = "jawaban kamu benar";
    }else{
        b.innerHTML = jsonData[0].penjelasan;
        d.className = d.className.replace("hilang","gasanlogobujursalah");
        c.className = c.className.replace("gasanlogobujursalah","hilang");
        
    }
}
}

function buat() {
    var c = document.getElementById("logobujur");
    var d = document.getElementById("logosalah");
    var x = document.getElementById("soalp");
    var y = document.getElementById("buat1");
    var z = document.getElementById("penjelasan");
    c.className = c.className.replace("gasanlogobujursalah","hilang");
    d.className = d.className.replace("gasanlogobujursalah","hilang");
    y.value = "";
    jsonData = shuffle(jsonData);
    x.innerHTML = jsonData[0].soal;
    z.innerHTML = "";

  
}

function secontoh(){
    var a = document.getElementById("contoh1");
    var b = document.getElementById("contoh2");

    a.className = a.className.replace("uklat","hilang");
    b.className = b.className.replace("hilang","uklat");

}

function sebcontoh(){

    var a = document.getElementById("contoh1");
    var b = document.getElementById("contoh2");

    b.className = b.className.replace("uklat","hilang");
    a.className = a.className.replace("hilang","uklat");


}