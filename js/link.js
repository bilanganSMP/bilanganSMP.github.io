function fungsi(mat,matt,mattt,mati,klik1materi2,klik2materi2,hasill) {
    var t = document.getElementById(mati); 
    var x = document.getElementById(mat);
    var y = document.getElementById(matt);
    var z = document.getElementById(mattt);
    var c = document.getElementById(hasill);
    var a = document.getElementById(klik1materi2);
    var b = document.getElementById(klik2materi2);
   
    
        x.className = x.className.replace("contentt","hilang");
     
        y.className = y.className.replace("hilang","contentt");
       
        z.className = z.className.replace("hilang","contentt");
    
        t.className = t.className.replace("contentt","hilanglat");

       a.className = a.className.replace("contentt","hilang");
        
        b.className = b.className.replace("contentt","hilang");

        c.className = c.className.replace("contentt","hilang");

    document.getElementById('mau').src = document.getElementById('mau').src
    document.getElementById('mauu').src = document.getElementById('mauu').src
}

function latihan1(pi,pi1,pi2,klik1materi2,klik2materi2,hasill){
    var x = document.getElementById(pi);
    var y = document.getElementById(pi1);
    var z = document.getElementById(pi2);
    var a = document.getElementById(klik1materi2);
    var b = document.getElementById(klik2materi2);
    var c = document.getElementById(hasill);
        x.className = x.className.replace("hilanglat","contentt");

        y.className = y.className.replace("contentt","hilang");
   
        z.className = z.className.replace("contentt","hilang");
    
        a.className = a.className.replace("contentt","hilang");
        
        b.className = b.className.replace("contentt","hilang");
        c.className = c.className.replace("contentt","hilang");
    }
        
function halaman2(mat,matt,mattt,mati,mati1,mati2,hasill) {
    var a = document.getElementById(mat); 
    var b = document.getElementById(matt);
    var c = document.getElementById(mattt);
    var d = document.getElementById(mati);
    var e = document.getElementById(mati1);
    var f = document.getElementById(mati2);
    var g = document.getElementById(hasill);
   
        a.className = a.className.replace("hilang","contentt");
     
        b.className = b.className.replace("hilang","contentt");
       
        c.className = c.className.replace("contentt","hilang");
    
        d.className = d.className.replace("contentt","hilang");

        e.className = e.className.replace("contentt","hilanglat1");
        f.className = f.className.replace("contentt","hilang");
        g.className = g.className.replace("contentt","hilang");
        document.getElementById('1').src = document.getElementById('1').src
        document.getElementById('2').src = document.getElementById('2').src
        document.getElementById('3').src = document.getElementById('3').src 

}

function selanjutnya(){
    var a = document.getElementById("pertanyaan1pertambahan");
    var b = document.getElementById("pertanyaan2pertambahan");

    a.className = a.className.replace("uklat","hilang");
    b.className = b.className.replace("hilang","uklat");

    document.getElementById("sl1k1").value = "";
    document.getElementById("sl1k2").value = "";
   
    document.getElementById("sl2k1").value = "";
    document.getElementById("sl2k2").value = "";
    document.getElementById("sl2k3").value = "";
}

function selanjutnya1(){
    var a = document.getElementById("pertanyaan2pertambahan");
    var b = document.getElementById("pertanyaan3pertambahan");

    a.className = a.className.replace("uklat","hilang");
    b.className = b.className.replace("hilang","uklat");

    document.getElementById("sl1k1").value = "";
    document.getElementById("sl1k2").value = "";
   
    document.getElementById("sl2k1").value = "";
    document.getElementById("sl2k2").value = "";
    document.getElementById("sl2k3").value = "";
}

function selanjutnya2(){
    var a = document.getElementById("pertanyaan3pertambahan");
    var b = document.getElementById("pertanyaan4pertambahan");

    a.className = a.className.replace("uklat","hilang");
    b.className = b.className.replace("hilang","uklat");

    document.getElementById("sl1k1").value = "";
    document.getElementById("sl1k2").value = "";
   
    document.getElementById("sl2k1").value = "";
    document.getElementById("sl2k2").value = "";
    document.getElementById("sl2k3").value = "";
}

function sebelumnya(){
    var a = document.getElementById("pertanyaan1pertambahan");
    var b = document.getElementById("pertanyaan2pertambahan");

    a.className = a.className.replace("hilang","uklat");
    b.className = b.className.replace("uklat","hilang");

    document.getElementById("p1").checked = false;
    document.getElementById("p2").checked = false;
    document.getElementById("p3").checked = false;
    document.getElementById("p4").checked = false; 
}

function sebelumnya1(){
    var a = document.getElementById("pertanyaan2pertambahan");
    var b = document.getElementById("pertanyaan3pertambahan");

    a.className = a.className.replace("hilang","uklat");
    b.className = b.className.replace("uklat","hilang");

    
}

function sebelumnya2(){
    var a = document.getElementById("pertanyaan3pertambahan");
    var b = document.getElementById("pertanyaan4pertambahan");

    a.className = a.className.replace("hilang","uklat");
    b.className = b.className.replace("uklat","hilang");

    
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

function resetsl1(){
    var d = document.getElementById("sl2k1bujur");
    var e = document.getElementById("sl2k1salah");
    var a = document.getElementById("sl1k1bujur");
    var b = document.getElementById("sl1k1salah");
    e.className = e.className.replace("gasanlogobujursalah","hilang")
    d.className = d.className.replace("gasanlogobujursalah","hilang")

    a.className = a.className.replace("gasanlogobujursalah","hilang")
    b.className = b.className.replace("gasanlogobujursalah","hilang")

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

function selanjutnyapengurangan(){
    var a = document.getElementById("pertanyaan1pengurangan");
    var b = document.getElementById("pertanyaan2pengurangan");

    a.className = a.className.replace("uklat","hilang");
    b.className = b.className.replace("hilang","uklat");

    document.getElementById("sln1k1").value = "";
    document.getElementById("sln1k2").value = "";
    document.getElementById("sln1k3").value = "";
    document.getElementById("sln2k1").value = "";
    document.getElementById("sln2k2").value = "";
    document.getElementById("sln2k3").value = "";
}


    function next(){
        var a = document.getElementById("a1");
        var b = document.getElementById("a2");
    var c = document.getElementById("a3");
a.className=a.className.replace("gasansoal","hilang");
   b.className=b.className.replace("hilang","gasansoal");
    
}

function next1(){
    var a = document.getElementById("a1");
    var b = document.getElementById("a2");
var c = document.getElementById("a3");
    b.className=b.className.replace("gasansoal","hilang");
   c.className=c.className.replace("hilang","gasansoal");

}

function pre(){
    var a = document.getElementById("a1");
    var b = document.getElementById("a2");
var c = document.getElementById("a3");
    b.className=b.className.replace("gasansoal","hilang");
   a.className=a.className.replace("hilang","gasansoal");

}

function pre1(){
    var a = document.getElementById("a1");
    var b = document.getElementById("a2");
var c = document.getElementById("a3");
    c.className=c.className.replace("gasansoal","hilang");
   b.className=b.className.replace("hilang","gasansoal");

}

function next2(){
    var a = document.getElementById("a2");
    var b = document.getElementById("a4");
    var c = document.getElementById("a3");
    c.className=c.className.replace("gasansoal","hilang");
   b.className=b.className.replace("hilang","gasansoal");

}

function pre2(){
    var a = document.getElementById("a1");
    var b = document.getElementById("a3");
var c = document.getElementById("a4");
    c.className=c.className.replace("gasansoal","hilang");
   b.className=b.className.replace("hilang","gasansoal");

}