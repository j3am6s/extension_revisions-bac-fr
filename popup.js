var jsonData= qa;

var number = Math.floor(Math.random() * (236 - 1) + 1);

var oui = jsonData[0]["qa"][number.toString()][0];

document.getElementById('oui').innerHTML = oui;

document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('answer');
  checkButton.addEventListener('click', function() {
   if (document.getElementById('answer').innerHTML == "reponse") {
       document.getElementById('answer').innerHTML = "question";
       document.getElementById('oui').innerHTML = jsonData[0]["qa"][number.toString()][1];
   } else if (document.getElementById('answer').innerHTML == "question") {
       document.getElementById('answer').innerHTML = "reponse";
       document.getElementById('oui').innerHTML = jsonData[0]["qa"][number.toString()][0];
   };
  }, false);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('next');
  checkButton.addEventListener('click', function() {
   number = Math.floor(Math.random() * (236 - 1) + 1);
   oui = jsonData[0]["qa"][number.toString()][0];
   document.getElementById('oui').innerHTML = oui;
   document.getElementById('answer').innerHTML = "reponse";
  }, false);
}, false);
