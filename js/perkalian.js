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