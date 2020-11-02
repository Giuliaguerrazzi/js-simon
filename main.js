// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(document).ready( function () {

  var waitTime = 3000;

  // alert con i 5 numeri
  numarray = [];

  while (numarray.length < 5) {
    var randNumber = randomNumber(1, 50);

    if (! numarray.includes(randNumber) ) {
        numarray.push(randNumber);
    }
  }
  console.log(numarray);

  alert(numarray);

// Timer
 setTimeout(function() {
   var userNumber = [];

   while (userNumber.length < 5) {
     var newUserNumber = parseInt( prompt('Inserisci il ' + (userNumber.length + 1) + 'numero'));

     while (isNaN(newUserNumber)) {
       var newUserNumber = parseInt( prompt('Nuemro non valido! Inserisci il ' + (userNumber.length + 1) + 'numero'));
     }
     // se il numero non c'è push nell'array
     if (! userNumber.includes(newUserNumber)) {
       userNumber.push(newUserNumber);
     } else {
     alert('Numero già inserito')
     }
   }

   numeriTrovati = [];

   for (var i = 0; i < userNumber; i++) {
     if (numarray.includes(userNumber[i])) {
       numeriTrovati.push(userNumber[i]);
     }
   }

   alert('RISULTATI\n' + numarray + ' Lista utente '+ userNumber + ' Indovinati ' + numeriTrovati.length + ' Numeri ' + numeriTrovati);

}, waitTime);


// function
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

})
