
function a() {
    var x = document.getElementById("jawab");
    var y = document.getElementById("bujur");
    var z = document.getElementById("kadabujur");
    x.value = "";
    y.className = y.className.replace("bilabetul","bilahilang");
    z.className = z.className.replace("bilasalah","bilahilang");
    x.className = x.className.replace("benar","biasa");
    x.className = x.className.replace("salah","biasa");
    jsonDatabil = shuffle(jsonDatabil);
    document.getElementById("bil1").innerHTML = jsonDatabil[1].bil1;
    document.getElementById("bil2").innerHTML = jsonDatabil[1].bil2;
  
}