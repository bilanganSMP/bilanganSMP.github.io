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
        "bil1" : "3",
        "bil2" : "4",
        "jawaban" : "<"
    },

    {
        "bil1" : "-3",
        "bil2" : "-7",
        "jawaban" : ">"
    },

    {
        "bil1" : "30",
        "bil2" : "-30",
        "jawaban" : ">"
    },

    {
      "bil1" : "-1",
      "bil2" : "10",
      "jawaban" : "<"
  },

  {
    "bil1" : "64",
    "bil2" : "32",
    "jawaban" : ">"
},

{
  "bil1" : "-42",
  "bil2" : "-52",
  "jawaban" : ">"
},

{
  "bil1" : "-6",
  "bil2" : "1",
  "jawaban" : "<"
},

{
  "bil1" : "99",
  "bil2" : "-99",
  "jawaban" : ">"
},

{
  "bil1" : "10",
  "bil2" : "-7",
  "jawaban" : ">"
},

{
  "bil1" : "-3",
  "bil2" : "7",
  "jawaban" : "<"
},

{
  "bil1" : "100",
  "bil2" : "20",
  "jawaban" : ">"
}
]

  jsonDatabil = shuffle(jsonDatabil);
  console.log(jsonDatabil);

 