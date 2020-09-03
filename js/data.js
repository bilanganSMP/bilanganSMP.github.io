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
        "soal" : "Manakah di antara bilangan berikut yang merupakan bilangan terkecil?",
        "j1" : "1",
        "j2" : "-5",
        "j3" : "6",
        "j4" : "-1", 
        "jawaban" : "-5"
    },

    {
        "soal" : "Diketahui dua buah bilangan bulat positif A dan B. diketahui, bilangan A tersusun atas 3 angka, sedangkan bilangan B tersusun atas 4 angka. Pernyataan di bawah ini yang benar adalah...",
        "j1" : "A ≥ B",
        "j2" : "A > B",
        "j3" : "A < B",
        "j4" : "tidak ada yang benar",   
        "jawaban" : "A < B"
    },

    {
        "soal" : "X merupakan bilangan bulat positif yang terdiri dari 3 angka. Sedangkan Y merupakan bilangan bulat negatif yang juga terdiri dari 3 buah angka. Jika kita membandingkan kedua bilangan bulat tersebut, pernyataan di bawah ini yang benar adalah...",
        "j1" : "X > Y",
        "j2" : "X < Y",
        "j3" : "X = Y",
        "j4" : "Y ≥ X",   
        "jawaban" : "X > Y"
    },

    {
        "soal" : "Bilangan C dan D sama-sama tersusun atas 3 buah angka yaitu sebagai berikut: Bilangan C = ab2 Bilangan D = ab9 Jika setiap huruf dalam bilangan diatas mewakili sebuah angka, maka bilangan yang paling kecil adalah...",
        "j1" : "C > D",
        "j2" : "C < D",
        "j3" : "C = D",
        "j4" : "C ≥ D",   
        "jawaban" : "C > D"
    },
    
    {
        "soal" : "Perhatikan dua buah bilangan berikut: M = 5abcd N = 8cde Jika setiap huruf pada bilangan diatas mewakili sebuah angka, maka diantara option di bawah ini yang benar adalah...",
        "j1" : "M > N",
        "j2" : "M < N",
        "j3" : "M = N",
        "j4" : "M ≤ N",   
        "jawaban" : "M > N"
    },

    {
        "soal" : "Diketahui bilangan bulat positif K dan bilangan bulat negatif L. Bilangan K tersusun dari 4 angka, sedangkan bilangan L tersusun dari 5 angka., maka diantara option di bawah ini yang benar adalah...",
        "j1" : "K > L",
        "j2" : "K < L",
        "j3" : "K = L",
        "j4" : "K ≤ L",   
        "jawaban" : "K > L"
    },
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);