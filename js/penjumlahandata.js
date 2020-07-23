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
},

{
  "soal" : "Pada malam hari, suhu di puncak suatu gunung -5°C, kemudian pada siang hari suhunya naik 12°C jadi suhu pada siang hari adalah",  
  "jawaban" : "7",
  "penjelasan" : "penjelasan <br> suhu malam = -5°C <br> kenaikan suhu 12°C <br> maka -5 + 12 = 7 "
},

{
  "soal" : "seorang pedagang mempunyai 215 ekor kambing Kemudian ia membeli lagi 282 ekor kambing Seminggu kemudian 235 ekor kambing laku terjual Berapa banyak kambing yang belum terjual",  
  "jawaban" : "262",
  "penjelasan" : "penjelasan <br>kambing awal yang dipunya pedagang = 215<br>kambing yang dibeli = 282<br>kambing yang terjual=235<br>maka 215 + 282 - 235 = 262"
},

{
  "soal" : "Diketahui -12 + y + (-26) = 30, nilai y adalah",  
  "jawaban" : "68",
  "penjelasan" : "penjelasan <br>-12 + y + (-26) = 30<br> -12 + (-26) + y = 30<br>-38 + y = 30<br>y= 30 + 38 = 68"
}

    
]

  jsonData = shuffle(jsonData);
  console.log(jsonData);


