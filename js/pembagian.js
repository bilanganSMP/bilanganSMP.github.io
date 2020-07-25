function cekjawaban(){
    var a = document.getElementById("p1");
    var b = document.getElementById("p2");
    var c = document.getElementById("p3");
    var d = document.getElementById("p4");

    if(b.checked || c.checked || d.checked){
        document.getElementById("jawaban1").innerHTML="jawaban anda salah";
    }else{
        document.getElementById("jawaban1").innerHTML="jawaban anda benar";
    }

    
}

function cekjawaban1(){
    var a = document.getElementById("ds1");
    var b = document.getElementById("ds2");
    var f = document.getElementById("ds3");
    var d = document.getElementById("sl1k1bujur");
    var e = document.getElementById("sl1k1salah");
    var c = document.getElementById("jaw")
    if(a.value=="" && b.value==""&&f.value==""){
        window.alert("kamu belum mengisi jawaban");
    }else{
        if(a.value=="2" && b.value=="10" && f.value=="20"){
            d.className = d.className.replace("hilang","gasanlogobujursalah")
            e.className = e.className.replace("gasanlogobujursalah","hilang")
        }else{
            e.className = e.className.replace("hilang","gasanlogobujursalah");
            d.className = d.className.replace("gasanlogobujursalah","hilang");
            c.innerHTML = "jawaban kamu salah.<br>20 : 2 = 2 x 10 = 20"
        }
    }
    
}

function cekjawaban2(){
    var a = document.getElementById("dt1");
    var b = document.getElementById("dt2");
    var f = document.getElementById("dt3");
    var d = document.getElementById("sl2k1bujur");
    var e = document.getElementById("sl2k1salah");
    var c = document.getElementById("jaw2")
    if(a.value=="" && b.value==""&&f.value==""){
        window.alert("kamu belum mengisi jawaban");
    }else{
        if(a.value=="2" && b.value=="50" && f.value=="100"){
            d.className = d.className.replace("hilang","gasanlogobujursalah")
            e.className = e.className.replace("gasanlogobujursalah","hilang")
        }else{
            e.className = e.className.replace("hilang","gasanlogobujursalah");
            d.className = d.className.replace("gasanlogobujursalah","hilang");
            c.innerHTML = "jawaban kamu salah.<br>100:2 = 2 x 50 = 100"
        }
    }
    
}

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