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

function secontoh1(){
    var a = document.getElementById("contoh2");
    var b = document.getElementById("contoh3");

    a.className = a.className.replace("uklat","hilang");
    b.className = b.className.replace("hilang","uklat");

}

function sebcontoh1(){

    var a = document.getElementById("contoh2");
    var b = document.getElementById("contoh3");

    b.className = b.className.replace("uklat","hilang");
    a.className = a.className.replace("hilang","uklat");


}

document.getElementById("soalpc1").innerHTML = jsonData[0].soal;
function cekjawaban(){
    var a = document.getElementById("ja1");
    
    var jawab = document.getElementById("jawaban1");
    
    if(a.value==jsonData[0].jawaban){
        jawab.innerHTML = "jawaban kamu benar";
        jawab.classList.remove("hilang")
        jawab.classList.add("kolompembahasan")
    }else{
        jawab.innerHTML = jsonData[0].penjelasan;
        jawab.classList.remove("hilang")
        jawab.classList.add("kolompembahasan")
    }

    

MathJax.typeset()
}

function buat() {
    var x = document.getElementById("soalpc1");
    var y = document.getElementById("jawaban1");
    var a = document.getElementById("ja1")
    y.innerHTML = "";
    y.classList.add("hilang")
        y.classList.remove("kolompembahasan")
    a.value = "";
    jsonData = shuffle(jsonData);
    x.innerHTML = jsonData[0].soal;
    MathJax.typeset()
    
  
}

document.getElementById("soalpc2").innerHTML = jsonData1[0].soal;
function cekjawaban1(){
    var a = document.getElementById("ja2");
    
    var jawab = document.getElementById("jawaban2");
    
    if(a.value==jsonData1[0].jawaban){
        jawab.innerHTML = "jawaban kamu benar";
        jawab.classList.remove("hilang")
        jawab.classList.add("kolompembahasan")
    }else{
        jawab.innerHTML = jsonData1[0].penjelasan;
        jawab.classList.remove("hilang")
        jawab.classList.add("kolompembahasan")
    }

    

MathJax.typeset()
}

function buat1() {
    var x = document.getElementById("soalpc2");
    var y = document.getElementById("jawaban2");
    var a = document.getElementById("ja2")
    y.innerHTML = "";
    y.classList.add("hilang")
        y.classList.remove("kolompembahasan")
    a.value = "";
    jsonData1 = shuffle(jsonData1);
    x.innerHTML = jsonData1[0].soal;
    MathJax.typeset()
    
  
}