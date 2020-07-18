


var i = 0;




    document.getElementById("bil1").innerHTML = jsonDatabil[1].bil1;
    document.getElementById("bil2").innerHTML = jsonDatabil[1].bil2;
  


function check(){
    var x = document.getElementById("jawab");
    var y = document.getElementById("bujur");
    var z = document.getElementById("kadabujur");
    if(document.getElementById("jawab").value==jsonDatabil[1].jawaban){
     x.className = x.className.replace("biasa","benar");
     y.className = y.className.replace("bilahilang","bilabetul");
    } else {
        x.className = x.className.replace("biasa","salah");
        z.className = z.className.replace("bilahilang","bilasalah");
    }
}


function cekjawaban2(){
    var a = document.getElementById("sl2k1");
    var b = document.getElementById("sl2k2");
    var c = document.getElementById("sl2k3");
    var d = document.getElementById("sl2k1bujur");
    var e = document.getElementById("sl2k1salah");
    

    if(a.value=="-a" && b.value=="+" && c.value=="b"){
        d.className = d.className.replace("hilang","gasanlogobujursalah")
        e.className = e.className.replace("gasanlogobujursalah","hilang")
    }else{
        e.className = e.className.replace("hilang","gasanlogobujursalah")
        d.className = d.className.replace("gasanlogobujursalah","hilang")
    }
}

function cekjawaban1(){
    var a = document.getElementById("sl1k1");
    var b = document.getElementById("sl1k2");
    var c = document.getElementById("sl1k3");
    var d = document.getElementById("sl1k1bujur");
    var e = document.getElementById("sl1k1salah");
    

    if(a.value=="a" && b.value=="-" && c.value=="b"){
        d.className = d.className.replace("hilang","gasanlogobujursalah")
        e.className = e.className.replace("gasanlogobujursalah","hilang")
    }else{
        e.className = e.className.replace("hilang","gasanlogobujursalah")
        d.className = d.className.replace("gasanlogobujursalah","hilang")
    }
}

function cekjawaban(){
    var a = document.getElementById("p1");
    var b = document.getElementById("p2");
    var c = document.getElementById("p3");
    var d = document.getElementById("p4");

    if(a.checked && c.checked && d.checked && b.checked){
        document.getElementById("jawaban1").innerHTML="jawaban anda salah";
    }else if(a.checked && c.checked && d.checked) {
        document.getElementById("jawaban1").innerHTML="jawaban anda tepat";
    }else{
        document.getElementById("jawaban1").innerHTML="jawaban anda salah";
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

function cekjawabanpengurangan1(){
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

function cekjawabanpengurangan(){
    var a = document.getElementById("pp1");
    var b = document.getElementById("pp2");
    var c = document.getElementById("pp3");
    var d = document.getElementById("pp4");

    if(a.checked && c.checked && d.checked && b.checked){
        document.getElementById("jawaban2").innerHTML="jawaban anda salah";
    }else if(a.checked == false && b.checked == false && d.checked == false) {
        document.getElementById("jawaban2").innerHTML="jawaban anda tepat";
    }else{
        document.getElementById("jawaban2").innerHTML="jawaban anda salah";
    }

    
}

function cek(){
    var a = document.getElementById("j1");
    var b = document.getElementById("j2");
    

    if(b.checked){
     document.getElementById("penjelasan").innerHTML = "jawaban kamu benar.<br>Penjelasan : bilangan diatas bukan bilangan cacah melainkan bilangan bulat karena diantara bilangan diatas ada bilangan negatif sedangkan bilangan cacah tidak memuat bilangan negatif.";
    }else{
        document.getElementById("penjelasan").innerHTML = "jawaban kamu salah.<br>Penjelasan : bilangan diatas bukan bilangan cacah melainkan bilangan bulat karena diantara bilangan diatas ada bilangan negatif bilangan cacah tidak memuat bilangan negatif.";       
    }

}

function cekkk(){
    var a = document.getElementById("jj2");
    var b = document.getElementById("j2");
    

    if(a.checked){
     document.getElementById("penjelasann").innerHTML = "jawaban kamu benar. 80 termasuk kedalam nilai B karena skalanya 70 sampai lebih dari sama dengan 80. maka 80 termasuk kedalam nilai B";
    }else{
        document.getElementById("penjelasann").innerHTML = "jawaban kamu salah.";       
    }

}