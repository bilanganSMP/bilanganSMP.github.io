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
        "soal" : "\\[0,15 \\times 2\\frac{1}{5}\\]", 
        "atas" : "33",
        "bawah" : "100",
        "benar" : "jawaban kamu benar",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{15}{100} \\times \\frac{2 \\times 5 + 1}{5}\\]<br><br>=\\[\\frac{15}{100} \\times \\frac{11}{5}\\]<br><br>=\\[\\frac{165}{500} = \\frac{165:5}{500:5} = \\frac{33}{100}\\]"
    },

    {
        "soal" : "\\[36\\]%\\[\\times 1\\frac{1}{9} \\times \\frac{5}{6}\\]", 
        "atas" : "1",
        "bawah" : "3",
        "benar" : "jawaban kamu benar",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{36}{100} \\times \\frac{1 \\times 9 + 1}{9} \\times \\frac{5}{6}\\]<br><br>=\\[\\frac{36}{100} \\times \\frac{10}{9} \\times \\frac{5}{6}\\]<br><br>=\\[\\frac{1800}{5400} = \\frac{1800:1800}{5400:1800} = \\frac{1}{3}\\]"
    },

    
    {
        "soal" : "\\[3\\frac{1}{2} : 2,8\\]", 
        "atas" : "5",
        "bawah" : "4",
        "benar" : "jawaban kamu benar<br><br>dapat disederhanakan menjadi \\[\\frac{5}{4} = \\frac{4}{4} + \\frac{1}{4} = 1\\frac{1}{4}\\]",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{3 \\times 2 + 1}{2} : \\frac{28}{10}\\]<br><br>=\\[\\frac{7}{2} \\times \\frac{10}{28}\\]<br><br>=\\[\\frac{70}{56} = \\frac{70:14}{56:14} = \\frac{5}{4}\\]"
    },

    
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);


