
var i = 0;
var correctCount = 0 ;

generate(0);

function generate() {
    var asa = i+1;
    document.getElementById("question").innerHTML = jsonData[i].soal;
    document.getElementById("optt1").innerHTML = jsonData[i].j1;
    document.getElementById("optt2").innerHTML = jsonData[i].j2;
    document.getElementById("optt3").innerHTML = jsonData[i].j3;
    document.getElementById("optt4").innerHTML = jsonData[i].j4;
    document.getElementById("nomor").innerHTML = "soal "+asa+" dari 5";
console.log(jsonData);
console.log(i);
}

function checkAnswer() {
    

    if (document.getElementById("j1").checked == false && document.getElementById("j2").checked == false && document.getElementById("j3").checked == false && document.getElementById("j4").checked == false )
    {
        window.alert("kamu belum memilih jawaban")
       
        
    }
    else{

    if (document.getElementById("j1").checked && jsonData[i].j1 == jsonData[i].jawaban) {
       correctCount=correctCount+20;
    }
    if (document.getElementById("j2").checked && jsonData[i].j2 == jsonData[i].jawaban) {
        correctCount=correctCount+20;
    }
    if (document.getElementById("j3").checked && jsonData[i].j3 == jsonData[i].jawaban) {
        correctCount=correctCount+20;
    }
    
    if (document.getElementById("j4").checked && jsonData[i].j4 == jsonData[i].jadwal) {
        correctCount=correctCount+20;
    }
    
   
    document.getElementById("j1").checked = false;
    document.getElementById("j2").checked = false;
    document.getElementById("j3").checked = false;
    document.getElementById("j4").checked = false;
   i = i + 1;
}

    if(jsonData.length-2 < i){
        document.getElementById("latihan").className = document.getElementById("latihan").className.replace("contentt","hilanglat")
        document.getElementById("hasill").className = document.getElementById("hasill").className.replace("hilang","contentt")
        document.getElementById("skor").innerHTML = "Skor Anda Adalah : "+correctCount+"";
        if (correctCount<79){
            document.getElementById("emot1").src = "../logo/sad.png";   
        }
        i = 0;
        correctCount=0;
        
    }
    
    generate(i);
}

function mundur(){
    i--;
    generate(i);
}

function ulang1(){
    document.getElementById("latihan").className = document.getElementById("latihan").className.replace("hilanglat","contentt")
    document.getElementById("hasill").className = document.getElementById("hasill").className.replace("contentt","hilang")
    i = 0;

}
