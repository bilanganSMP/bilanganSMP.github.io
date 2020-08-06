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