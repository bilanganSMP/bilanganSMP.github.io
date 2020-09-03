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

    {
      "soal" : "\\[(2^2)^3\\]", 
      "jawaban" : "64",
      "penjelasan" : "jawaban kamu salah<br>\\[2^{2\\times3} = 2^6 = 64\\]"
  },

  {
    "soal" : "\\[(3^2)^4\\]", 
    "jawaban" : "6561",
    "penjelasan" : "jawaban kamu salah<br>\\[3^{2\\times4} = 3^8 = 6561\\]"
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
        "soal" : "\\[5^2 + (-5)^3\\]", 
        "jawaban" : "-100",
        "penjelasan" : "jawaban kamu salah<br>\\[5 \\times 5 + (-5) \\times (-5) \\times (-5)\\]<br><br>\\[= 25 + (-125) = -100\\]"
    },

    {
      "soal" : "\\[(-4)^2 - 4^3\\]", 
      "jawaban" : "-48",
      "penjelasan" : "jawaban kamu salah<br>\\[(-4) \\times (-4) - 4 \\times 4 \\times 4\\]<br><br>\\[= 14 - 64 = -48\\]"
  },

  {
    "soal" : "\\[(-2)^3 \\times 3^2 + (-5)^2\\]", 
    "jawaban" : "-47",
    "penjelasan" : "jawaban kamu salah<br>\\[=(-2) \\times (-2) \\times (-2) \\times  3 \\times 3 +\\]\\[ (-5) \\times (-5)\\]<br><br>\\[= -8 \\times 9 + 25 = -72 + 25 = -47\\]"
},

{
  "soal" : "\\[-3^2 - 4^5 : 2^7\\]", 
  "jawaban" : "-17",
  "penjelasan" : "jawaban kamu salah<br>\\[=-(3 \\times 3) - 4 \\times 4 \\times 4 \\times 4 \\times 4 : 2 \\times \\]\\[2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\]<br><br>\\[= -9 - 1024 : 128 = -9 - 8 = -17\\]"
},
  
{
  "soal" : "\\[4^3 \\times 4^2\\]", 
  "jawaban" : "1024",
  "penjelasan" : "jawaban kamu salah<br>\\[4^{3+2} = 4^5 = 1024\\]"
},

{
  "soal" : "\\[2^5 \\times 2^6\\]", 
  "jawaban" : "2048",
  "penjelasan" : "jawaban kamu salah<br>\\[2^{5+8} = 2^{11} = 2048\\]"
},

{
  "soal" : "\\[3^8 : 3^6\\]", 
  "jawaban" : "9",
  "penjelasan" : "jawaban kamu salah<br>\\[3^{8-6} = 3^{2} = 9\\]"
},

{
  "soal" : "\\[2^{10} : 2^5\\]", 
  "jawaban" : "32",
  "penjelasan" : "jawaban kamu salah<br>\\[2^{10-5} = 2^{5} = 32\\]"
},

{
  "soal" : "\\[2^{10} : 2^8 \\times 2^2\\]", 
  "jawaban" : "16",
  "penjelasan" : "jawaban kamu salah<br>\\[2^{10-8+2} = 2^{4} = 16\\]"
},

{
  "soal" : "\\[5^3 \\times 5^5 : 5^4\\]", 
  "jawaban" : "125",
  "penjelasan" : "jawaban kamu salah<br>\\[5^{3+5-4} = 2^{4} = 125\\]"
},

]

  jsonData1 = shuffle1(jsonData1);
  console.log(jsonData1);
