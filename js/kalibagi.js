var bd1 = document.getElementById("mencoba1");
var bd2 = document.getElementById("mencoba2atas");
var bd3 = document.getElementById("mencoba2bawah");
var bd4 = document.getElementById("mencoba3atas");
var bd5 = document.getElementById("mencoba3bawah");
var bd12 = document.getElementById("mencoba11");
var bd13 = document.getElementById("mencoba2atas1");
var bd14 = document.getElementById("mencoba2bawah1");
var bd15 = document.getElementById("mencoba3atas1");
var bd16 = document.getElementById("soal2tambahan");
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;

var counterr1 = 0;
var counterr2 = 0;
var counterr3 = 0;
var counterr4 = 0;
var counterr5 = 0;
bd1.addEventListener('keyup',function(){

    if(bd1.value=="12"){
        bd1.classList.add("jawabpecahanbenar1")
        bd1.classList.remove("jawabpecahansalah1")
        bd1.classList.remove("bd")
        counter1 = 1;
    }else if(bd1.value=="" || bd1.value==""){
        bd1.classList.remove("jawabpecahanbenar1")
        bd1.classList.remove("jawabpecahansalah1")
        bd1.classList.add("bd")
    }else{
        bd1.classList.remove("jawabpecahanbenar1")
        bd1.classList.add("jawabpecahansalah1")
        bd1.classList.remove("bd")

    }

bujurlah();
    
})

bd2.addEventListener('keyup',function(){

    if(bd2.value=="36"){
        bd2.classList.add("jawabpecahanbenar1")
        bd2.classList.remove("jawabpecahansalah1")
        bd2.classList.remove("bd")
        counter2 = 1;
    }else if(bd2.value=="" || bd2.value==""){
        bd2.classList.remove("jawabpecahanbenar1")
        bd2.classList.remove("jawabpecahansalah1")
        bd2.classList.add("bd")
    }else{
        bd2.classList.remove("jawabpecahanbenar1")
        bd2.classList.add("jawabpecahansalah1")
        bd2.classList.remove("bd")

    }

    bujurlah();

})

bd3.addEventListener('keyup',function(){

    if(bd3.value=="20"){
        bd3.classList.add("jawabpecahanbenar1")
        bd3.classList.remove("jawabpecahansalah1")
        bd3.classList.remove("bdbawah")
        counter3 = 1;
    }else if(bd3.value==""){
        bd3.classList.remove("jawabpecahanbenar1")
        bd3.classList.remove("jawabpecahansalah1")
        bd3.classList.add("bdbawah")
    }else{
        bd3.classList.remove("jawabpecahanbenar1")
        bd3.classList.add("jawabpecahansalah1")
        bd3.classList.remove("bdbawah")

    }
    bujurlah();


})

bd4.addEventListener('keyup',function(){

    if(bd4.value=="4"){
        bd4.classList.add("jawabpecahanbenar1")
        bd4.classList.remove("jawabpecahansalah1")
        bd4.classList.remove("bd")
        counter4 = 1;
    }else if(bd4.value==""){
        bd4.classList.remove("jawabpecahanbenar1")
        bd4.classList.remove("jawabpecahansalah1")
        bd4.classList.add("bd")
    }else{
        bd4.classList.remove("jawabpecahanbenar1")
        bd4.classList.add("jawabpecahansalah1")
        bd4.classList.remove("bd")

    }

    bujurlah();

})


var b = document.getElementById("jawabancoba2");
function bujurlahh(){
    var hasil=counterr1+counterr2+counterr3+counterr4+counterr5;
    console.log(hasil);
    if(hasil==5){
        
        console.log("benar");
        b.classList.remove("hilang");
        }else{
            b.classList.add("hilang");    
        }

}

function semencoba(){
    var a = document.getElementById("mauu1");
    var b = document.getElementById("mauu2");

    a.className = a.className.replace("marimencoba","hilang");
    b.className = b.className.replace("hilang","marimencoba");

}

function sebmencoba(){

    var a = document.getElementById("mauu1");
    var b = document.getElementById("mauu2");

    b.className = b.className.replace("marimencoba","hilang");
    a.className = a.className.replace("hilang","marimencoba");


}

bd12.addEventListener('keyup',function(){

    if(bd12.value=="11"){
        bd12.classList.add("jawabpecahanbenar1")
        bd12.classList.remove("jawabpecahansalah1")
        bd12.classList.remove("bd")
        bd16.classList.remove("hilang")
    }else if(bd12.value=="" || bd12.value==""){
        bd12.classList.remove("jawabpecahanbenar1")
        bd12.classList.remove("jawabpecahansalah1")
        bd12.classList.add("bd")
        bd16.classList.add("hilang")
    }else{
        bd12.classList.remove("jawabpecahanbenar1")
        bd12.classList.add("jawabpecahansalah1")
        bd12.classList.remove("bd")
        bd16.classList.add("hilang")
    }

    bujurlahh();

})

bd13.addEventListener('keyup',function(){

    if(bd13.value=="40"){
        bd13.classList.add("jawabpecahanbenar1")
        bd13.classList.remove("jawabpecahansalah1")
        bd13.classList.remove("bd")
        counterr3 = 1;
    }else if(bd13.value==""){
        bd13.classList.remove("jawabpecahanbenar1")
        bd13.classList.remove("jawabpecahansalah1")
        bd13.classList.add("bd")
    }else{
        bd13.classList.remove("jawabpecahanbenar1")
        bd13.classList.add("jawabpecahansalah1")
        bd13.classList.remove("bd")

    }
    bujurlahh();


})

bd14.addEventListener('keyup',function(){

    if(bd14.value=="132"){
        bd14.classList.add("jawabpecahanbenar1")
        bd14.classList.remove("jawabpecahansalah1")
        bd14.classList.remove("bdbawah")
        counterr4 = 1;
    }else if(bd14.value==""){
        bd14.classList.remove("jawabpecahanbenar1")
        bd14.classList.remove("jawabpecahansalah1")
        bd14.classList.add("bdbawah")
    }else{
        bd14.classList.remove("jawabpecahanbenar1")
        bd14.classList.add("jawabpecahansalah1")
        bd14.classList.remove("bdbawah")

    }

    bujurlahh();

})

bd15.addEventListener('keyup',function(){

    if(bd15.value=="10"){
        bd15.classList.add("jawabpecahanbenar1")
        bd15.classList.remove("jawabpecahansalah1")
        bd15.classList.remove("bd")
        counterr5 = 1;
    }else if(bd15.value==""){
        bd15.classList.remove("jawabpecahanbenar1")
        bd15.classList.remove("jawabpecahansalah1")
        bd15.classList.add("bd")
    }else{
        bd15.classList.remove("jawabpecahanbenar1")
        bd15.classList.add("jawabpecahansalah1")
        bd15.classList.remove("bd")

    }

    bujurlahh();

})

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


document.getElementById("soalpc1").innerHTML = jsonData[0].soal;

function cekjawaban(){
    var a = document.getElementById("pcatas");
    var b = document.getElementById("pcbawah");
    var jawab = document.getElementById("jawaban1");
    if(a.value==""&&b.value==""){
        window.alert("jawaban anda kosong")
    }
    else if(a.value==jsonData[0].atas && b.value==jsonData[0].bawah){
        jawab.classList.remove("hilang")
        jawab.classList.add("kolompembahasan")
        jawab.innerHTML=jsonData[0].benar;
    }else{
        jawab.innerHTML=jsonData[0].salah;
        jawab.classList.remove("hilang")
        jawab.classList.add("kolompembahasan")
    }
MathJax.typeset()
}

function buat() {
    var x = document.getElementById("soalpc1");
    var y = document.getElementById("jawaban1");
    var a = document.getElementById("pcatas");
    var b = document.getElementById("pcbawah");
    y.innerHTML = "";
    y.classList.add("hilang")
    y.classList.remove("kolompembahasan")
    a.value = "";
    b.value = "";
    jsonData = shuffle(jsonData);
    x.innerHTML = jsonData[0].soal;
    MathJax.typeset()
  
}

function cek(){
    var a = document.getElementById("soal2");
    var c = document.getElementById("jawaban2");
    
    if(a.value==""&&b.value==""){
        window.alert("jawaban anda kosong")
    }
    else if(a.value=="1,55" || a.value=="1,5" || a.value=="1.5" || a.value=="1.55"){
        c.innerHTML="jawaban anda benar"
    }else{
        c.innerHTML="jawaban anda salah<br>penyelesaian:<br>panjang kain sasirangan yang diterima setiap teman rahma<br><Br>\\[6\\frac{1}{5} : 4\\]<br><br>=\\[\\frac{31}{5} \\times \\frac{1}{4}\\]<br><br>=\\[\\frac{31 \\times 1}{5 \\times 4} = \\frac{31}{20}\\]<br><br>=\\[1,55\\] meter"
    }
    MathJax.typeset()
}

function cek1(){
    var a = document.getElementById("soal3");
    var c = document.getElementById("jawaban3");
    
    if(a.value==""&&b.value==""){
        window.alert("jawaban anda kosong")
    }
    else if(a.value=="3,9" || a.value=="3.9"){
        c.innerHTML="jawaban anda benar"
    }else{
        c.innerHTML="jawaban anda salah<br>penyelesaian:<br>panjang kayu ulin<br><Br>\\[0,65 \\times 6 = \\frac{65}{100} \\times 6\\]<br><br>=\\[\\frac{65 \\times 6}{100}\\]<br><br>=\\[\\frac{390}{100} = 3,9\\] meter"
    }
    MathJax.typeset()
}