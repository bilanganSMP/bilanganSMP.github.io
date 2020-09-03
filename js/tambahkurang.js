document.getElementById("soalpc1").innerHTML = jsonData[0].soal;

function cekjawaban(){
    var a = document.getElementById("pcatas");
    var b = document.getElementById("pcbawah");
    var jawab = document.getElementById("jawaban1");
    if(a.value==""&&b.value==""){
        window.alert("jawaban anda kosong")
    }
    else if(a.value==jsonData[0].atas && b.value==jsonData[0].bawah){
        jawab.innerHTML=jsonData[0].benar;
    }else{
        jawab.innerHTML=jsonData[0].salah;
    }
MathJax.typeset()
}

function buat() {
    var x = document.getElementById("soalpc1");
    var y = document.getElementById("jawaban1");
    var a = document.getElementById("pcatas");
    var b = document.getElementById("pcbawah");
    y.innerHTML = "";
    a.value = "";
    b.value = "";
    jsonData = shuffle(jsonData);
    x.innerHTML = jsonData[0].soal;
    MathJax.typeset()
  
}

function cek(){
    var a = document.getElementById("pcatas1");
    var b = document.getElementById("pcbawah1");
    var c = document.getElementById("jawaban2");
    
    if(a.value==""&&b.value==""){
        window.alert("jawaban anda kosong")
    }
    else if(a.value=="5"&&b.value=="12"){
        c.innerHTML="jawaban anda benar"
    }else{
        c.innerHTML="jawaban anda salah<br>penyelesaian:<br>\\[1-\\frac{1}{3}-\\]25%<br><br>=\\[\\frac{3}{3} - \\frac{1}{3} - \\frac{25:25}{100:25}\\]<br><br>=\\[\\frac{3}{3} - \\frac{1}{3} - \\frac{1}{4}\\]<br><br>=\\[\\frac{3 \\times 4}{3 \\times 4} - \\frac{1 \\times 4}{3 \\times 4} - \\frac{1 \\times 3}{4 \\times 3}\\]<br><br>=\\[\\frac{12}{12} - \\frac{4}{12} - \\frac{3}{12} = \\frac{5}{12}\\]"
    }
    MathJax.typeset()
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

var bd1 = document.getElementById("mencoba1atas");
var bd2 = document.getElementById("mencoba1bawah");
var bd3 = document.getElementById("mencoba2atas");
var bd4 = document.getElementById("mencoba3atas");
var bd11 = document.getElementById("mencoba1atas1");
var bd12 = document.getElementById("mencoba1bawah1");
var bd13 = document.getElementById("mencoba2atas1");
var bd14 = document.getElementById("mencoba3atas1");
var bd15 = document.getElementById("mencoba4atas1");

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

    if(bd1.value=="3x8" || bd1.value=="3 x 8"){
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

    if(bd2.value=="5x8" || bd2.value=="5 x 8"){
        bd2.classList.add("jawabpecahanbenar1")
        bd2.classList.remove("jawabpecahansalah1")
        bd2.classList.remove("bdbawah")
        counter2 = 1;
    }else if(bd2.value=="" || bd2.value==""){
        bd2.classList.remove("jawabpecahanbenar1")
        bd2.classList.remove("jawabpecahansalah1")
        bd2.classList.add("bdbawah")
    }else{
        bd2.classList.remove("jawabpecahanbenar1")
        bd2.classList.add("jawabpecahansalah1")
        bd2.classList.remove("bdbawah")

    }

    bujurlah();

})

bd3.addEventListener('keyup',function(){

    if(bd3.value=="24"){
        bd3.classList.add("jawabpecahanbenar1")
        bd3.classList.remove("jawabpecahansalah1")
        bd3.classList.remove("bd")
        counter3 = 1;
    }else if(bd3.value==""){
        bd3.classList.remove("jawabpecahanbenar1")
        bd3.classList.remove("jawabpecahansalah1")
        bd3.classList.add("bd")
    }else{
        bd3.classList.remove("jawabpecahanbenar1")
        bd3.classList.add("jawabpecahansalah1")
        bd3.classList.remove("bd")

    }
    bujurlah();


})

bd4.addEventListener('keyup',function(){

    if(bd4.value=="69"){
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


var a = document.getElementById("jawabancoba1");
function bujurlah(){
    var hasil=counter1+counter2+counter3+counter4;
    console.log(hasil);
    if(hasil==4){
        
        console.log("benar");
        a.classList.remove("hilang");
        }else{
            a.classList.add("hilang");    
        }

}











bd11.addEventListener('keyup',function(){

    if(bd11.value=="1x10" || bd11.value=="1 x 10"){
        bd11.classList.add("jawabpecahanbenar1")
        bd11.classList.remove("jawabpecahansalah1")
        bd11.classList.remove("bd")
        counterr1 = 1;
    }else if(bd11.value=="" || bd11.value==""){
        bd11.classList.remove("jawabpecahanbenar1")
        bd11.classList.remove("jawabpecahansalah1")
        bd11.classList.add("bd")
    }else{
        bd11.classList.remove("jawabpecahanbenar1")
        bd11.classList.add("jawabpecahansalah1")
        bd11.classList.remove("bd")

    }

bujurlahh();
    
})

bd12.addEventListener('keyup',function(){

    if(bd12.value=="3x10" || bd2.value=="3 x 10"){
        bd12.classList.add("jawabpecahanbenar1")
        bd12.classList.remove("jawabpecahansalah1")
        bd12.classList.remove("bdbawah")
        counterr2 = 1;
    }else if(bd12.value=="" || bd12.value==""){
        bd12.classList.remove("jawabpecahanbenar1")
        bd12.classList.remove("jawabpecahansalah1")
        bd12.classList.add("bdbawah")
    }else{
        bd12.classList.remove("jawabpecahanbenar1")
        bd12.classList.add("jawabpecahansalah1")
        bd12.classList.remove("bdbawah")

    }

    bujurlahh();

})

bd13.addEventListener('keyup',function(){

    if(bd13.value=="10"){
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

    if(bd14.value=="3"){
        bd14.classList.add("jawabpecahanbenar1")
        bd14.classList.remove("jawabpecahansalah1")
        bd14.classList.remove("bd")
        counterr4 = 1;
    }else if(bd14.value==""){
        bd14.classList.remove("jawabpecahanbenar1")
        bd14.classList.remove("jawabpecahansalah1")
        bd14.classList.add("bd")
    }else{
        bd14.classList.remove("jawabpecahanbenar1")
        bd14.classList.add("jawabpecahansalah1")
        bd14.classList.remove("bd")

    }

    bujurlahh();

})

bd15.addEventListener('keyup',function(){

    if(bd15.value=="1"){
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