function shuffle(jsonDatabil) {
    var currentIndex = jsonDatabil.length, temporaryValue, randomIndex;
  
    
    while (0 !== currentIndex) {
  
      
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
     
      temporaryValue = jsonDatabil[currentIndex];
      jsonDatabil[currentIndex] = jsonDatabil[randomIndex];
      jsonDatabil[randomIndex] = temporaryValue;
    }
  
    return jsonDatabil;
  }

  var jsonDatabil = [
    {
        "bil1" : "\\[\\frac{1}{2}\\]",
        "bil2" : "\\[\\frac{2}{3}\\]",
        "jawaban" : "<",
        "penjelasan" : "ingat \\[\\frac{a}{b}\\] < atau > \\[\\frac{c}{d}\\] ↔ a x d < atau > c x b<br> 1 x 3 <> 2 x 2 <br> 3 <> 4 <br> 3 < 4"
    },

    {
        "bil1" : "\\[\\frac{3}{2}\\]",
        "bil2" : "\\[\\frac{4}{2}\\]",
        "jawaban" : "<",
        "penjelasan" : "ingat \\[\\frac{a}{b}\\] < atau > \\[\\frac{c}{b}\\] ↔ a < atau > c<br>3 < 4"
    },

    {
      "bil1" : "\\[\\frac{7}{3}\\]",
      "bil2" : "-\\[\\frac{8}{3}\\]",
      "jawaban" : ">",
      "penjelasan" : "ingat \\[\\frac{a}{b}\\] < atau > \\[\\frac{c}{b}\\] ↔ a < atau > c<br>7 > -8"
  },

  {
    "bil1" : "\\[\\frac{3}{6}\\]",
    "bil2" : "\\[\\frac{1}{9}\\]",
    "jawaban" : ">",
    "penjelasan" : "ingat \\[\\frac{a}{b}\\] < atau > \\[\\frac{c}{d}\\] ↔ a x d < atau > c x b<br> 3 x 9 <> 6 x 1 <br> 27 <> 6 <br> 27 > 6"
},

{
  "bil1" : "\\[\\frac{3}{7}\\]",
  "bil2" : "\\[\\frac{3}{5}\\]",
  "jawaban" : "<",
  "penjelasan" : "ingat \\[\\frac{a}{b}\\] < atau > \\[\\frac{c}{d}\\] ↔ a x d < atau > c x b<br> 3 x 5 <> 3 x 7 <br> 15 <> 21 <br> 27 < 6"
},

{
  "bil1" : "\\[\\frac{1}{3}\\]",
  "bil2" : "\\[\\frac{1}{6}\\]",
  "jawaban" : ">",
  "penjelasan" : "ingat \\[\\frac{a}{b}\\] < atau > \\[\\frac{c}{d}\\] ↔ a x d < atau > c x b<br> 1 x 6 <> 1 x 3 <br> 6 <> 3 <br> 6 > 3"
},

{
  "bil1" : "-\\[\\frac{3}{5}\\]",
  "bil2" : "-\\[\\frac{2}{5}\\]",
  "jawaban" : "<",
  "penjelasan" : "ingat \\[\\frac{a}{b}\\] < atau > \\[\\frac{c}{b}\\] ↔ a < atau > c<br>-3 < -2"
},
]

  jsonDatabil = shuffle(jsonDatabil);
  console.log(jsonDatabil);

 