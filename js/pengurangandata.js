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
        "soal" : "-20 - 20 - (-3)", 
        "jawaban" : "-40",
        "penjelasan" : "jawaban kamu salah<br>penjelasan = (-20 - 20) - (-3) = -40 - (-3) = -40 + 3 = 37"
    },

    {
        "soal" : "-43 - 21 - 123",  
        "jawaban" : "-187",
        "penjelasan" : "jawaban kamu salah<br>penjelasan = (-43 - 21) - 123 = -64 - 123 = -187"
    },

    
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);


