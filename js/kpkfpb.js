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

function cekjawaban(){
    var a = document.getElementById("ja1");
    var b = document.getElementById("jawaban1");
    if(a.value==""){
        window.alert("anda belum mengisikan jawaban")
    }
    else if(a.value==1200){
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu benar`
    }else{
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu salah<br>pembahasan:<br>
        langkah 1:<br>
        menentukan faktorisasi prima dari 50, 80 dan 120<br>
        <img src="../logo/soal1.png" style="width: 100%;"><br><br>
        faktorisasi prima dari<br> \\[50 = 2 \\times 5 \\times 5 = 2 \\times 5^2\\]<br>
        faktorisasi prima dari<br> \\[80 = 2 \\times 2 \\times 2 \\times 2 \\times 5 = 2^4 \\times 5\\]<br>
        faktorisasi prima dari<br> \\[120 = 2 \\times 2 \\times 2 \\times 3 \\times 5 = 2^3 \\times 3 \\times 5\\]<br><br>
        langkah 2:<br>
        KPK ditentukan dengan mengalikan semua faktor prima dari setiap bilangan, jika ada faktor prima yang sama, dipilih yang pangkatnya tertinggi.<br>
        
        KPK = \\[2^4 \\times 3 \\times 5^2 = 16 \\times 3 \\times 25 = 1200\\] 
        `
    }
    MathJax.typeset()
}

function cekjawabanfpb(){
    var a = document.getElementById("ja1");
    var b = document.getElementById("jawaban1");
    if(a.value==""){
        window.alert("anda belum mengisikan jawaban")
    }
    else if(a.value==1200){
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu benar`
    }else{
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu salah<br>pembahasan:<br>
        langkah 1:<br>
        menentukan faktorisasi prima dari 50, 80 dan 120<br>
        <img src="../logo/soal1.png" style="width: 100%;"><br><br>
        faktorisasi prima dari<br> \\[50 = 2 \\times 5 \\times 5 = 2 \\times 5^2\\]<br>
        faktorisasi prima dari<br> \\[80 = 2 \\times 2 \\times 2 \\times 2 \\times 5 = 2^4 \\times 5\\]<br>
        faktorisasi prima dari<br> \\[120 = 2 \\times 2 \\times 2 \\times 3 \\times 5 = 2^3 \\times 3 \\times 5\\]<br><br>
        langkah 2:<br>
        FPB ditentukan dengan mencari faktor-faktor prima yang sama dari setiap bilangan, lalu memilih faktor yang pangkatnya terendah dan mengalikannya.<br>
        
        FPB = \\[2 \\times 5 = 10\\] 
        `
    }
    MathJax.typeset()
}

function ulang(){
    var a = document.getElementById("ja1");
    var b = document.getElementById("jawaban1");

    a.value="";
    b.classList.add("hilang")
    b.classList.remove("kolompembahasan")
}

function cekjawaban1(){
    var a = document.getElementById("ja2");
    var b = document.getElementById("jawaban2");
    if(a.value==""){
        window.alert("anda belum mengisikan jawaban")
    }
    else if(a.value==28600){
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu benar`
    }else{
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu salah<br>pembahasan:<br>
        langkah 1:<br>
        menentukan faktorisasi prima dari 200, 550 dan 650<br>
        <img src="../logo/soal2.png" style="width: 100%;"><br><br>
        faktorisasi prima dari<br> \\[200 = 2 \\times 2 \\times 2 \\times 5 \\times 5 = 2^3 \\times 5^2\\]<br>
        faktorisasi prima dari<br> \\[550 = 2 \\times 5 \\times 5 \\times 11 = 2 \\times 5^2 \\times 11\\]<br>
        faktorisasi prima dari<br> \\[650 = 2 \\times 5 \\times 5 \\times 13 = 2 \\times 5^2 \\times 13\\]<br><br>
        langkah 2:<br>
        KPK ditentukan dengan mengalikan semua faktor prima dari setiap bilangan, jika ada faktor prima yang sama, dipilih yang pangkatnya tertinggi.<br>
        
        KPK = \\[2^3 \\times 5^2 \\times 11 \\times 13  = 28600\\] 
        `
    }
    MathJax.typeset()
}

function cekjawaban1fpb(){
    var a = document.getElementById("ja2");
    var b = document.getElementById("jawaban2");
    if(a.value==""){
        window.alert("anda belum mengisikan jawaban")
    }
    else if(a.value==28600){
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu benar`
    }else{
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu salah<br>pembahasan:<br>
        langkah 1:<br>
        menentukan faktorisasi prima dari 200, 550 dan 650<br>
        <img src="../logo/soal2.png" style="width: 100%;"><br><br>
        faktorisasi prima dari<br> \\[200 = 2 \\times 2 \\times 2 \\times 5 \\times 5 = 2^3 \\times 5^2\\]<br>
        faktorisasi prima dari<br> \\[550 = 2 \\times 5 \\times 5 \\times 11 = 2 \\times 5^2 \\times 11\\]<br>
        faktorisasi prima dari<br> \\[650 = 2 \\times 5 \\times 5 \\times 13 = 2 \\times 5^2 \\times 13\\]<br><br>
        langkah 2:<br>
        FPB ditentukan dengan mencari faktor-faktor prima yang sama dari setiap bilangan, lalu memilih faktor yang pangkatnya terendah dan mengalikannya.<br>
        
        FPB = \\[2 \\times 5^2 = 2 \\times 25 = 50\\] 
        `
    }
    MathJax.typeset()
}

function ulang1(){
    var a = document.getElementById("ja2");
    var b = document.getElementById("jawaban2");

    a.value="";
    b.classList.add("hilang")
    b.classList.remove("kolompembahasan")
}

function cekjawaban2(){
    var a = document.getElementById("ja3");
    var b = document.getElementById("jawaban3");
    if(a.value==""){
        window.alert("anda belum mengisikan jawaban")
    }
    else if(a.value==30){
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu benar`
    }else{
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu salah<br>pembahasan:<br>
        langkah 1:<br>
        menentukan faktorisasi prima dari 6, 10 dan 15<br>
        <img src="../logo/soal3.png" style="width: 100%;"><br><br>
        faktorisasi prima dari \\[6 = 2 \\times 3\\]<br>
        faktorisasi prima dari \\[10 = 2 \\times 5\\]<br>
        faktorisasi prima dari \\[15 = 3 \\times 5\\]<br><br>
        langkah 2:<br>
        FPB ditentukan dengan mencari faktor-faktor prima yang sama dari setiap bilangan, lalu memilih faktor yang pangkatnya terendah dan mengalikannya.<br>
        
        FPB = \\[5\\] 
        ada 5 anak yang mendapatkan buah dari ibu
        `
    }
    MathJax.typeset()
}

function cekjawaban2fpb(){
    var a = document.getElementById("ja3");
    var b = document.getElementById("jawaban3");
    if(a.value==""){
        window.alert("anda belum mengisikan jawaban")
    }
    else if(a.value==5){
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu benar`
    }else{
        b.classList.remove("hilang")
        b.classList.add("kolompembahasan")
        b.innerHTML=`jawaban kamu salah<br>pembahasan:<br>
        langkah 1:<br>
        menentukan faktorisasi prima dari 50 dan 45<br>
        <img src="../logo/soal3fpb.png" style="width: 100%;"><br><br>
        faktorisasi prima dari<br> \\[50 = 2 \\times 5 \\times 5 = 2 \\times 5^2\\]<br>
        faktorisasi prima dari<br> \\[45 = 3 \\times 3 \\times 5 = 3^2 \\times 5\\]<br><br>
        langkah 2:<br>
        KPK ditentukan dengan mengalikan semua faktor prima dari setiap bilangan, jika ada faktor prima yang sama, dipilih yang pangkatnya tertinggi.<br>
        
        KPK = \\[2 \\times 3 \\times 5 = 30\\] 
        `
    }
    MathJax.typeset()
}

function ulang2(){
    var a = document.getElementById("ja3");
    var b = document.getElementById("jawaban3");

    a.value="";
    b.classList.add("hilang")
    b.classList.remove("kolompembahasan")
}



var nomor21 = document.getElementById("nomor21");
var nomor22 = document.getElementById("nomor22");
var nomor31 = document.getElementById("nomor31");
var nomor32 = document.getElementById("nomor32");
var nomor41 = document.getElementById("nomor41");
var nomor42 = document.getElementById("nomor42");
var nomor43 = document.getElementById("nomor43");
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;
var counter7 = 0;

nomor21.addEventListener('keyup',function(){
    if(nomor21.value=="2"){
        counter1 = 1;
        nomor21.classList.add("jawabpecahanbenar")
        nomor21.classList.remove("belumm")
        nomor21.classList.remove("jawabpecahansalah")
       console.log(nomor21)
    }else if(nomor21.value==""){
        nomor21.classList.remove("jawabpecahanbenar")
        nomor21.classList.add("belumm")
        nomor21.classList.remove("jawabpecahansalah")
    }else{
        nomor21.classList.remove("jawabpecahanbenar")
        nomor21.classList.remove("belumm")
        nomor21.classList.add("jawabpecahansalah")
    }
    bujurlahh()
})

nomor22.addEventListener('keyup',function(){
    if(nomor22.value=="4"){
        counter2 = 1;
        nomor22.classList.add("jawabpecahanbenar")
        nomor22.classList.remove("belumm")
        nomor22.classList.remove("jawabpecahansalah")
    
    }else if(nomor22.value==""){
        nomor22.classList.remove("jawabpecahanbenar")
        nomor22.classList.add("belumm")
        nomor22.classList.remove("jawabpecahansalah")
    }else{
        nomor22.classList.remove("jawabpecahanbenar")
        nomor22.classList.remove("belumm")
        nomor22.classList.add("jawabpecahansalah")
    }
    bujurlahh()
})

nomor31.addEventListener('keyup',function(){
    if(nomor31.value=="12"){
        counter3 = 1;
        nomor31.classList.add("jawabpecahanbenar")
        nomor31.classList.remove("belumm")
        nomor31.classList.remove("jawabpecahansalah")
       console.log(nomor31)
    }else if(nomor31.value==""){
        nomor31.classList.remove("jawabpecahanbenar")
        nomor31.classList.add("belumm")
        nomor31.classList.remove("jawabpecahansalah")
    }else{
        nomor31.classList.remove("jawabpecahanbenar")
        nomor31.classList.remove("belumm")
        nomor31.classList.add("jawabpecahansalah")
    }
    bujurlahh()
})

nomor32.addEventListener('keyup',function(){
    if(nomor32.value=="15"){
        counter4 = 1;
        nomor32.classList.add("jawabpecahanbenar")
        nomor32.classList.remove("belumm")
        nomor32.classList.remove("jawabpecahansalah")
       console.log(nomor21)
    }else if(nomor32.value==""){
        nomor32.classList.remove("jawabpecahanbenar")
        nomor32.classList.add("belumm")
        nomor32.classList.remove("jawabpecahansalah")
    }else{
        nomor32.classList.remove("jawabpecahanbenar")
        nomor32.classList.remove("belumm")
        nomor32.classList.add("jawabpecahansalah")
    }
    bujurlahh()
})

nomor41.addEventListener('keyup',function(){
    if(nomor41.value=="12"){
        counter5 = 1;
        nomor41.classList.add("jawabpecahanbenar")
        nomor41.classList.remove("belumm")
        nomor41.classList.remove("jawabpecahansalah")
       console.log(nomor21)
    }else if(nomor41.value==""){
        nomor41.classList.remove("jawabpecahanbenar")
        nomor41.classList.add("belumm")
        nomor41.classList.remove("jawabpecahansalah")
    }else{
        nomor41.classList.remove("jawabpecahanbenar")
        nomor41.classList.remove("belumm")
        nomor41.classList.add("jawabpecahansalah")
    }
    bujurlahh()
})

nomor42.addEventListener('keyup',function(){
    if(nomor42.value=="16"){
        counter6 = 1;
        nomor42.classList.add("jawabpecahanbenar")
        nomor42.classList.remove("belumm")
        nomor42.classList.remove("jawabpecahansalah")
       console.log(nomor21)
    }else if(nomor42.value==""){
        nomor42.classList.remove("jawabpecahanbenar")
        nomor42.classList.add("belumm")
        nomor42.classList.remove("jawabpecahansalah")
    }else{
        nomor42.classList.remove("jawabpecahanbenar")
        nomor42.classList.remove("belumm")
        nomor42.classList.add("jawabpecahansalah")
    }
    bujurlahh()
})

nomor43.addEventListener('keyup',function(){
    if(nomor43.value=="20"){
        counter7 = 1;
        nomor43.classList.add("jawabpecahanbenar")
        nomor43.classList.remove("belumm")
        nomor43.classList.remove("jawabpecahansalah")
       console.log(nomor21)
    }else if(nomor43.value==""){
        nomor43.classList.remove("jawabpecahanbenar")
        nomor43.classList.add("belumm")
        nomor43.classList.remove("jawabpecahansalah")
    }else{
        nomor43.classList.remove("jawabpecahanbenar")
        nomor43.classList.remove("belumm")
        nomor43.classList.add("jawabpecahansalah")
    }
    bujurlahh()
})


var b = document.getElementById("1");
var tabel1= document.getElementById("tabelnyalum")
var tabel2= document.getElementById("tabeldahbujur")

function bujurlahh(){
    var hasil=counter1+counter2+counter3+counter4+counter5+counter6+counter7;
    console.log(hasil);
    if(hasil==7){
        tabel1.classList.remove("table-bordered")
        tabel1.classList.remove("table")
        tabel1.classList.remove("tabel2")
        tabel1.classList.add("hilang")
        tabel2.classList.add("table-bordered")
        tabel2.classList.add("table")
        tabel2.classList.add("tabel2")
        tabel2.classList.remove("hilang")
        console.log("benar");
        b.classList.remove("hilang");
        }else{
            b.classList.add("anjay");    
        }

}