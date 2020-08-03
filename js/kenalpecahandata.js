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
        "penjelasan" : "jawaban kamu salah<br>3 x 14 = 42<br>7 x 6 = 42<br>bernilai sama"
    },

    {
        "soal" : "\\[\\frac{2}{3} = \\frac{4}{5}\\]", 
        "jawaban" : "tidak",
        "penjelasan" : "jawaban kamu salah<br>2 x 5 = 10<br>3 x 4 = 12<br>bernilai tidak sama"
    },

    {
        "soal" : "\\[\\frac{4}{5} = \\frac{12}{15}\\]", 
        "jawaban" : "senilai",
        "penjelasan" : "jawaban kamu salah<br>4 x 15 = 60<br>5 x 12 = 60<br>bernilai sama"
    },

    {
        "soal" : "\\[\\frac{7}{3} = \\frac{20}{6}\\]", 
        "jawaban" : "tidak",
        "penjelasan" : "jawaban kamu salah<br>7 x 6 = 42<br>3 x 20 = 60<br>bernilai tidak sama"
    },

    {
      "soal" : "\\[\\frac{1}{2} = \\frac{3}{5}\\]", 
      "jawaban" : "tidak",
      "penjelasan" : "jawaban kamu salah<br>1 x 5 = 5<br>2 x 3 = 6<br>bernilai tidak sama"
  },

  {
    "soal" : "\\[\\frac{5}{10} = \\frac{20}{25}\\]", 
    "jawaban" : "tidak",
    "penjelasan" : "jawaban kamu salah<br>5 x 25 = 125<br>10 x 20 = 200<br>bernilai tidak sama"
},

{
  "soal" : "\\[\\frac{10}{20} = \\frac{50}{100}\\]", 
  "jawaban" : "senilai",
  "penjelasan" : "jawaban kamu salah<br>10 x 100 = 1000<br>20 x 50 = 1000<br>bernilai sama"
},

{
  "soal" : "\\[\\frac{3}{6} = \\frac{36}{72}\\]", 
  "jawaban" : "senilai",
  "penjelasan" : "jawaban kamu salah<br>3 x 72 = 216<br>6 x 36 = 216<br>bernilai sama"
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


  function shuffle2(jsonData2) {
    var currentIndex = jsonData2.length, temporaryValue, randomIndex;
  
    
    while (0 !== currentIndex) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
     
      temporaryValue = jsonData2[currentIndex];
      jsonData2[currentIndex] = jsonData2[randomIndex];
      jsonData2[randomIndex] = temporaryValue;
    }
  
    return jsonData2;
  }
var jsonData2 = [
    {
        "soal" : "\\[5\\frac{3}{8}\\]", 
        "atas" : "43",
        "bawah" : "8",
        "penjelasan" : "jawaban kamu salah<br>\\[5\\frac{3}{8} = \\frac{5\\times 8 + 3}{8} = \\frac{43}{8}\\]"
    },

    {
        "soal" : "\\[2\\frac{3}{5}\\]", 
        "atas" : "13",
        "bawah" : "5",
        "penjelasan" : "jawaban kamu salah<br>\\[2\\frac{3}{5} = \\frac{2\\times 5 + 3}{5} = \\frac{13}{5}\\]"
    },

    {
      "soal" : "\\[11\\frac{5}{12}\\]", 
      "atas" : "137",
      "bawah" : "12",
      "penjelasan" : "jawaban kamu salah<br>\\[11\\frac{5}{12} = \\frac{11\\times 12 + 5}{12} = \\frac{137}{12}\\]"
  },

  {
    "soal" : "\\[10\\frac{1}{16}\\]", 
    "atas" : "161",
    "bawah" : "16",
    "penjelasan" : "jawaban kamu salah<br>\\[10\\frac{1}{16} = \\frac{10\\times 16 + 1}{16} = \\frac{161}{16}\\]"
},

{
  "soal" : "\\[5\\frac{5}{10}\\]", 
  "atas" : "55",
  "bawah" : "10",
  "penjelasan" : "jawaban kamu salah<br>\\[5\\frac{5}{10} = \\frac{5\\times 10 + 5}{10} = \\frac{55}{10}\\]"
},



    
]

  jsonData2 = shuffle2(jsonData2);
  console.log(jsonData2);
