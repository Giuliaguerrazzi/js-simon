// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

$(document).ready( function () {

  // alert con i 5 numeri
  numarray = [];

  var number = randomNumber (1, 50);

  for (var i = 0; i < 5; i++) {
    var number = randomNumber (1, 50);

    if (! numarray.includes(number) ) {
      numarray.push(number);
    }
  }
  console.log(numarray);

  alert(numarray);

// 30 secondi per inserire i numeri
  var display = $('.display');

  var secondi = 30;

  var interval = setInterval( function() {

    if(secondi == 0) {
      display.text('fine');

      clearInterval(interval);
    }
    else {
      display.text(secondi);
      secondi--;
    }
  }, 1000);

// numeri da inserire

userarray = [];

for (var i = 0; i < 5; i++) {
  var userNumber = parseInt( prompt('Inserisci numero') );

  if (! userarray.includes(userNumber) ) {
    userarray.push(userNumber);
  }
}

console.log(userarray);






  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) - min;
  }

})
