var bd1 = document.getElementById("bd1");
var bd2 = document.getElementById("bd2");
var bd3 = document.getElementById("bd3");
var bd4 = document.getElementById("bd4");
var bd5 = document.getElementById("bd5");
var bd6 = document.getElementById("bd6");
var bd7 = document.getElementById("bd7");
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;
var counter7 = 0;
bd1.addEventListener('keyup',function(){

    if(bd1.value=="0,33" || bd1.value=="0.33"){
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

    if(bd2.value=="0,5" || bd2.value=="0.5" || bd2.value=="0.50" || bd2.value=="0,50" ){
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

    if(bd3.value=="5,5" || bd3.value=="5.5" || bd3.value=="5.50" || bd3.value=="5,50" ){
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

    if(bd4.value=="5,5" || bd4.value=="5.5" || bd4.value=="5.50" || bd4.value=="5,50" ){
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

bd5.addEventListener('keyup',function(){

    if(bd5.value=="1,9" || bd5.value=="1.9" || bd5.value=="1.90" || bd5.value=="1,90" ){
        bd5.classList.add("jawabpecahanbenar1")
        bd5.classList.remove("jawabpecahansalah1")
        bd5.classList.remove("bd")
        counter5 = 1;
    }else if(bd5.value==""){
        bd5.classList.remove("jawabpecahanbenar1")
        bd5.classList.remove("jawabpecahansalah1")
        bd5.classList.add("bd")
    }else{
        bd5.classList.remove("jawabpecahanbenar1")
        bd5.classList.add("jawabpecahansalah1")
        bd5.classList.remove("bd")

    }

    bujurlah();

})

bd6.addEventListener('keyup',function(){

    if(bd6.value=="0,5" || bd6.value=="0.5" || bd6.value=="0.50" || bd6.value=="0,50" ){
        bd6.classList.add("jawabpecahanbenar1")
        bd6.classList.remove("jawabpecahansalah1")
        bd6.classList.remove("bd")
        counter6 = 1;
    }else if(bd6.value==""){
        bd6.classList.remove("jawabpecahanbenar1")
        bd6.classList.remove("jawabpecahansalah1")
        bd6.classList.add("bd")
    }else{
        bd6.classList.remove("jawabpecahanbenar1")
        bd6.classList.add("jawabpecahansalah1")
        bd6.classList.remove("bd")

    }

    bujurlah();

})

bd7.addEventListener('keyup',function(){

    if(bd7.value=="0,33" || bd7.value=="0.33"){
        bd7.classList.add("jawabpecahanbenar1")
        bd7.classList.remove("jawabpecahansalah1")
        bd7.classList.remove("bd")
        counter7 = 1;
    }else if(bd7.value==""){
        bd7.classList.remove("jawabpecahanbenar1")
        bd7.classList.remove("jawabpecahansalah1")
        bd7.classList.add("bd")
    }else{
        bd7.classList.remove("jawabpecahanbenar1")
        bd7.classList.add("jawabpecahansalah1")
        bd7.classList.remove("bd")

    }

    bujurlah();

})

var a = document.getElementById("jawaban3");
function bujurlah(){
    var hasil=counter1+counter2+counter3+counter4+counter5+counter6+counter7;
    console.log(hasil);
    if(hasil==7){
        
        console.log("benar");
        a.classList.remove("hilang");
        }else{
            a.classList.add("hilang");    
        }

}


document.getElementById("bil1").innerHTML = jsonDatabil[1].bil1;
document.getElementById("bil2").innerHTML = jsonDatabil[1].bil2;

function buat1() {
    var x = document.getElementById("jawab");
  
    x.value = "";
    x.className = x.className.replace("benar","biasa");
    x.className = x.className.replace("salah","biasa");
    jsonDatabil = shuffle(jsonDatabil);
    document.getElementById("bil1").innerHTML = jsonDatabil[1].bil1;
    document.getElementById("bil2").innerHTML = jsonDatabil[1].bil2;
    MathJax.typeset()
}

function cekjawaban(){
    var a = document.getElementById("jawbd1")
    if(document.getElementById("jawab").value==jsonDatabil[1].jawaban){
        a.innerHTML = "jawaban benar";
       } else {
        a.innerHTML = jsonDatabil[1].penjelasan;   
       }
       MathJax.typeset()
}