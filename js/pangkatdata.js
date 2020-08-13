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
        "soal" : "\\[2^2\\]", 
        "jawaban" : "4",
        "penjelasan" : "jawaban kamu salah<br>\\[2 \\times 2 = 4\\]"
    },

    {
        "soal" : "\\[(-5)^3\\]", 
        "jawaban" : "-125",
        "penjelasan" : "jawaban kamu salah<br>\\[(-5) \\times (-5) \\times (-5) = -125\\]"
    },

    {
        "soal" : "\\[-3^4\\]", 
        "jawaban" : "-81",
        "penjelasan" : "jawaban kamu salah<br>\\[-(3 \\times 3 \\times 3 \\times 3) = -(81) = -81\\]"
    },

   
    {
        "soal" : "\\[-5^3\\]", 
        "jawaban" : "-125",
        "penjelasan" : "jawaban kamu salah<br>\\[-(5 \\times 5 \\times 5) = -(125) = -125\\]"
    },

    {
        "soal" : "\\[(-2)^4\\]", 
        "jawaban" : "16",
        "penjelasan" : "jawaban kamu salah<br>\\[(-2) \\times (-2) \\times (-2) \\times (-2) = 16\\]"
    },
    
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);



  function shuffle1(jsonData1) {
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
        "penjelasan" : "jawaban kamu salah<br>\\[\\frac{100}{200}=\\frac{100:100}{200:100} = \\frac{1}{2}\\]"
    },

    {
        "soal" : "\\[\\frac{6}{36}\\]", 
        "atas" : "1",
        "bawah" : "6",
        "penjelasan" : "jawaban kamu salah<br>\\[\\frac{6}{36}=\\frac{6:6}{36:6} = \\frac{1}{6}\\]"
    },

    {
      "soal" : "\\[\\frac{32}{64}\\]", 
      "atas" : "1",
      "bawah" : "2",
      "penjelasan" : "jawaban kamu salah<br>\\[\\frac{32}{64}=\\frac{32:32}{64:32} = \\frac{1}{2}\\]"
  },

  {
    "soal" : "\\[\\frac{45}{60}\\]", 
    "atas" : "3",
    "bawah" : "4",
    "penjelasan" : "jawaban kamu salah<br>\\[\\frac{45}{60}=\\frac{45:15}{60:15} = \\frac{3}{4}\\]"
},

{
  "soal" : "\\[\\frac{12}{28}\\]", 
  "atas" : "3",
  "bawah" : "7",
  "penjelasan" : "jawaban kamu salah<br>\\[\\frac{12}{28}=\\frac{12:4}{28:4} = \\frac{3}{7}\\]"
},

{
  "soal" : "20%", 
  "atas" : "1",
  "bawah" : "5",
  "penjelasan" : "jawaban kamu salah<br>20% = \\[\\frac{20}{100}=\\frac{20:20}{100:20} = \\frac{1}{5}\\]"
},

{
  "soal" : "0,15", 
  "atas" : "3",
  "bawah" : "20",
  "penjelasan" : "jawaban kamu salah<br>0,15 = \\[\\frac{15}{100}=\\frac{15:5}{100:5} = \\frac{3}{20}\\]"
},

{
  "soal" : "1,20", 
  "atas" : "6",
  "bawah" : "5",
  "penjelasan" : "jawaban kamu salah<br>1,20 = \\[\\frac{120}{100}=\\frac{120:20}{100:20} = \\frac{6}{5}\\]"
},

{
  "soal" : "45%", 
  "atas" : "9",
  "bawah" : "20",
  "penjelasan" : "jawaban kamu salah<br>45% = \\[\\frac{45}{100}=\\frac{45:5}{100:5} = \\frac{9}{20}\\]"
}

    
]

  jsonData1 = shuffle1(jsonData1);
  console.log(jsonData1);
