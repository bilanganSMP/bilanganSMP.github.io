var gambar22 = document.getElementById("gambar22");
var gambar32 = document.getElementById("gambar32");
var gambar42 = document.getElementById("gambar42");
var gambar52 = document.getElementById("gambar52");
var gambar31 = document.getElementById("gambar31");
var gambar41 = document.getElementById("gambar41");
var gambar51 = document.getElementById("gambar51");
var gambar1 = document.getElementById("gambar21");
gambar22.addEventListener('keyup',function(){
    if(gambar1.value=="1" && gambar22.value=="4"){
        gambar1.classList.add("jawabpecahanbenar")
        gambar1.classList.remove("jawabpecahan")
        gambar1.classList.remove("jawabpecahansalah")
        gambar22.classList.add("jawabpecahanbenar")
        gambar22.classList.remove("jawabpecahan")
        gambar22.classList.remove("jawabpecahansalah")
    }else{
        gambar1.classList.add("jawabpecahansalah")
        gambar1.classList.remove("jawabpecahanbenar")
        gambar1.classList.remove("jawabpecahan")
        gambar22.classList.add("jawabpecahansalah")
        gambar22.classList.remove("jawabpecahanbenar")
        gambar22.classList.remove("jawabpecahan")
    }
})

gambar32.addEventListener('keyup',function(){
    if(gambar31.value=="2" && gambar32.value=="6"){
        gambar31.classList.add("jawabpecahanbenar")
        gambar31.classList.remove("jawabpecahan")
        gambar31.classList.remove("jawabpecahansalah")
        gambar32.classList.add("jawabpecahanbenar")
        gambar32.classList.remove("jawabpecahan")
        gambar32.classList.remove("jawabpecahansalah")
    }else{
        gambar31.classList.add("jawabpecahansalah")
        gambar31.classList.remove("jawabpecahanbenar")
        gambar31.classList.remove("jawabpecahan")
        gambar32.classList.add("jawabpecahansalah")
        gambar32.classList.remove("jawabpecahanbenar")
        gambar32.classList.remove("jawabpecahan")
    }
})

gambar42.addEventListener('keyup',function(){
    if(gambar41.value=="5" && gambar42.value=="12"){
        gambar41.classList.add("jawabpecahanbenar")
        gambar41.classList.remove("jawabpecahan")
        gambar41.classList.remove("jawabpecahansalah")
        gambar42.classList.add("jawabpecahanbenar")
        gambar42.classList.remove("jawabpecahan")
        gambar42.classList.remove("jawabpecahansalah")
    }else{
        gambar41.classList.add("jawabpecahansalah")
        gambar41.classList.remove("jawabpecahanbenar")
        gambar41.classList.remove("jawabpecahan")
        gambar42.classList.add("jawabpecahansalah")
        gambar42.classList.remove("jawabpecahanbenar")
        gambar42.classList.remove("jawabpecahan")
    }
})

gambar52.addEventListener('keyup',function(){
    if(gambar51.value=="4" && gambar52.value=="12"){
        gambar51.classList.add("jawabpecahanbenar")
        gambar51.classList.remove("jawabpecahan")
        gambar51.classList.remove("jawabpecahansalah")
        gambar52.classList.add("jawabpecahanbenar")
        gambar52.classList.remove("jawabpecahan")
        gambar52.classList.remove("jawabpecahansalah")
    }else{
        gambar51.classList.add("jawabpecahansalah")
        gambar51.classList.remove("jawabpecahanbenar")
        gambar51.classList.remove("jawabpecahan")
        gambar52.classList.add("jawabpecahansalah")
        gambar52.classList.remove("jawabpecahanbenar")
        gambar52.classList.remove("jawabpecahan")
    }
})

document.getElementById("soalpc1").innerHTML = jsonData[0].soal;
function cekjawaban(){
    var a = document.getElementById("j1");
    var b = document.getElementById("j2");
    if(a.checked==true){
    if(a.value==jsonData[0].jawaban){
        console.log("benar");
    }else{
        console.log("salah");
    }
}else{
    if(b.value==jsonData[0].jawaban){
        console.log("benar");
    }else{
        console.log("salah");
    }
}
}

function buat1() {
    var c = document.getElementById("logobujur");
    var d = document.getElementById("logosalah");
    var x = document.getElementById("soalpc1");
    var y = document.getElementById("buat1");
    var z = document.getElementById("penjelasan");
    c.className = c.className.replace("gasanlogobujursalah","hilang");
    d.className = d.className.replace("gasanlogobujursalah","hilang");
    y.value = "";
    jsonData = shuffle(jsonData);
    x.innerHTML = jsonData[0].soal;
    z.innerHTML = "";
    MathJax.typeset()
  
}
