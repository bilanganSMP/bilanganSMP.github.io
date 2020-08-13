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

    {
        "soal" : "\\[375\\]%\\[: 2,5 : 3\\]", 
        "atas" : "1",
        "bawah" : "2",
        "benar" : "jawaban kamu benar<br><br>\\]",
        "salah" : "jawaban kamu salah<br><br>\\[(\\frac{375}{100} : \\frac{25}{10}) : \\frac{3}{1}\\]<br><br>=\\[(\\frac{375}{100} \\times \\frac{10}{25}) : \\frac{3}{1}\\]<br><br>=\\[\\frac{3750}{2500} : \\frac{3}{1} = \\frac{3750}{2500} \\times \\frac{1}{3}\\]<br><br> \\[= \\frac{3750}{7500} = \\frac{3750:3750}{7500:3750} = \\frac{1}{2}\\]"
    },

    {
        "soal" : "\\[0,21 \\times 10\\]%", 
        "atas" : "21",
        "bawah" : "1000",
        "benar" : "jawaban kamu benar",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{21}{100} \\times \\frac{10}{100}\\]<br><br>=\\[\\frac{210}{10000} = \\frac{210:10}{10000:10}\\]<br><br>=\\[\\frac{21}{1000}\\]"
    },

    {
        "soal" : "\\[3\\frac{1}{2} \\times 2\\frac{2}{4}\\]", 
        "atas" : "35",
        "bawah" : "4",
        "benar" : "jawaban kamu benar<br><br>dapat disederhanakan menjadi \\[\\frac{35}{4} = \\frac{28}{4} + \\frac{3}{4} = 8\\frac{3}{4}\\]",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{3 \\times 2 + 1}{2} \\times \\frac{2 \\times 4 + 2}{4}\\]<br><br>=\\[\\frac{7}{2} \\times \\frac{10}{4}\\]<br><br>=\\[\\frac{70}{8} = \\frac{70:2}{8:2} = \\frac{35}{4}\\]"
    },

    {
        "soal" : "\\[3\\frac{5}{6} \\times \\frac{1}{3} : \\frac{10}{5}\\]", 
        "atas" : "23",
        "bawah" : "36",
        "benar" : "jawaban kamu benar",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{3 \\times 6 + 5}{6} \\times \\frac{1}{3} \\times \\frac{5}{10}\\]<br><br>=\\[\\frac{23 \\times 1 \\times 5}{6 \\times 3 \\times 10}\\]<br><br>=\\[\\frac{70}{8} = \\frac{70:2}{8:2} = \\frac{35}{4}\\]"
    },

    {
        "soal" : "\\[\\frac{3}{6} \\times 1,3 : 10\\]%", 
        "atas" : "13",
        "bawah" : "2",
        "benar" : "jawaban kamu benar<br><br>dapat disederhanakan menjadi \\[\\frac{13}{2} = \\frac{12}{2} + \\frac{1}{2} = 6\\frac{1}{2}\\]",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{3}{6} \\times \\frac{13}{10} \\times \\frac{100}{10}\\]<br><br>=\\[\\frac{3 \\times 13 \\times 100}{6 \\times 10 \\times 10}\\]<br><br>=\\[\\frac{3900}{600} = \\frac{3900:300}{600:300} = \\frac{13}{2}\\]"
    },

    {
        "soal" : "\\[\\frac{1}{2} : \\frac{3}{2}\\]", 
        "atas" : "1",
        "bawah" : "3",
        "benar" : "jawaban kamu benar<br><br>",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{1}{2} : \\frac{3}{2}\\]<br><br>=\\[\\frac{1}{2} \\times \\frac{2}{3} = \\frac{2}{6}\\]<br><br>=\\[\\frac{2:2}{6:2} =  \\frac{1}{3} \\]"
    },
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);


