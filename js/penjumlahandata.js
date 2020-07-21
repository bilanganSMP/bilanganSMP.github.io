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

    {
      "soal" : "–27 + 25",  
      "jawaban" : "-2",
      "penjelasan" : "penjelasan = -27 + 25 = 25 - 27 = -2"
  },

  {
    "soal" : "-43 + 33 + (-2)",  
    "jawaban" : "-12",
    "penjelasan" : "penjelasan = (-43 + 33) + (-2) = -10 + (-2) = -12"
},

{
  "soal" : "-5 + 32 + 2 + (-2)",  
  "jawaban" : "27",
  "penjelasan" : "penjelasan = (-5 + 32) + (2 + (-2)) = 27 + 0 = 27 "
},

{
  "soal" : "12 - 3 + (-4)",  
  "jawaban" : "5",
  "penjelasan" : "penjelasan = (12-3) + (-4) = 9 + (-4) = 9 - 4 = 5"
}

    
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);


