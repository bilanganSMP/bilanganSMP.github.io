function shuffle(jsonData) {
    var currentIndex = jsonData.length, temporaryValue, randomIndex;
  
    
    while (0 !== currentIndex) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
     
      temporaryValue = jsonData[currentIndex];
      jsonData[currentIndex] = jsonData[randomIndex];
      jsonData[randomIndex] = temporaryValue;
    }
  
    return jsonData;
  }
var jsonData = [
    {
        "soal" : "10 x 4", 
        "jawaban" : "40",
        "penjelasan" : "jawaban kamu salah<br>penjelasan = 10 x 4 = 40"
    },

    {
        "soal" : "13 x (-4)", 
        "jawaban" : "-52",
        "penjelasan" : "jawaban kamu salah<br>penjelasan = ingat + x - = -, maka 13 x (-4) = -52"
    },

    {
        "soal" : "-3 x 8 x 2", 
        "jawaban" : "-48",
        "penjelasan" : "jawaban kamu salah<br>penjelasan = (-3 x 8 ) x 2 = -24 x 2 = -48"
    },

    {
        "soal" : "-5 x (-5) x 20", 
        "jawaban" : "500",
        "penjelasan" : "jawaban kamu salah<br>penjelasan = (-5 x (-5)) x 20 = 25 x 20 = 500"
    },

    {
        "soal" : "diketahui nilai p = 24, q = -4, r = -6 dan s = 3. Hasil dari (p x q) - (r x s)", 
        "jawaban" : "-78",
        "penjelasan" : "jawaban kamu salah<br>penjelasan = (24 x (-4)) - (-6 x 3)<br>= -96 - (-18)<br>=-96 + 18 = -78"
    },

    {
        "soal" : "Untuk membantu korban bencana alam, 37 murid sekolah dasar mengumpulkan uang. Setiap orang menyumbang 2500 rupiah. uang yang terkumpul =", 
        "jawaban" : "92500",
        "penjelasan" : "jawaban kamu salah<br>penjelasan = 37 x 2500 = 92500"
    }
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);


