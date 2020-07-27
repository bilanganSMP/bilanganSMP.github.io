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
        "jawaban" : "senilai",
        "penjelasan" : "3 x 14 = 42<br>7 x 6 = 42<br>bernilai sama"
    },

    {
        "soal" : "\\[\\frac{2}{3} = \\frac{4}{5}\\]", 
        "jawaban" : "tidak",
        "penjelasan" : "2 x 5 = 10<br>3 x 4 = 12<br>bernilai tidak sama"
    },

    {
        "soal" : "\\[\\frac{4}{5} = \\frac{12}{15}\\]", 
        "jawaban" : "senilai",
        "penjelasan" : "4 x 15 = 60<br>5 x 12 = 60<br>bernilai sama"
    },

    {
        "soal" : "\\[\\frac{7}{3} = \\frac{20}{6}\\]", 
        "jawaban" : "tidak",
        "penjelasan" : "7 x 6 = 42<br>3 x 20 = 60<br>bernilai tidak sama"
    },



    
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);



  function shuffle1(jsonData) {
    var currentIndex = jsonData1.length, temporaryValue, randomIndex;
  
    
    while (0 !== currentIndex) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
     
      temporaryValue = jsonData1[currentIndex];
      jsonData1[currentIndex] = jsonData1[randomIndex];
      jsonData1[randomIndex] = temporaryValue;
    }
  
    return jsonData1;
  }
var jsonData1 = [
    {
        "soal" : "\\[\\frac{100}{200}\\]", 
        "atas" : "1",
        "bawah" : "2",
        "penjelasan" : "3 x 14 = 42<br>7 x 6 = 42<br>bernilai sama"
    },

    {
        "soal" : "\\[\\frac{100}{300} = \\]", 
        "atas" : "1",
        "bawah" : "2",
        "penjelasan" : "3 x 14 = 42<br>7 x 6 = 42<br>bernilai sama"
    }



    
]

  jsonData1 = shuffle(jsonData1);
  console.log(jsonData1);


