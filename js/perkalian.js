function cekjawaban(){
    var a = document.getElementById("p1");
    var b = document.getElementById("p2");
    var c = document.getElementById("p3");
    var d = document.getElementById("p4");

    if(a.checked && c.checked && d.checked && b.checked){
        document.getElementById("jawaban1").innerHTML="jawaban anda benar";
    }else{
        document.getElementById("jawaban1").innerHTML="jawaban anda salah";
    }

    
}

function cekjawaban1(){
    var a = document.getElementById("ds1");
    var b = document.getElementById("ds2");
    var f = document.getElementById("ds3");
    var g = document.getElementById("ds4");
    var h = document.getElementById("ds5");
    var d = document.getElementById("sl1k1bujur");
    var e = document.getElementById("sl1k1salah");
    var c = document.getElementById("jaw")
    if(a.value=="" && b.value==""&&f.value==""&&g.value==""&&h.value==""){
        window.alert("kamu belum mengisi jawaban");
    }else{
        if(a.value=="10" && b.value=="-2" && f.value=="10"&& g.value=="23"&& h.value=="-250"){
            d.className = d.className.replace("hilang","gasanlogobujursalah")
            e.className = e.className.replace("gasanlogobujursalah","hilang")
        }else{
            e.className = e.className.replace("hilang","gasanlogobujursalah");
            d.className = d.className.replace("gasanlogobujursalah","hilang");
            c.innerHTML = "jawaban kamu salah.<br>(10 x (-2)) - (10 x 23) = -250"
        }
    }
    
}

function cekjawaban2(){
    var a = document.getElementById("dt1");
    var b = document.getElementById("dt2");
    var f = document.getElementById("dt3");
    var g = document.getElementById("dt4");
    var h = document.getElementById("dt5");
    var d = document.getElementById("sl2k1bujur");
    var e = document.getElementById("sl2k1salah");
    var c = document.getElementById("jaw2")
    if(a.value=="" && b.value==""&&f.value==""&&g.value==""&&h.value==""){
        window.alert("kamu belum mengisi jawaban");
    }else{
        if(a.value=="3" && b.value=="12" && f.value=="3"&& g.value=="21"&& h.value=="99"){
            d.className = d.className.replace("hilang","gasanlogobujursalah")
            e.className = e.className.replace("gasanlogobujursalah","hilang")
        }else{
            e.className = e.className.replace("hilang","gasanlogobujursalah");
            d.className = d.className.replace("gasanlogobujursalah","hilang");
            c.innerHTML = "jawaban kamu salah.<br>(3 x (12)) + (3 x 21) = 99"
        }
    }
    
}