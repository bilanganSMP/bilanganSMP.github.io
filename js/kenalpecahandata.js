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
        "soal" : "\\[\\frac{3}{7} = \\frac{6}{14}\\]", 
        "jawaban" : "senilai"
        
    },

    {
        "soal" : "\\[\\frac{2}{3} = \\frac{4}{5}\\]", 
        "jawaban" : "tidak"
        
    },

    {
        "soal" : "\\[\\frac{4}{5} = \\frac{12}{15}\\]", 
        "jawaban" : "senilai"
        
    },

    {
        "soal" : "\\[\\frac{7}{3} = \\frac{20}{6}\\]", 
        "jawaban" : "tidak"
        
    },



    
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);


