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
        "soal" : "75 : 5", 
        "jawaban" : "15",
        "penjelasan" : "jawaban kamu salah<br>75 : 5 = 15"
    },

    {
        "soal" : "(100 : 25) : 2", 
        "jawaban" : "2",
        "penjelasan" : "jawaban kamu salah<br>(100 : 25) : 2 = 4 : 2 = 2"
    },

    {
        "soal" : "pada saat hari raya idul adha, panitia akan membagikan 6240 kg daging kepada 65 orang. Berapa kilogram-kah setiap orang menerima daging?", 
        "jawaban" : "96",
        "penjelasan" : "jawaban kamu salah<br>penjelasan = 6240 : 65 = 96"
    },

    {
        "soal" : "jika p = 850 : 5 dan q = 100 : 10 hasil p : q adalah", 
        "jawaban" : "17",
        "penjelasan" : "jawaban kamu salah<br>p = 170<br>q = 10<br>p : q = 170 : 10 = 17"
    },

    {
        "soal" : "-756 : 12", 
        "jawaban" : "-63",
        "penjelasan" : "jawaban kamu salah<br>-756 : 12 = -63"
    },

    {
        "soal" : "-276 : (-12)", 
        "jawaban" : "23",
        "penjelasan" : "jawaban kamu salah<br>-276 : (-12) = 23"
    }
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);


