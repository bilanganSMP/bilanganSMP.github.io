function cekjawaban(){
    var a = document.getElementById("p1");
    var b = document.getElementById("p2");
    var c = document.getElementById("p3");
    var d = document.getElementById("p4");

    if(a.checked && c.checked && d.checked){
        document.getElementById("jawaban1").innerHTML="jawaban anda tepat";
    }else{
        document.getElementById("jawaban1").innerHTML="jawaban anda masih salah";
    }

    
}

function selanjutnya(){
    var a = document.getElementById("pertanyaan1pertambahan");
    var b = document.getElementById("pertanyaan2pertambahan");

    a.className = a.className.replace("uklat","hilang");
    b.className = b.className.replace("hilang","uklat");

    document.getElementById("sl1k1").value = "";
    document.getElementById("sl1k2").value = "";
    document.getElementById("sl1k3").value = "";
    document.getElementById("sl2k1").value = "";
    document.getElementById("sl2k2").value = "";
    document.getElementById("sl2k3").value = "";
}

function cekjawaban1(){
    var a = document.getElementById("sln1k1");
    var b = document.getElementById("sln1k2");
    var c = document.getElementById("sln1k3");
    var d = document.getElementById("sln1k1bujur");
    var e = document.getElementById("sln1k1salah");
    

    if(a.value=="a" && b.value=="+" && c.value=="b"){
        d.className = d.className.replace("hilang","gasanlogobujursalah")
        e.className = e.className.replace("gasanlogobujursalah","hilang")
    }else{
        e.className = e.className.replace("hilang","gasanlogobujursalah")
        d.className = d.className.replace("gasanlogobujursalah","hilang")
    }
}

function cekjawabanpengurangan2(){
    var a = document.getElementById("sln2k1");
    var b = document.getElementById("sln2k2");
    var c = document.getElementById("sln2k3");
    var d = document.getElementById("sln2k1bujur");
    var e = document.getElementById("sln2k1salah");
    

    if(a.value=="-a" && b.value=="+" && c.value=="b"){
        d.className = d.className.replace("hilang","gasanlogobujursalah")
        e.className = e.className.replace("gasanlogobujursalah","hilang")
    }else{
        e.className = e.className.replace("hilang","gasanlogobujursalah")
        d.className = d.className.replace("gasanlogobujursalah","hilang")
    }
}

function sebelumnyapengurangan(){
    var a = document.getElementById("pertanyaan1pengurangan");
    var b = document.getElementById("pertanyaan2pengurangan");

    a.className = a.className.replace("hilang","uklat");
    b.className = b.className.replace("uklat","hilang");

    document.getElementById("pp1").checked = false;
    document.getElementById("pp2").checked = false;
    document.getElementById("pp3").checked = false;
    document.getElementById("pp4").checked = false; 
}

function resetsl2(){
    var d = document.getElementById("sln2k1bujur");
    var e = document.getElementById("sln2k1salah");
    var a = document.getElementById("sln1k1bujur");
    var b = document.getElementById("sln1k1salah");
    e.className = e.className.replace("gasanlogobujursalah","hilang")
    d.className = d.className.replace("gasanlogobujursalah","hilang")

    a.className = a.className.replace("gasanlogobujursalah","hilang")
    b.className = b.className.replace("gasanlogobujursalah","hilang")

}
