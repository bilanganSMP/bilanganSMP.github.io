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
        "soal" : "3 + (-5) + 4", 
        "jawaban" : "2",
        "penjelasan" : "penjelasan = (3 + (-5)) + 4 = -2 + 4 = 2"
    },

    {
        "soal" : "43 + 21 + (-123)",  
        "jawaban" : "-59",
        "penjelasan" : "penjelasan = (43 + 21) + (-123) = 64 - 123 = -59"
    },

    
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);


