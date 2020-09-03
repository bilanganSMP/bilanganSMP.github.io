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
        "soal" : "\\[\\frac{3}{8} + \\frac{3}{4} + \\frac{3}{2}\\]", 
        "atas" : "21",
        "bawah" : "8",
        "benar" : "jawaban kamu benar<br>diubah menjadi pecahan campuran = \\[2\\frac{5}{8}\\]<br>desimal = 21 : 8 = 2,62<br> persen = \\[\\frac{21}{8}\\] X 100 = 262,5%",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{3}{8} + \\frac{3}{4} + \\frac{3}{2}\\]<br><br>=\\[\\frac{3}{8} + \\frac{3 \\times 2}{4 \\times 2} + \\frac{3 \\times 4}{2 \\times 4}\\]<br><br>=\\[\\frac{3}{8} + \\frac{6}{8} + \\frac{12}{8}\\]<br><br>=\\[\\frac{21}{8}\\]"
    },

    {
        "soal" : "\\[1\\frac{2}{3} + 2\\frac{2}{3} + \\frac{1}{6}\\]", 
        "atas" : "9",
        "bawah" : "2",
        "benar" : "jawaban kamu benar<br>diubah menjadi pecahan campuran = \\[4\\frac{1}{2}\\]<br>desimal = 9 : 2 = 4,5<br> persen = \\[\\frac{9}{2}\\] X 100 = 450%",
        "salah" : "jawaban kamu salah<br><br>\\[1\\frac{2}{3} + 2\\frac{2}{3} + \\frac{1}{6}\\]<br><br>=\\[\\frac{1 \\times 3 + 2}{3} + \\frac{2 \\times 3 + 2}{3} + \\frac{1}{6}\\]<br><br>=\\[\\frac{5}{3} + \\frac{8}{3} + \\frac{1}{6}\\]<br><br>=\\[\\frac{5 \\times 2}{3 \\times 2} + \\frac{8 \\times 2}{3 \\times 2} + \\frac{1}{6}<br><br>=\\frac{10}{6} + \\frac{16}{6} + \\frac{1}{6}\\]<br><br>=\\[\\frac{27}{6}\\] = \\[\\frac{27:3}{6:3}\\] = \\[\\frac{9}{2}\\]"
    },

    
    {
        "soal" : "12% \\[+ 2\\frac{1}{5} + 0,3\\]", 
        "atas" : "131",
        "bawah" : "50",
        "benar" : "jawaban kamu benar<br>diubah menjadi pecahan campuran = \\[2\\frac{31}{50}\\]<br>desimal = 131 : 50 = 2,62<br> persen = \\[\\frac{131}{50}\\] X 100 = 262%",
        "salah" : "jawaban kamu salah<br><br>12% \\[+ 2\\frac{1}{5} + 0,3\\]<br><br>=\\[\\frac{12:2}{100:2} + \\frac{2 \\times 5 + 1}{5} + \\frac{3}{10}\\]<br><br>=\\[\\frac{6}{50} + \\frac{11}{5} + \\frac{3}{10}\\]<br><br>=\\[\\frac{6}{50} + \\frac{11 \\times 10}{5 \\times 10} + \\frac{3 \\times 5}{10 \\times 5}\\]<br><br>=\\[\\frac{6}{50} + \\frac{110}{50} + \\frac{15}{50}\\]<br><br>=\\[\\frac{131}{50}\\]"
    },

    {
        "soal" : "\\[3\\frac{4}{9} - 1\\frac{1}{3} - \\frac{1}{3}\\]", 
        "atas" : "16",
        "bawah" : "9",
        "benar" : "jawaban kamu benar<br>diubah menjadi pecahan campuran = \\[1\\frac{7}{9}\\]<br>desimal = 16 : 9 = 1,77<br> persen = \\[\\frac{16}{9}\\] X 100 = 177,7%",
        "salah" : "jawaban kamu salah<br><br>\\[3\\frac{4}{9} - 1\\frac{1}{3} - \\frac{1}{3}\\]<br><br>=\\[\\frac{3 \\times 9 + 4}{9} - \\frac{1 \\times 3 + 1}{3} - \\frac{1}{3}\\]<br><br>=\\[\\frac{31}{9} - \\frac{4}{3} - \\frac{1}{3}\\]<br><br>=\\[\\frac{31}{9} - \\frac{4 \\times 3}{3 \\times 3} - \\frac{1 \\times 3}{3 \\times 3}<br><br>=\\frac{31}{9} - \\frac{12}{9} - \\frac{3}{9}\\]<br><br>=\\[\\frac{16}{9}\\]"
    },

    {
        "soal" : "\\[\\frac{1}{3} - \\frac{4}{6} + \\frac{5}{2}\\]", 
        "atas" : "13",
        "bawah" : "6",
        "benar" : "jawaban kamu benar<br>diubah menjadi pecahan campuran = \\[2\\frac{1}{6}\\]<br>desimal = 13 : 6 = 2,16<br> persen = \\[\\frac{13}{6}\\] X 100 = 216,6%",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{1}{3} - \\frac{4}{6} + \\frac{5}{2}\\]=\\[\\frac{1 \\times 2}{3 \\times 2} + \\frac{4}{6} + \\frac{5 \\times 3}{2 \\times 3}\\]<br><br>=\\[\\frac{2}{6} - \\frac{4}{6} + \\frac{15}{6}\\]<br><br>=\\[\\frac{13}{6}\\]"
    },

    {
        "soal" : "\\[3\\frac{2}{5} -\\] 45%", 
        "atas" : "59",
        "bawah" : "20",
        "benar" : "jawaban kamu benar<br>diubah menjadi pecahan campuran = \\[2\\frac{19}{20}\\]<br>desimal = 59 : 20 = 2,95<br> persen = \\[\\frac{59}{20}\\] X 100 = 295%",
        "salah" : "jawaban kamu salah<br><br>\\[3\\frac{2}{5} -\\] 45% =\\[\\frac{3 \\times 5 + 2}{5} - \\frac{45}{100}\\]<br><br>=\\[\\frac{17 \\times 20}{5 \\times 20} - \\frac{45}{100}\\]<br><br>=\\[\\frac{340}{100} - \\frac{45}{100} = \\frac{295:5}{100:5} = \\frac{59}{20} \\]"
    },

    {
        "soal" : "2,3 - 20% \\[+ \\frac{3}{5}\\]", 
        "atas" : "27",
        "bawah" : "10",
        "benar" : "jawaban kamu benar<br>diubah menjadi pecahan campuran = \\[2\\frac{7}{10}\\]<br>desimal = 27 : 10 = 2,7<br> persen = \\[\\frac{27}{10}\\] X 100 = 270%",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{23}{10} - \\frac{20}{100} + \\frac{3}{5}\\]=\\[\\frac{23 \\times 10}{10 \\times 10} - \\frac{20}{100} + \\frac{3 \\times 20}{5 \\times 10}\\]<br><br>=\\[\\frac{230}{100} - \\frac{20}{100} + \\frac{60}{100}\\]<br><br>=\\[\\frac{270}{100} = \\frac{270:10}{100:10} = \\frac{27}{10}\\]"
    },

    {
        "soal" : "\\[\\frac{23}{50} -\\] 0,12", 
        "atas" : "17",
        "bawah" : "50",
        "benar" : "jawaban kamu benar<br>desimal = 17 : 50 = 0,34<br> persen = \\[\\frac{17}{50}\\] X 100 = 34%",
        "salah" : "jawaban kamu salah<br><br>\\[\\frac{23}{50} - \\frac{12}{100}=\\]\\[\\frac{23 \\times 2}{50 \\times 2} - \\frac{12}{100}\\]<br><br>=\\[\\frac{46}{100} - \\frac{12}{100}\\]<br><br>=\\[\\frac{34}{100} = \\frac{34:2}{100:2} = \\frac{17}{50}\\]"
    },
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);


